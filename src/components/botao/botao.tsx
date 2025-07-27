import { Pressable, Text } from "react-native";
import { BotaoProps } from "../../types/botao";
import { styles } from "./styles";

export function LogBotao({ titulo, tituloStyle, ...rest }: BotaoProps) {
  return (
    <Pressable {...rest}>
      <Text style={[styles.titulo, tituloStyle]}>{titulo}</Text>
    </Pressable>
  );
}
