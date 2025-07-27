import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BotaoMenuBarraProps } from "../../types/botao-menu-barra";
import { styles } from "./styles";

export function LogBotaoMenuBarra({
  icone,
  cor,
  ...rest
}: BotaoMenuBarraProps) {
  return (
    <Pressable style={styles.botaoBarra} {...rest}>
      <Ionicons color={cor ?? "black"} name={icone} size={24} />
    </Pressable>
  );
}
