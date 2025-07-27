import { Ionicons } from "@expo/vector-icons";
import { Pressable, TextInput, View } from "react-native";
import { CampoTextoIconeProps } from "../../types/campo-texto-icone";
import { styles } from "./styles";

export function LogCampoTextoIcone({
  iconeEsquerdo,
  iconeDireito,
  campoStyle,
  campoTextoStyle,
  desabilitado,
  ...rest
}: CampoTextoIconeProps) {
  return (
    <View style={[styles.container, campoStyle]}>
      {iconeEsquerdo && (
        <Pressable style={styles.icone} onPress={iconeEsquerdo.onPress}>
          <Ionicons
            name={iconeEsquerdo.icone}
            size={24}
            color={campoTextoStyle?.color || "black"}
          />
        </Pressable>
      )}
      <TextInput
        {...rest}
        style={[styles.campoTexto, campoTextoStyle]}
        editable={!desabilitado}
        showSoftInputOnFocus={!desabilitado}
      />
      {iconeDireito && (
        <Pressable style={styles.icone} onPress={iconeDireito.onPress}>
          <Ionicons
            name={iconeDireito.icone}
            size={24}
            color={campoTextoStyle?.color || "black"}
          />
        </Pressable>
      )}
    </View>
  );
}
