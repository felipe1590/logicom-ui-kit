import { PressableProps } from "react-native";
import { IconeNomeProps } from "./icone-nome";
export interface BotaoMenuBarraProps extends PressableProps {
    icone: IconeNomeProps;
    cor?: string;
}
