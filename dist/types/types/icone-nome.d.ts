/**
 * Interface que representa o nome de um ícone
 * @property {keyof typeof Ionicons.glyphMap} icone - Nome do ícone
 */
import { Ionicons } from "@expo/vector-icons";
export type IconeNomeProps = keyof typeof Ionicons.glyphMap;
