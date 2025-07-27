var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx } from "react/jsx-runtime";
// context/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect, } from "react";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { defaultTheme } from "./themes";
var THEME_STORAGE_KEY = "@theme";
var ThemeContext = createContext(undefined);
export var ThemeProvider = function (_a) {
    var children = _a.children, _b = _a.themeConfig, themeConfig = _b === void 0 ? defaultTheme : _b, _c = _a.initialTheme, initialTheme = _c === void 0 ? "light" : _c;
    var _d = useState(initialTheme === "dark"), isDark = _d[0], setIsDark = _d[1];
    var _e = useState(false), isLoaded = _e[0], setIsLoaded = _e[1];
    // Carrega o tema salvo ao inicializar
    useEffect(function () {
        var loadSavedTheme = function () { return __awaiter(void 0, void 0, void 0, function () {
            var savedTheme, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        return [4 /*yield*/, AsyncStorage.getItem(THEME_STORAGE_KEY)];
                    case 1:
                        savedTheme = _a.sent();
                        if (savedTheme !== null) {
                            setIsDark(savedTheme === "dark");
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        error_1 = _a.sent();
                        console.warn("Erro ao carregar tema salvo:", error_1);
                        return [3 /*break*/, 4];
                    case 3:
                        setIsLoaded(true);
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        loadSavedTheme();
    }, []);
    // Salva o tema sempre que mudar
    useEffect(function () {
        if (isLoaded) {
            var saveTheme = function () { return __awaiter(void 0, void 0, void 0, function () {
                var error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, AsyncStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light")];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_2 = _a.sent();
                            console.warn("Erro ao salvar tema:", error_2);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); };
            saveTheme();
        }
    }, [isDark, isLoaded]);
    var toggleTheme = function () {
        setIsDark(!isDark);
    };
    var setTheme = function (mode) {
        setIsDark(mode === "dark");
    };
    var createStyles = function (styleCreator) {
        return StyleSheet.create(styleCreator(currentTheme));
    };
    var currentTheme = isDark ? themeConfig.dark : themeConfig.light;
    var contextValue = {
        theme: currentTheme,
        isDark: isDark,
        toggleTheme: toggleTheme,
        setTheme: setTheme,
        createStyles: createStyles,
    };
    // Não renderiza até carregar o tema salvo
    if (!isLoaded) {
        return null; // ou um componente de loading
    }
    return (_jsx(ThemeContext.Provider, { value: contextValue, children: children }));
};
// Hook para usar o tema
export var useTheme = function () {
    var context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme deve ser usado dentro de um ThemeProvider");
    }
    return context;
};
// HOC para injetar tema em componentes de classe (opcional)
export var withTheme = function (Component) {
    return function (props) {
        var theme = useTheme().theme;
        return _jsx(Component, __assign({}, props, { theme: theme }));
    };
};
// Utilitários para criar estilos com tema
export var createThemedStyles = function (styleCreator, theme) {
    return StyleSheet.create(styleCreator(theme));
};
// Hook personalizado para estilos
export var useThemedStyles = function (styleCreator) {
    var theme = useTheme().theme;
    return React.useMemo(function () { return StyleSheet.create(styleCreator(theme)); }, [theme, styleCreator]);
};
