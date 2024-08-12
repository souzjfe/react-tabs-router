import React, { ReactNode } from "react";
interface TabPanelProps {
    value: string;
    children: ReactNode;
}
export declare const TabPanel: ({ value, children }: TabPanelProps) => React.JSX.Element | null;
export {};
