import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { ThemeConfig, ColorPalette, ThemeContextValue } from "../types/theme";
interface ThemeProviderProps {
    children: ReactNode;
    themeConfig?: ThemeConfig;
    initialTheme?: "light" | "dark";
}
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
export declare const useTheme: () => ThemeContextValue;
export declare const withTheme: <P extends object>(Component: React.ComponentType<P & {
    theme: ColorPalette;
}>) => (props: P) => import("react/jsx-runtime").JSX.Element;
export declare const createThemedStyles: <T extends StyleSheet.NamedStyles<T>>(styleCreator: (theme: ColorPalette) => T, theme: ColorPalette) => T;
export declare const useThemedStyles: <T extends StyleSheet.NamedStyles<T>>(styleCreator: (theme: ColorPalette) => T) => T;
export {};
