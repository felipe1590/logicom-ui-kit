import { ThemeConfig } from "../types/theme";
// Tema padrão caso não seja fornecido
export const defaultTheme: ThemeConfig = {
  light: {
    primary: "#007AFF",
    primaryDark: "#0056CC",
    secondary: "#5856D6",
    background: "#FFFFFF",
    surface: "#F2F2F7",
    text: "#000000",
    textSecondary: "#6D6D80",
    border: "#E5E5EA",
    error: "#FF3B30",
    warning: "#FF9500",
    success: "#34C759",
    info: "#007AFF",
  },
  dark: {
    primary: "#0A84FF",
    primaryDark: "#0066CC",
    secondary: "#5E5CE6",
    background: "#000000",
    surface: "#1C1C1E",
    text: "#FFFFFF",
    textSecondary: "#8E8E93",
    border: "#38383A",
    error: "#FF453A",
    warning: "#FF9F0A",
    success: "#30D158",
    info: "#64D2FF",
  },
};
