import React, { ReactNode } from "react"
import { useTabs } from "./TabsContext"

interface TabPanelProps {
  value: string
  children: ReactNode
}

export const TabPanel = ({ value, children }: TabPanelProps) => {
  const { activeTab } = useTabs()

  return activeTab === value ? <div>{children}</div> : null
}
