import { TextInput, View } from "react-native";
import { CampoTextoMultiProps } from "../../types/campo-texto-multi";
import { styles } from "./styles";

export function LogCampoTextoMulti({
  campoStyle,
  campoTextoStyle,
  desabilitado,
  ...rest
}: CampoTextoMultiProps) {
  return (
    <View style={[styles.container, campoStyle]}>
      <TextInput
        {...rest}
        style={[styles.campoTexto, campoTextoStyle]}
        multiline
        editable={!desabilitado}
        showSoftInputOnFocus={!desabilitado}
      />
    </View>
  );
}
