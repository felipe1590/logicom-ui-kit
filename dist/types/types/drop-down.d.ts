import { TextStyle } from "react-native";
import { IconeNomeProps } from "./icone-nome";
export interface DropDownProps {
    icone?: IconeNomeProps;
    data: OptionItem[];
    onChange: (item: OptionItem) => void;
    placeholder: string;
    textoStyle: TextStyle;
    corDrop: string;
    corOpcao: string;
}
export type OptionItem = {
    value: string;
    label: string;
};
