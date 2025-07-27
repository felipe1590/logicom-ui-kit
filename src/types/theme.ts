import React from "react";
import { useTheme } from "@/theme/theme-context";
import { StyleSheet } from "react-native";

export const useThemedStyles = <T>(
  styleCreator: (theme: ColorPalette) => StyleSheet.NamedStyles<T>
): StyleSheet.NamedStyles<T> => {
  const { theme } = useTheme();
  return React.useMemo(
    () => StyleSheet.create(styleCreator(theme)),
    [theme, styleCreator]
  );
};

export const useStyles = <T>(
  styles: StyleSheet.NamedStyles<T>
): StyleSheet.NamedStyles<T> => {
  return React.useMemo(() => StyleSheet.create(styles), [styles]);
}; // types/theme.ts
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
  createStyles: <T>(
    styleCreator: (theme: ColorPalette) => StyleSheet.NamedStyles<T>
  ) => StyleSheet.NamedStyles<T>;
}
