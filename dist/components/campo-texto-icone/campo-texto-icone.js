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
import { Pressable, TextInput, View } from "react-native";
import { styles } from "./styles";
export function LogCampoTextoIcone(_a) {
    var iconeEsquerdo = _a.iconeEsquerdo, iconeDireito = _a.iconeDireito, campoStyle = _a.campoStyle, campoTextoStyle = _a.campoTextoStyle, desabilitado = _a.desabilitado, rest = __rest(_a, ["iconeEsquerdo", "iconeDireito", "campoStyle", "campoTextoStyle", "desabilitado"]);
    return (_jsxs(View, { style: [styles.container, campoStyle], children: [iconeEsquerdo && (_jsx(Pressable, { style: styles.icone, onPress: iconeEsquerdo.onPress, children: _jsx(Ionicons, { name: iconeEsquerdo.icone, size: 24, color: (campoTextoStyle === null || campoTextoStyle === void 0 ? void 0 : campoTextoStyle.color) || "black" }) })), _jsx(TextInput, __assign({}, rest, { style: [styles.campoTexto, campoTextoStyle], editable: !desabilitado, showSoftInputOnFocus: !desabilitado })), iconeDireito && (_jsx(Pressable, { style: styles.icone, onPress: iconeDireito.onPress, children: _jsx(Ionicons, { name: iconeDireito.icone, size: 24, color: (campoTextoStyle === null || campoTextoStyle === void 0 ? void 0 : campoTextoStyle.color) || "black" }) }))] }));
}
