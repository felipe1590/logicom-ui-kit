/**
 * Interface que representa as propriedades de um campo de texto
 * @extends TextInputProps - Herda todas as propriedades do componente TextInput do React Native
 * @property {boolean} desabilitado - Indica se o campo de texto está desabilitado
 * @property {boolean} senha - Indica se o campo de texto é uma senha
 * @property {ViewStyle} campoStyle - Estilo do container do campo de texto
 * @property {TextStyle} campoTextoStyle - Estilo do texto do campo de texto
 */
import { TextInputProps, TextStyle, ViewStyle } from "react-native";
export interface CampoTextoProps extends TextInputProps {
    campoStyle?: ViewStyle;
    campoTextoStyle?: TextStyle;
    desabilitado?: boolean;
    senha?: boolean;
}
