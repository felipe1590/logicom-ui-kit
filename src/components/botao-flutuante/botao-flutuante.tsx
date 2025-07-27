import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BotaoFlutuanteProps } from "../../types/botao-flutuante";
import { styles } from "./styles";

export function LogBotaoFlutuante({
  icone,
  iconeStyle,
  ...rest
}: BotaoFlutuanteProps) {
  return (
    <Pressable {...rest}>
      <Ionicons name={icone} size={24} style={iconeStyle} />
    </Pressable>
  );
}
