import { View, Text } from "react-native";
import { MenuBarraProps } from "../../types/menu-barra";
import { LogBotaoMenuBarra } from "./botao-menu-barra";
import { LogBotaoFlutuante } from "../botao-flutuante/botao-flutuante";
import { styles } from "./styles";

export function LogMenuBarra({
  titulo,
  icone,
  botaoUm,
  botaoDois,
  botaoTres,
  popover,
  iconeStyle,
  tituloStyle,
  corFundo,
  onPress,
}: MenuBarraProps) {
  const tipoMenu = () => {
    if (icone) {
      return (
        <View style={styles.tituloBotao}>
          <LogBotaoFlutuante
            icone={icone}
            style={styles.botaoMenu}
            iconeStyle={iconeStyle}
            onPress={onPress}
          />
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: corFundo }]}>
      <View style={styles.tituloContainer}>
        {tipoMenu()}
        <Text style={tituloStyle}>{titulo}</Text>
      </View>
      <View style={styles.botoes}>
        {botaoUm && (
          <LogBotaoMenuBarra
            icone={botaoUm.icone}
            cor={botaoUm.cor}
            disabled={botaoUm.disabled}
            onPress={botaoUm.onPress}
          />
        )}

        {botaoDois && (
          <LogBotaoMenuBarra
            icone={botaoDois.icone}
            cor={botaoDois.cor}
            disabled={botaoDois.disabled}
            onPress={botaoDois.onPress}
          />
        )}

        {botaoTres && (
          <LogBotaoMenuBarra
            icone={botaoTres.icone}
            cor={botaoTres.cor}
            disabled={botaoTres.disabled}
            onPress={botaoTres.onPress}
          />
        )}

        {popover}
      </View>
    </View>
  );
}
