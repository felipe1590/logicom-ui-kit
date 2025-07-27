import { StyleSheet } from "react-native";
export declare const useThemedStyles: <T>(styleCreator: (theme: ColorPalette) => StyleSheet.NamedStyles<T>) => StyleSheet.NamedStyles<T>;
export declare const useStyles: <T>(styles: StyleSheet.NamedStyles<T>) => StyleSheet.NamedStyles<T>;
export interface ColorPalette {
    primary: string;
    primaryDark: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    error: string;
    warning: string;
    success: string;
    info: string;
}
export interface ThemeConfig {
    light: ColorPalette;
    dark: ColorPalette;
}
export interface ThemeContextValue {
    theme: ColorPalette;
    isDark: boolean;
    toggleTheme: () => void;
    setTheme: (mode: "light" | "dark") => void;
    createStyles: <T>(styleCreator: (theme: ColorPalette) => StyleSheet.NamedStyles<T>) => StyleSheet.NamedStyles<T>;
}
