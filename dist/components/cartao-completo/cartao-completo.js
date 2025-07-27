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
export function LogCartaoCompleto(_a) {
    var statusColor = _a.statusColor, info1 = _a.info1, info2 = _a.info2, cartaoStyle = _a.cartaoStyle, contSuperiorStyle = _a.contSuperiorStyle, tituloStyle = _a.tituloStyle, subtituloStyle = _a.subtituloStyle, descricaoStyle = _a.descricaoStyle, rest = __rest(_a, ["statusColor", "info1", "info2", "cartaoStyle", "contSuperiorStyle", "tituloStyle", "subtituloStyle", "descricaoStyle"]);
    return (_jsxs(Pressable, __assign({ style: [styles.container, cartaoStyle] }, rest, { children: [_jsxs(View, { style: styles.containerSuperior, children: [_jsxs(View, { style: [styles.cartaoSuperior, contSuperiorStyle], children: [_jsxs(View, { style: styles.cartaoSuperiorSec, children: [_jsx(Text, { style: [styles.titulo, tituloStyle], children: info1.titulo }), _jsx(Text, { style: [styles.texto, subtituloStyle], children: info1.subtitulo })] }), _jsx(View, { children: _jsx(Ionicons, { name: "checkmark-circle", size: 20, color: statusColor }) })] }), _jsxs(View, { style: styles.cartaoInferior, children: [_jsx(Text, { style: [styles.titulo, tituloStyle], children: info2.titulo }), _jsx(Text, { style: [styles.texto, subtituloStyle], children: info2.subtitulo })] })] }), _jsx(View, { style: styles.containerInferior, children: _jsxs(View, { style: styles.cartaoInferior, children: [_jsx(Text, { style: [styles.texto, subtituloStyle], children: info1.descricao }), _jsx(Text, { style: [styles.texto, descricaoStyle], children: info2.descricao })] }) })] })));
}
