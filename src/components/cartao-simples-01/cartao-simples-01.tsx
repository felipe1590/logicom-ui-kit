import { View, Text } from "react-native";
import { CartaoSimples01Props } from "../../types/cartao-simples-01";
import { styles } from "./styles";

export function LogCartaoSimples01({
  info,
  valor,
  cartaoStyle,
  tituloStyle,
  descricaoStyle,
}: CartaoSimples01Props) {
  return (
    <View style={[styles.celula, cartaoStyle]}>
      <View style={styles.celulaDescricao}>
        <Text style={[styles.rotulo, tituloStyle]}>
          {info.titulo.toUpperCase()}
        </Text>
        <Text style={[styles.descricao, descricaoStyle]}>{info.subtitulo}</Text>
      </View>
      <View style={styles.celulaValor}>{valor}</View>
    </View>
  );
}
