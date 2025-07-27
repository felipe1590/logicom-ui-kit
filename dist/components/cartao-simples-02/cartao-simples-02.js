var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
export function LogCartaoSimples02(_a) {
    var _b;
    var icone = _a.icone, titulo = _a.titulo, valor = _a.valor, subvalor = _a.subvalor, subvalorColor = _a.subvalorColor, legenda = _a.legenda, cartaoStyle = _a.cartaoStyle, cartaoSuperiorStyle = _a.cartaoSuperiorStyle, iconeStyle = _a.iconeStyle, tituloStyle = _a.tituloStyle, subTituloStyle = _a.subTituloStyle, legendaStyle = _a.legendaStyle, rest = __rest(_a, ["icone", "titulo", "valor", "subvalor", "subvalorColor", "legenda", "cartaoStyle", "cartaoSuperiorStyle", "iconeStyle", "tituloStyle", "subTituloStyle", "legendaStyle"]);
    return (_jsxs(Pressable, __assign({ style: [styles.container, cartaoStyle] }, rest, { children: [_jsxs(View, { style: [styles.containerSuperior, cartaoSuperiorStyle], children: [_jsxs(View, { style: styles.cartaoSuperior, children: [_jsx(View, { style: [styles.iconeContainer, iconeStyle], children: _jsx(Ionicons, { name: icone, size: 20, color: (_b = iconeStyle === null || iconeStyle === void 0 ? void 0 : iconeStyle.color) !== null && _b !== void 0 ? _b : "black" }) }), _jsx(Text, { style: tituloStyle, children: titulo })] }), _jsxs(View, { style: styles.cartaoSuperiorSec, children: [_jsx(Text, { style: [styles.subTitulo, tituloStyle], children: valor }), subvalor && _jsx(Text, { style: subTituloStyle, children: subvalor })] })] }), _jsx(View, { style: styles.containerInferior, children: _jsx(Text, { style: legendaStyle, children: legenda }) })] })));
}
