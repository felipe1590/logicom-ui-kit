/**
 * Interface que representa as propriedades de um cartão simples 02
 * @extends PressableProps - Herda todas as propriedades do componente Pressable do React Native
 * @property {IconeNomeProps} icone - Ícone do cartão
 * @property {string} titulo - Título do cartão
 * @property {string} valor - Valor do cartão
 * @property {string} subvalor - Subvalor do cartão
 * @property {string} subvalorColor - Cor do subvalor do cartão
 * @property {string} legenda - Legenda do cartão
 */
import { PressableProps, TextStyle, ViewStyle } from "react-native";
import { IconeNomeProps } from "./icone-nome";
export interface CartaoSimples02Props extends PressableProps {
    icone: IconeNomeProps;
    titulo: string;
    valor: string;
    subvalor?: string;
    subvalorColor?: string;
    legenda: string;
    cartaoStyle?: ViewStyle;
    cartaoSuperiorStyle?: ViewStyle;
    iconeStyle?: TextStyle;
    tituloStyle?: TextStyle;
    subTituloStyle?: TextStyle;
    legendaStyle?: TextStyle;
}
