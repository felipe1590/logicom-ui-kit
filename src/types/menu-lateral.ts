import { TextStyle } from "react-native";
import { usuarioProps } from "./menu-info";
import { MenuBotaoProps } from "./menu-botao";

export interface MenuLateralProps {
  visible: boolean;
  onClose: () => void;
  logoUri: string;
  usuario: usuarioProps;
  textoStyle: TextStyle;
  menuFundo: string;
  containeFundo: string;
  menuBotao: MenuBotaoProps[];
  onPressInfo: () => void;
  onPressSair: () => void;
}
