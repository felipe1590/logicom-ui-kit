/**
 * Interface que representa as propriedades de um ícone
 * @property {IconeNomeProps} icone - Nome do ícone
 * @property {() => void} onPress - Função a ser executada ao pressionar o ícone
 */

import { IconeNomeProps } from "./icone-nome";

export interface iconeInputProps {
  icone: IconeNomeProps;
  onPress?: () => void;
}
