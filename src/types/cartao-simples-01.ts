/**
 * Interface que representa as propriedades de um cartão simples
 * @property {InfoGenericoProps} info - Informações do cartão
 * @property {any} valor - Valor do cartão
 * @property {ViewStyle} cartaoStyle - Estilo do cartão
 * @property {TextStyle} tituloStyle - Estilo do título do cartão
 * @property {TextStyle} descricaoStyle - Estilo da descrição do cartão
 */

import { TextStyle, ViewStyle } from "react-native";
import { InfoGenericoProps } from "./info-generico";

export interface CartaoSimples01Props {
  info: InfoGenericoProps;
  valor: any;
  cartaoStyle?: ViewStyle;
  tituloStyle?: TextStyle;
  descricaoStyle?: TextStyle;
}
