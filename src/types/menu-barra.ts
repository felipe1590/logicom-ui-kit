import React from "react";
import { BotaoMenuBarraProps } from "./botao-menu-barra";
import { TextStyle } from "react-native";
import { IconeNomeProps } from "./icone-nome";

export interface MenuBarraProps {
  titulo: any;
  icone: IconeNomeProps;
  onPress?: () => void;
  botaoUm?: BotaoMenuBarraProps;
  botaoDois?: BotaoMenuBarraProps;
  botaoTres?: BotaoMenuBarraProps;
  popover?: React.ReactNode;
  iconeStyle: TextStyle;
  tituloStyle: TextStyle;
  corFundo: string;
}
