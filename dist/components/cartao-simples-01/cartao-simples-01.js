import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { View, Text } from "react-native";
import { styles } from "./styles";
export function LogCartaoSimples01(_a) {
    var info = _a.info, valor = _a.valor, cartaoStyle = _a.cartaoStyle, tituloStyle = _a.tituloStyle, descricaoStyle = _a.descricaoStyle;
    return (_jsxs(View, { style: [styles.celula, cartaoStyle], children: [_jsxs(View, { style: styles.celulaDescricao, children: [_jsx(Text, { style: [styles.rotulo, tituloStyle], children: info.titulo.toUpperCase() }), _jsx(Text, { style: [styles.descricao, descricaoStyle], children: info.subtitulo })] }), _jsx(View, { style: styles.celulaValor, children: valor })] }));
}
