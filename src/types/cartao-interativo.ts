/**
 * Interface que representa as propriedades de um cartão interativo
 * @extends PressableProps - Herda todas as propriedades do componente Pressable do React Native
 * @property {InfoGenericoProps} info1 - Informações do cartão
 * @property {InfoGenericoProps} info2 - Informações do cartão
 * @property {InfoGenericoProps} info3 - Informações do cartão
 * @property {TextStatus} textoStatus - Status do cartão
 * @property {PopoverController} popover - Popover do cartão
 */

import { PressableProps, TextStyle, ViewStyle } from "react-native";
import { InfoGenericoProps } from "./info-generico";
import React from "react";

export interface CartaoInterativoProps extends PressableProps {
  info1: InfoGenericoProps;
  info2: InfoGenericoProps;
  info3: InfoGenericoProps;
  textoStatus: TextStatus;
  popoverComponent?: React.ReactNode;
  cartaoStyle?: ViewStyle;
  contSuperiorStyle?: ViewStyle;
  tituloStyle?: TextStyle;
  subtituloStyle?: TextStyle;
  descricaoStyle?: TextStyle;
  contInferiorStyle?: ViewStyle;
}

export interface TextStatus {
  status: string;
  cor: string;
}
