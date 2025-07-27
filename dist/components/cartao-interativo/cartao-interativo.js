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
import { styles } from "./styles";
export function LogCartaoInterativo(_a) {
    var info1 = _a.info1, info2 = _a.info2, info3 = _a.info3, textoStatus = _a.textoStatus, popoverComponent = _a.popoverComponent, cartaoStyle = _a.cartaoStyle, contSuperiorStyle = _a.contSuperiorStyle, contInferiorStyle = _a.contInferiorStyle, tituloStyle = _a.tituloStyle, subtituloStyle = _a.subtituloStyle, rest = __rest(_a, ["info1", "info2", "info3", "textoStatus", "popoverComponent", "cartaoStyle", "contSuperiorStyle", "contInferiorStyle", "tituloStyle", "subtituloStyle"]);
    return (_jsxs(Pressable, __assign({}, rest, { style: [
            styles.container,
            cartaoStyle,
            { borderLeftColor: textoStatus.cor },
        ], children: [_jsxs(View, { style: [styles.containerSuperior, contSuperiorStyle], children: [_jsxs(View, { style: styles.cartaoSuperior, children: [_jsx(Text, { style: [styles.texto, tituloStyle], children: info1.titulo }), _jsx(Text, { style: [styles.texto, subtituloStyle], children: info1.subtitulo })] }), popoverComponent] }), _jsxs(View, { style: styles.containerMeio, children: [_jsxs(View, { style: styles.cartaoMeio, children: [_jsx(Text, { style: [styles.texto, tituloStyle], children: info2.titulo }), _jsx(Text, { style: [styles.texto, subtituloStyle], children: info2.subtitulo })] }), _jsxs(View, { style: styles.cartaoMeio, children: [_jsx(Text, { style: styles.texto, children: info2.descricao }), _jsx(Text, { style: styles.texto, children: textoStatus.status })] })] }), !!info3.titulo && (_jsx(View, { style: [styles.containerInferior, contInferiorStyle], children: _jsxs(View, { style: styles.cartaoInferior, children: [_jsx(Text, { style: [styles.texto, tituloStyle], children: info3.titulo }), _jsx(Text, { style: [styles.texto, subtituloStyle], children: info3.subtitulo })] }) }))] })));
}
