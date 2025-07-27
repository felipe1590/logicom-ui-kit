import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CartaoSimples02Props } from "../../types/cartao-simples-02";
import { styles } from "./styles";

export function LogCartaoSimples02({
  icone,
  titulo,
  valor,
  subvalor,
  subvalorColor,
  legenda,
  cartaoStyle,
  cartaoSuperiorStyle,
  iconeStyle,
  tituloStyle,
  subTituloStyle,
  legendaStyle,
  ...rest
}: CartaoSimples02Props) {
  return (
    <Pressable style={[styles.container, cartaoStyle]} {...rest}>
      <View style={[styles.containerSuperior, cartaoSuperiorStyle]}>
        <View style={styles.cartaoSuperior}>
          <View style={[styles.iconeContainer, iconeStyle]}>
            <Ionicons
              name={icone}
              size={20}
              color={iconeStyle?.color ?? "black"}
            />
          </View>
          <Text style={tituloStyle}>{titulo}</Text>
        </View>
        <View style={styles.cartaoSuperiorSec}>
          <Text style={[styles.subTitulo, tituloStyle]}>{valor}</Text>
          {subvalor && <Text style={subTituloStyle}>{subvalor}</Text>}
        </View>
      </View>

      <View style={styles.containerInferior}>
        <Text style={legendaStyle}>{legenda}</Text>
      </View>
    </Pressable>
  );
}
