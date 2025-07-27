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
import { Ionicons } from "@expo/vector-icons";
import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
export function LogMenuBotao(_a) {
    var titulo = _a.titulo, icone = _a.icone, textoStyle = _a.textoStyle, rest = __rest(_a, ["titulo", "icone", "textoStyle"]);
    return (_jsx(Pressable, __assign({}, rest, { children: _jsxs(View, { style: styles.menuBotao, children: [_jsx(Ionicons, { name: icone, size: 24, color: textoStyle === null || textoStyle === void 0 ? void 0 : textoStyle.color }), _jsx(Text, { style: textoStyle, children: titulo })] }) })));
}
