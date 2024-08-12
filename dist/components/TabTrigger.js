"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabTrigger = void 0;
var react_1 = __importDefault(require("react"));
var TabsContext_1 = require("./TabsContext");
var TabTrigger = function (_a) {
    var to = _a.to, children = _a.children;
    var _b = (0, TabsContext_1.useTabs)(), activeTab = _b.activeTab, handleTabClick = _b.handleTabClick;
    var isActive = activeTab === to;
    return (react_1.default.createElement("button", { onClick: function () { return handleTabClick(to); }, style: {
            backgroundColor: isActive ? 'lightgray' : 'white',
            cursor: 'pointer',
        } }, typeof children === 'function' ? children(isActive) : children));
};
exports.TabTrigger = TabTrigger;
