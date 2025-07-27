import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BotaoIconeProps } from "../../types/botao-icone";
import { styles } from "./styles";

export function LogBotaoIcone({
  titulo,
  iconeEsquerda,
  iconeDireita,
  tituloStyle,
  iconeStyle,
  ...rest
}: BotaoIconeProps) {
  return (
    <Pressable {...rest}>
      {iconeEsquerda ? (
        <View style={styles.containerIcone}>
          <Ionicons
            style={[styles.icone, iconeStyle]}
            name={iconeEsquerda}
            size={24}
          />
        </View>
      ) : (
        <View style={styles.containerIcone} />
      )}
      <Text style={[styles.titulo, tituloStyle]}>{titulo}</Text>
      {iconeDireita ? (
        <View style={styles.containerIcone}>
          <Ionicons
            style={[styles.icone, iconeStyle]}
            name={iconeDireita}
            size={24}
          />
        </View>
      ) : (
        <View style={styles.containerIcone} />
      )}
    </Pressable>
  );
}
