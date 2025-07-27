import React from "react";
import { useTheme } from "@/theme/theme-context";
import { StyleSheet } from "react-native";
export var useThemedStyles = function (styleCreator) {
    var theme = useTheme().theme;
    return React.useMemo(function () { return StyleSheet.create(styleCreator(theme)); }, [theme, styleCreator]);
};
export var useStyles = function (styles) {
    return React.useMemo(function () { return StyleSheet.create(styles); }, [styles]);
}; // types/theme.ts
