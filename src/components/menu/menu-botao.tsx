import { Ionicons } from "@expo/vector-icons";
import { View, Text, Pressable } from "react-native";
import { MenuBotaoProps } from "../../types/menu-botao";
import { styles } from "./styles";

export function LogMenuBotao({
  titulo,
  icone,
  textoStyle,
  ...rest
}: MenuBotaoProps) {
  return (
    <Pressable {...rest}>
      <View style={styles.menuBotao}>
        <Ionicons name={icone} size={24} color={textoStyle?.color} />
        <Text style={textoStyle}>{titulo}</Text>
      </View>
    </Pressable>
  );
}
