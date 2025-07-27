/**
 * Interface que representa as propriedades de um botão
 * @extends PressableProps - Herda todas as propriedades do componente Pressable do React Native
 * @property {React.ReactNode} titulo - Texto ou conteúdo opcional a ser exibido no botão
 * @property {ViewStyle} style - Estilos customizados opcionais para o botão
 */
import { PressableProps, TextStyle } from "react-native";
export interface BotaoProps extends PressableProps {
    titulo?: React.ReactNode;
    tituloStyle?: TextStyle;
}
