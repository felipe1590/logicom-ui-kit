import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { View, Text } from "react-native";
import { LogBotaoMenuBarra } from "./botao-menu-barra";
import { LogBotaoFlutuante } from "../botao-flutuante/botao-flutuante";
import { styles } from "./styles";
export function LogMenuBarra(_a) {
    var titulo = _a.titulo, icone = _a.icone, botaoUm = _a.botaoUm, botaoDois = _a.botaoDois, botaoTres = _a.botaoTres, popover = _a.popover, iconeStyle = _a.iconeStyle, tituloStyle = _a.tituloStyle, corFundo = _a.corFundo, onPress = _a.onPress;
    var tipoMenu = function () {
        if (icone) {
            return (_jsx(View, { style: styles.tituloBotao, children: _jsx(LogBotaoFlutuante, { icone: icone, style: styles.botaoMenu, iconeStyle: iconeStyle, onPress: onPress }) }));
        }
        else {
            return null;
        }
    };
    return (_jsxs(View, { style: [styles.container, { backgroundColor: corFundo }], children: [_jsxs(View, { style: styles.tituloContainer, children: [tipoMenu(), _jsx(Text, { style: tituloStyle, children: titulo })] }), _jsxs(View, { style: styles.botoes, children: [botaoUm && (_jsx(LogBotaoMenuBarra, { icone: botaoUm.icone, cor: botaoUm.cor, disabled: botaoUm.disabled, onPress: botaoUm.onPress })), botaoDois && (_jsx(LogBotaoMenuBarra, { icone: botaoDois.icone, cor: botaoDois.cor, disabled: botaoDois.disabled, onPress: botaoDois.onPress })), botaoTres && (_jsx(LogBotaoMenuBarra, { icone: botaoTres.icone, cor: botaoTres.cor, disabled: botaoTres.disabled, onPress: botaoTres.onPress })), popover] })] }));
}
