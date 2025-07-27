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
export function LogBotaoIcone(_a) {
    var titulo = _a.titulo, iconeEsquerda = _a.iconeEsquerda, iconeDireita = _a.iconeDireita, tituloStyle = _a.tituloStyle, iconeStyle = _a.iconeStyle, rest = __rest(_a, ["titulo", "iconeEsquerda", "iconeDireita", "tituloStyle", "iconeStyle"]);
    return (_jsxs(Pressable, __assign({}, rest, { children: [iconeEsquerda ? (_jsx(View, { style: styles.containerIcone, children: _jsx(Ionicons, { style: [styles.icone, iconeStyle], name: iconeEsquerda, size: 24 }) })) : (_jsx(View, { style: styles.containerIcone })), _jsx(Text, { style: [styles.titulo, tituloStyle], children: titulo }), iconeDireita ? (_jsx(View, { style: styles.containerIcone, children: _jsx(Ionicons, { style: [styles.icone, iconeStyle], name: iconeDireita, size: 24 }) })) : (_jsx(View, { style: styles.containerIcone }))] })));
}
