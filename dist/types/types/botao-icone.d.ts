/**
 * Interface que representa as propriedades de um botão com ícone
 * @extends PressableProps - Herda todas as propriedades do componente Pressable do React Native
 * @property {any} titulo - Texto ou conteúdo opcional a ser exibido no botão
 * @property {IconeNomeProps} iconeEsquerda - Nome do ícone opcional que será exibido à esquerda do texto
 * @property {IconeNomeProps} iconeDireita - Nome do ícone opcional que será exibido à direita do texto
 * @property {string} cor - Cor do texto do botão
 * @property {string} fonte - Fonte do texto do botão
 */
import { PressableProps, TextStyle } from "react-native";
import { IconeNomeProps } from "./icone-nome";
export interface BotaoIconeProps extends PressableProps {
    titulo?: any;
    iconeEsquerda?: IconeNomeProps;
    iconeDireita?: IconeNomeProps;
    tituloStyle?: TextStyle;
    iconeStyle?: TextStyle;
}
