import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Text, View, ScrollView, Pressable, } from "react-native";
import { styles } from "./styles";
export function LogTabela(_a) {
    var dados = _a.dados, corFundo = _a.corFundo, fonte = _a.fonte, onPressAction = _a.onPressAction;
    // Função para determinar a largura de cada coluna
    var getLargura = function (index) {
        if (!dados.largura)
            return "25%"; // Largura padrão
        if (typeof dados.largura === "string" || typeof dados.largura === "number")
            return dados.largura; // Largura única para todas as colunas
        if (Array.isArray(dados.largura)) {
            return dados.largura[index] || "25%"; // Largura específica para a coluna ou padrão
        }
        return "25%"; // Fallback para largura padrão
    };
    // Função para determinar o alinhamento de cada coluna
    var getAlinhamento = function (index) {
        if (!dados.alinhamento)
            return "center"; // Alinhamento padrão
        if (typeof dados.alinhamento === "string")
            return dados.alinhamento; // Alinhamento único para todas as colunas
        if (Array.isArray(dados.alinhamento)) {
            return dados.alinhamento[index] || "center"; // Alinhamento específico para a coluna ou padrão
        }
        return "center"; // Fallback para alinhamento padrão
    };
    return (_jsx(View, { style: [styles.container, { marginBottom: dados.marginBottom }], children: _jsxs(View, { children: [_jsx(View, { style: styles.cabecalho, children: dados.titulos.map(function (titulo, index) { return (_jsx(Text, { style: [
                            styles.titulo,
                            {
                                width: getLargura(index),
                                textAlign: getAlinhamento(index),
                                fontFamily: fonte,
                            },
                        ], children: titulo }, index)); }) }), _jsx(ScrollView, { children: dados.linhas.map(function (linha, linhaIndex) { return (_jsx(Pressable, { onPress: function () {
                            onPressAction && onPressAction(linha);
                        }, style: [
                            styles.tabela,
                            {
                                backgroundColor: dados.cor
                                    ? Array.isArray(dados.cor)
                                        ? dados.cor[linhaIndex]
                                        : dados.cor
                                    : corFundo,
                            },
                        ], children: linha.map(function (valor, colunaIndex) { return (_jsx(Text, { style: [
                                styles.dados,
                                {
                                    width: getLargura(colunaIndex),
                                    textAlign: getAlinhamento(colunaIndex),
                                    fontFamily: fonte,
                                },
                            ], children: valor }, colunaIndex)); }) }, linhaIndex)); }) })] }) }));
}
