import React, { ReactNode } from "react"
import { useTabs } from "./TabsContext"

interface TabTriggerProps {
  to: string
  children: ReactNode | ((activeTab: boolean) => ReactNode)
}

export const TabTrigger = ({ to, children }: TabTriggerProps) => {
  const { activeTab, handleTabClick } = useTabs()
  const isActive = activeTab === to

  return (
    <button
      onClick={() => handleTabClick(to)}
      style={{
        backgroundColor: isActive ? 'lightgray' : 'white',
        cursor: 'pointer',
      }}
    >
      {typeof children === 'function' ? children(isActive) : children}
    </button>
  )
}