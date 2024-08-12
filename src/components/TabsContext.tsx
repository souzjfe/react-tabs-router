import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'
import { TabPanel } from './TabPanel'
import { TabTrigger } from './TabTrigger'

const GerenciarEstudante: React.FC = () => {
  return (
    <Tabs>
      <h1>Navegação por Tabs com Compositions e Contexto (TypeScript)</h1>
      <div>
        <TabTrigger to="tab1">Tab 1</TabTrigger>
        <TabTrigger to="tab2">Tab 2</TabTrigger>
        <TabTrigger to="tab3">Tab 3</TabTrigger>
      </div>

      <div>
        <TabPanel value="tab1">
          <p>Conteúdo da Tab 1</p>
        </TabPanel>
        <TabPanel value="tab2">
          <p>Conteúdo da Tab 2</p>
        </TabPanel>
        <TabPanel value="tab3">
          <p>Conteúdo da Tab 3</p>
        </TabPanel>
      </div>
    </Tabs>
  )
}

export default GerenciarEstudante

interface TabsContextProps {
  activeTab: string
  handleTabClick: (value: string) => void
}

interface TabsProps {
  defaultTab?: string
  children: ReactNode
}

const TabsContext = createContext<TabsContextProps | undefined>(undefined)

export const Tabs = ({ children, defaultTab }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(() => {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get('tab') || defaultTab || ''
  })

  const handleTabClick = (value: string) => {
    if (value !== activeTab) {
      window.history.pushState(null, '', `?tab=${value}`)
      setActiveTab(value) // Atualiza o estado
    }
  }

  useEffect(() => {
    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search)
      const tabFromUrl = urlParams.get('tab')
      if (tabFromUrl && tabFromUrl !== activeTab) {
        setActiveTab(tabFromUrl)
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [activeTab])
  return (
    <TabsContext.Provider value={{ activeTab, handleTabClick }}>
      {children}
    </TabsContext.Provider>
  )
}
export const useTabTriggerActive = (tab: string) => {
  const { activeTab } = useTabs()
  return { isActive: activeTab === tab }
}
export const useTabs = (): TabsContextProps => {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error('useTabs must be used within a Tabs')
  }
  return context
}