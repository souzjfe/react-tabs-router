import React, { ReactNode } from "react";
interface TabTriggerProps {
    to: string;
    children: ReactNode | ((activeTab: boolean) => ReactNode);
}
export declare const TabTrigger: ({ to, children }: TabTriggerProps) => React.JSX.Element;
export {};
