/**
 * Interface que representa as propriedades de uma tabela
 * @property {string[]} titulos - Títulos das colunas
 * @property {any[][]} linhas - Linhas da tabela
 * @property {string | string[]} cor - Cor da tabela
 * @property {DimensionValue | DimensionValue[]} largura - Largura das colunas
 * @property {TextStyle["textAlign"] | TextStyle["textAlign"][]} alinhamento - Alinhamento do texto
 * @property {number} marginBottom - Margem inferior da tabela
 */
import { DimensionValue, TextStyle } from "react-native";
export interface TabelaProps {
    dados: DadosProps;
    corFundo?: string;
    fonte?: string;
    onPressAction?: (linha: any[]) => void;
}
export interface DadosProps {
    titulos: string[];
    linhas: any[][];
    cor?: string | string[];
    largura?: DimensionValue | DimensionValue[];
    alinhamento?: TextStyle["textAlign"] | TextStyle["textAlign"][];
    marginBottom?: number;
}
