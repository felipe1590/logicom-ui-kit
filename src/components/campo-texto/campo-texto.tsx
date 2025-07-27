import { useState } from "react";
import { Pressable, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CampoTextoProps } from "../../types/campo-texto";
import { styles } from "./styles";

export function LogCampoTexto({
  campoStyle,
  campoTextoStyle,
  desabilitado,
  senha = false,
  ...rest
}: CampoTextoProps) {
  const [senhaVisible, setSenhaVisible] = useState(false);

  const controlaSenhaVisibilidade = () => {
    setSenhaVisible(!senhaVisible);
  };

  return (
    <View style={[styles.container, campoStyle]}>
      <TextInput
        {...rest}
        style={[styles.campoTexto, campoTextoStyle]}
        secureTextEntry={senha && !senhaVisible}
        editable={!desabilitado}
        showSoftInputOnFocus={!desabilitado}
      />
      {senha && (
        <Pressable onPress={controlaSenhaVisibilidade}>
          <Ionicons
            style={styles.icone}
            name={senhaVisible ? "eye" : "eye-off"}
            size={24}
            color={campoTextoStyle?.color}
          />
        </Pressable>
      )}
    </View>
  );
}
