/**
 * Interface que representa as propriedades de um menu de abas
 * @property {Aba[]} abas - Array de abas
 * @property {string} abaPadrao - Nome da aba padrão
 * @property {ViewStyle} barraAbasStyle - Estilos da barra de abas
 * @property {ViewStyle} activeTabStyle - Estilos da aba ativa
 * @property {TextStyle} textoAbaStyle - Estilos do texto da aba
 * @property {TextStyle} activeTabTextStyle - Estilos do texto da aba ativa
 * @property {() => void} alternarAba - Função para alternar entre abas
 */
import { ReactNode } from "react";
import { ViewStyle, TextStyle } from "react-native";
export interface MenuAbasProps {
    abas: Aba[];
    abaPadrao?: string;
    barraAbasStyle?: ViewStyle;
    activeTabStyle?: ViewStyle;
    textoAbaStyle?: TextStyle;
    textoAbaAtivoStyle?: TextStyle;
    activeTabTextStyle?: TextStyle;
    alternarAba?: (abaName: string) => void;
}
export type Aba = {
    name: string;
    component: ReactNode;
    props?: any;
};
