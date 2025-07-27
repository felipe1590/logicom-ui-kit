import { MenuConteudoProps } from "./menu-conteudo";
export interface MenuProps extends MenuConteudoProps {
    visible: boolean;
    onClose: () => void;
}
