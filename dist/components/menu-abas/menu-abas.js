import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
export function LogMenuAbas(_a) {
    var _b;
    var abas = _a.abas, abaPadrao = _a.abaPadrao, barraAbasStyle = _a.barraAbasStyle, activeTabStyle = _a.activeTabStyle, textoAbaStyle = _a.textoAbaStyle, textoAbaAtivoStyle = _a.textoAbaAtivoStyle, activeTabTextStyle = _a.activeTabTextStyle, alternarAba = _a.alternarAba;
    var _c = useState(abaPadrao || ((_b = abas[1]) === null || _b === void 0 ? void 0 : _b.name) || ""), abaAtiva = _c[0], setAbaAtiva = _c[1];
    useEffect(function () {
        var _a;
        setAbaAtiva(abaPadrao || ((_a = abas[1]) === null || _a === void 0 ? void 0 : _a.name) || "");
    }, [abaPadrao, abas]);
    var pressionarAba = function (abaName) {
        setAbaAtiva(abaName);
        alternarAba === null || alternarAba === void 0 ? void 0 : alternarAba(abaName);
    };
    var renderContent = function () {
        var activeTabComponent = abas.find(function (aba) { return aba.name === abaAtiva; });
        if (!activeTabComponent)
            return null;
        return React.cloneElement(activeTabComponent.component, activeTabComponent.props || {});
    };
    return (_jsxs(View, { style: styles.container, children: [_jsx(View, { style: [styles.barraAbas, barraAbasStyle], children: abas.map(function (aba) { return (_jsx(Pressable, { style: [
                        styles.botaoAba,
                        abaAtiva === aba.name && [styles.botaoAbaAtivo, activeTabStyle],
                    ], onPress: function () { return pressionarAba(aba.name); }, children: _jsx(Text, { style: [
                            textoAbaStyle,
                            abaAtiva === aba.name && [
                                textoAbaAtivoStyle,
                                activeTabTextStyle,
                            ],
                        ], children: aba.name }) }, aba.name)); }) }), _jsx(View, { style: styles.conteudo, children: renderContent() })] }));
}
