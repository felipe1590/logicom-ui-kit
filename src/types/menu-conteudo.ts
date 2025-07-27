import { ImageSourcePropType, TextStyle } from "react-native";
import { usuarioProps } from "./menu-info";
import { MenuBotaoProps } from "./menu-botao";

export interface MenuConteudoProps {
  logoUri: ImageSourcePropType | undefined;
  usuario: usuarioProps;
  infoStyle: TextStyle;
  textoStyle: TextStyle;
  menuFundo: string;
  containeFundo: string;
  menuBotao: MenuBotaoProps[];
  onPressInfo?: () => void;
  onPressSair: () => void;
}
