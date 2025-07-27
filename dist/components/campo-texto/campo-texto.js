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
import { useState } from "react";
import { Pressable, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
export function LogCampoTexto(_a) {
    var campoStyle = _a.campoStyle, campoTextoStyle = _a.campoTextoStyle, desabilitado = _a.desabilitado, _b = _a.senha, senha = _b === void 0 ? false : _b, rest = __rest(_a, ["campoStyle", "campoTextoStyle", "desabilitado", "senha"]);
    var _c = useState(false), senhaVisible = _c[0], setSenhaVisible = _c[1];
    var controlaSenhaVisibilidade = function () {
        setSenhaVisible(!senhaVisible);
    };
    return (_jsxs(View, { style: [styles.container, campoStyle], children: [_jsx(TextInput, __assign({}, rest, { style: [styles.campoTexto, campoTextoStyle], secureTextEntry: senha && !senhaVisible, editable: !desabilitado, showSoftInputOnFocus: !desabilitado })), senha && (_jsx(Pressable, { onPress: controlaSenhaVisibilidade, children: _jsx(Ionicons, { style: styles.icone, name: senhaVisible ? "eye" : "eye-off", size: 24, color: campoTextoStyle === null || campoTextoStyle === void 0 ? void 0 : campoTextoStyle.color }) }))] }));
}
