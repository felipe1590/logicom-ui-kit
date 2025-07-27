import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CartaoCompletoProps } from "../../types/cartao-completo";
import { styles } from "./styles";

export function LogCartaoCompleto({
  statusColor,
  info1,
  info2,
  cartaoStyle,
  contSuperiorStyle,
  tituloStyle,
  subtituloStyle,
  descricaoStyle,
  ...rest
}: CartaoCompletoProps) {
  return (
    <Pressable style={[styles.container, cartaoStyle]} {...rest}>
      <View style={styles.containerSuperior}>
        <View style={[styles.cartaoSuperior, contSuperiorStyle]}>
          <View style={styles.cartaoSuperiorSec}>
            <Text style={[styles.titulo, tituloStyle]}>{info1.titulo}</Text>
            <Text style={[styles.texto, subtituloStyle]}>
              {info1.subtitulo}
            </Text>
          </View>
          <View>
            <Ionicons name="checkmark-circle" size={20} color={statusColor} />
          </View>
        </View>

        <View style={styles.cartaoInferior}>
          <Text style={[styles.titulo, tituloStyle]}>{info2.titulo}</Text>
          <Text style={[styles.texto, subtituloStyle]}>{info2.subtitulo}</Text>
        </View>
      </View>
      <View style={styles.containerInferior}>
        <View style={styles.cartaoInferior}>
          <Text style={[styles.texto, subtituloStyle]}>{info1.descricao}</Text>
          <Text style={[styles.texto, descricaoStyle]}>{info2.descricao}</Text>
        </View>
      </View>
    </Pressable>
  );
}
