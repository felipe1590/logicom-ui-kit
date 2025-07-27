import { View, Text, Pressable } from "react-native";
import { CartaoInterativoProps } from "../../types/cartao-interativo";
import { styles } from "./styles";

export function LogCartaoInterativo({
  info1,
  info2,
  info3,
  textoStatus,
  popoverComponent,
  cartaoStyle,
  contSuperiorStyle,
  contInferiorStyle,
  tituloStyle,
  subtituloStyle,
  ...rest
}: CartaoInterativoProps) {
  return (
    <Pressable
      {...rest}
      style={[
        styles.container,
        cartaoStyle,
        { borderLeftColor: textoStatus.cor },
      ]}
    >
      <View style={[styles.containerSuperior, contSuperiorStyle]}>
        <View style={styles.cartaoSuperior}>
          <Text style={[styles.texto, tituloStyle]}>{info1.titulo}</Text>
          <Text style={[styles.texto, subtituloStyle]}>{info1.subtitulo}</Text>
        </View>
        {popoverComponent}
      </View>
      <View style={styles.containerMeio}>
        <View style={styles.cartaoMeio}>
          <Text style={[styles.texto, tituloStyle]}>{info2.titulo}</Text>
          <Text style={[styles.texto, subtituloStyle]}>{info2.subtitulo}</Text>
        </View>
        <View style={styles.cartaoMeio}>
          <Text style={styles.texto}>{info2.descricao}</Text>
          <Text style={styles.texto}>{textoStatus.status}</Text>
        </View>
      </View>

      {!!info3.titulo && (
        <View style={[styles.containerInferior, contInferiorStyle]}>
          <View style={styles.cartaoInferior}>
            <Text style={[styles.texto, tituloStyle]}>{info3.titulo}</Text>
            <Text style={[styles.texto, subtituloStyle]}>
              {info3.subtitulo}
            </Text>
          </View>
        </View>
      )}
    </Pressable>
  );
}
