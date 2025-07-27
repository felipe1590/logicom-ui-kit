import { jsx as _jsx } from "react/jsx-runtime";
import { View } from "react-native";
import { Image } from "expo-image";
import { styles } from "./styles";
export function LogCarregamento(gif) {
    return (_jsx(View, { style: styles.container, children: _jsx(Image, { source: gif, style: styles.imagem, contentFit: "cover" }) }));
}
