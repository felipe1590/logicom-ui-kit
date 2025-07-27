// context/ThemeContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeConfig, ColorPalette, ThemeContextValue } from "../types/theme";
import { defaultTheme } from "./themes";

const THEME_STORAGE_KEY = "@theme";

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  themeConfig?: ThemeConfig;
  initialTheme?: "light" | "dark";
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  themeConfig = defaultTheme,
  initialTheme = "light",
}) => {
  const [isDark, setIsDark] = useState<boolean>(initialTheme === "dark");
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Carrega o tema salvo ao inicializar
  useEffect(() => {
    const loadSavedTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme !== null) {
          setIsDark(savedTheme === "dark");
        }
      } catch (error) {
        console.warn("Erro ao carregar tema salvo:", error);
      } finally {
        setIsLoaded(true);
      }
    };

    loadSavedTheme();
  }, []);

  // Salva o tema sempre que mudar
  useEffect(() => {
    if (isLoaded) {
      const saveTheme = async () => {
        try {
          await AsyncStorage.setItem(
            THEME_STORAGE_KEY,
            isDark ? "dark" : "light"
          );
        } catch (error) {
          console.warn("Erro ao salvar tema:", error);
        }
      };

      saveTheme();
    }
  }, [isDark, isLoaded]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const setTheme = (mode: "light" | "dark") => {
    setIsDark(mode === "dark");
  };

  const createStyles = <T extends StyleSheet.NamedStyles<T>>(
    styleCreator: (theme: ColorPalette) => T
  ): T => {
    return StyleSheet.create(styleCreator(currentTheme));
  };

  const currentTheme = isDark ? themeConfig.dark : themeConfig.light;

  const contextValue: ThemeContextValue = {
    theme: currentTheme,
    isDark,
    toggleTheme,
    setTheme,
    createStyles,
  };

  // Não renderiza até carregar o tema salvo
  if (!isLoaded) {
    return null; // ou um componente de loading
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook para usar o tema
export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme deve ser usado dentro de um ThemeProvider");
  }
  return context;
};

// HOC para injetar tema em componentes de classe (opcional)
export const withTheme = <P extends object>(
  Component: React.ComponentType<P & { theme: ColorPalette }>
) => {
  return (props: P) => {
    const { theme } = useTheme();
    return <Component {...props} theme={theme} />;
  };
};

// Utilitários para criar estilos com tema
export const createThemedStyles = <T extends StyleSheet.NamedStyles<T>>(
  styleCreator: (theme: ColorPalette) => T,
  theme: ColorPalette
): T => {
  return StyleSheet.create(styleCreator(theme));
};

// Hook personalizado para estilos
export const useThemedStyles = <T extends StyleSheet.NamedStyles<T>>(
  styleCreator: (theme: ColorPalette) => T
): T => {
  const { theme } = useTheme();
  return React.useMemo(
    () => StyleSheet.create(styleCreator(theme)),
    [theme, styleCreator]
  );
};
