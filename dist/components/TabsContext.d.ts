import React, { ReactNode } from 'react';
declare const GerenciarEstudante: React.FC;
export default GerenciarEstudante;
interface TabsContextProps {
    activeTab: string;
    handleTabClick: (value: string) => void;
}
interface TabsProps {
    defaultTab?: string;
    children: ReactNode;
}
export declare const Tabs: ({ children, defaultTab }: TabsProps) => React.JSX.Element;
export declare const useTabTriggerActive: (tab: string) => {
    isActive: boolean;
};
export declare const useTabs: () => TabsContextProps;
