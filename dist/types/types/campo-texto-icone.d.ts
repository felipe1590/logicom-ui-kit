/**
 * Interface que representa as propriedades de um campo de texto com ícone
 * @extends TextInputProps - Herda todas as propriedades do componente TextInput do React Native
 * @property {iconeProps} iconeEsquerdo - Nome do ícone opcional que será exibido à esquerdo do texto
 * @property {iconeProps} iconeDireito - Nome do ícone opcional que será exibido à direito do texto
 * @property {string} corFundo - Cor de fundo do campo de texto
 * @property {string} corTexto - Cor do texto do campo de texto
 * @property {string} corPlaceholder - Cor do placeholder do campo de texto
 * @property {string} fonte - Fonte do texto do campo de texto
 * @property {"left" | "center" | "right"} alinhamentoTexto - Alinhamento do texto
 * @property {boolean} desabilitado - Indica se o campo de texto está desabilitado
 */
import { TextInputProps, TextStyle, ViewStyle } from "react-native";
import { iconeInputProps } from "./icone-input";
export interface CampoTextoIconeProps extends TextInputProps {
    iconeEsquerdo?: iconeInputProps;
    iconeDireito?: iconeInputProps;
    campoStyle?: ViewStyle;
    campoTextoStyle?: TextStyle;
    desabilitado?: boolean;
}
