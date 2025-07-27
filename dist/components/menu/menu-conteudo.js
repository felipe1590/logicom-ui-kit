import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { View, ScrollView } from "react-native";
import { LogMenuBotao } from "./menu-botao";
import { LogMenuInfo } from "./menu-info";
import { styles } from "./styles";
export function LogMenuConteudo(_a) {
    var logoUri = _a.logoUri, usuario = _a.usuario, infoStyle = _a.infoStyle, textoStyle = _a.textoStyle, menuFundo = _a.menuFundo, containeFundo = _a.containeFundo, menuBotao = _a.menuBotao, onPressInfo = _a.onPressInfo, onPressSair = _a.onPressSair;
    return (_jsxs(View, { style: [styles.menuConteudo, { backgroundColor: menuFundo }], children: [_jsx(LogMenuInfo, { infoStyle: infoStyle, usuario: usuario, logoUri: logoUri, onPress: onPressInfo }), _jsx(ScrollView, { showsVerticalScrollIndicator: false, contentContainerStyle: [
                    styles.conteudoContainer,
                    { backgroundColor: containeFundo },
                ], children: _jsx(View, { style: { marginTop: 8 }, children: menuBotao.map(function (item, index) { return (_jsx(LogMenuBotao, { onPress: item.onPress, titulo: item.titulo, icone: item.icone, textoStyle: textoStyle }, index)); }) }) }), _jsx(LogMenuBotao, { onPress: function () { return onPressSair(); }, titulo: "Sair", icone: "exit-outline", textoStyle: textoStyle })] }));
}
