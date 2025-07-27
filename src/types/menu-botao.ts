import { TextStyle } from "react-native";
import { IconeNomeProps } from "./icone-nome";

export interface MenuBotaoProps {
  titulo: string;
  icone: IconeNomeProps;
  textoStyle?: TextStyle;
  onPress: () => void;
}
