"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTabs = exports.useTabTriggerActive = exports.Tabs = void 0;
var react_1 = __importStar(require("react"));
var TabPanel_1 = require("./TabPanel");
var TabTrigger_1 = require("./TabTrigger");
var GerenciarEstudante = function () {
    return (react_1.default.createElement(exports.Tabs, null,
        react_1.default.createElement("h1", null, "Navega\u00E7\u00E3o por Tabs com Compositions e Contexto (TypeScript)"),
        react_1.default.createElement("div", null,
            react_1.default.createElement(TabTrigger_1.TabTrigger, { to: "tab1" }, "Tab 1"),
            react_1.default.createElement(TabTrigger_1.TabTrigger, { to: "tab2" }, "Tab 2"),
            react_1.default.createElement(TabTrigger_1.TabTrigger, { to: "tab3" }, "Tab 3")),
        react_1.default.createElement("div", null,
            react_1.default.createElement(TabPanel_1.TabPanel, { value: "tab1" },
                react_1.default.createElement("p", null, "Conte\u00FAdo da Tab 1")),
            react_1.default.createElement(TabPanel_1.TabPanel, { value: "tab2" },
                react_1.default.createElement("p", null, "Conte\u00FAdo da Tab 2")),
            react_1.default.createElement(TabPanel_1.TabPanel, { value: "tab3" },
                react_1.default.createElement("p", null, "Conte\u00FAdo da Tab 3")))));
};
exports.default = GerenciarEstudante;
var TabsContext = (0, react_1.createContext)(undefined);
var Tabs = function (_a) {
    var children = _a.children, defaultTab = _a.defaultTab;
    var _b = (0, react_1.useState)(function () {
        var urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('tab') || defaultTab || '';
    }), activeTab = _b[0], setActiveTab = _b[1];
    var handleTabClick = function (value) {
        if (value !== activeTab) {
            window.history.pushState(null, '', "?tab=".concat(value));
            setActiveTab(value); // Atualiza o estado
        }
    };
    (0, react_1.useEffect)(function () {
        var handlePopState = function () {
            var urlParams = new URLSearchParams(window.location.search);
            var tabFromUrl = urlParams.get('tab');
            if (tabFromUrl && tabFromUrl !== activeTab) {
                setActiveTab(tabFromUrl);
            }
        };
        window.addEventListener('popstate', handlePopState);
        return function () { return window.removeEventListener('popstate', handlePopState); };
    }, [activeTab]);
    return (react_1.default.createElement(TabsContext.Provider, { value: { activeTab: activeTab, handleTabClick: handleTabClick } }, children));
};
exports.Tabs = Tabs;
var useTabTriggerActive = function (tab) {
    var activeTab = (0, exports.useTabs)().activeTab;
    return { isActive: activeTab === tab };
};
exports.useTabTriggerActive = useTabTriggerActive;
var useTabs = function () {
    var context = (0, react_1.useContext)(TabsContext);
    if (!context) {
        throw new Error('useTabs must be used within a Tabs');
    }
    return context;
};
exports.useTabs = useTabs;
