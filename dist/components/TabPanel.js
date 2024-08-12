"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabPanel = void 0;
var react_1 = __importDefault(require("react"));
var TabsContext_1 = require("./TabsContext");
var TabPanel = function (_a) {
    var value = _a.value, children = _a.children;
    var activeTab = (0, TabsContext_1.useTabs)().activeTab;
    return activeTab === value ? react_1.default.createElement("div", null, children) : null;
};
exports.TabPanel = TabPanel;
