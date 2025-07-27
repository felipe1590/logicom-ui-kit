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
import { View, Text, Pressable, Image } from "react-native";
import { styles } from "./styles";
export function LogMenuInfo(_a) {
    var usuario = _a.usuario, logoUri = _a.logoUri, infoStyle = _a.infoStyle, rest = __rest(_a, ["usuario", "logoUri", "infoStyle"]);
    return (_jsxs(Pressable, __assign({}, rest, { style: styles.menuInfo, children: [_jsx(View, { style: styles.menuImageViwer, children: _jsx(Image, { source: logoUri, style: styles.menuImage, resizeMode: "contain" }) }), _jsxs(View, { children: [_jsxs(Text, { style: infoStyle, children: [usuario.codigo, " - ", usuario.nome] }), _jsx(Text, { style: infoStyle, children: usuario.fantasia }), _jsx(Text, { style: infoStyle, children: usuario.cnpj })] })] })));
}
