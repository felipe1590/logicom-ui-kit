import { ImageSourcePropType, PressableProps, TextStyle } from "react-native";
export interface MenuInfoProps extends PressableProps {
    usuario: usuarioProps;
    logoUri: ImageSourcePropType | undefined;
    infoStyle?: TextStyle;
}
export interface usuarioProps {
    codigo: number | string;
    nome: string;
    fantasia?: string;
    cnpj?: number | string;
}
