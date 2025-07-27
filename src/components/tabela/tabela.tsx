import {
  Text,
  View,
  DimensionValue,
  TextStyle,
  ScrollView,
  Pressable,
} from "react-native";
import { TabelaProps } from "../../types/tabela";
import { styles } from "./styles";

export function LogTabela({
  dados,
  corFundo,
  fonte,
  onPressAction,
}: TabelaProps) {
  // Função para determinar a largura de cada coluna
  const getLargura = (index: number): DimensionValue => {
    if (!dados.largura) return "25%"; // Largura padrão
    if (typeof dados.largura === "string" || typeof dados.largura === "number")
      return dados.largura; // Largura única para todas as colunas
    if (Array.isArray(dados.largura)) {
      return dados.largura[index] || "25%"; // Largura específica para a coluna ou padrão
    }
    return "25%"; // Fallback para largura padrão
  };

  // Função para determinar o alinhamento de cada coluna
  const getAlinhamento = (index: number): TextStyle["textAlign"] => {
    if (!dados.alinhamento) return "center"; // Alinhamento padrão
    if (typeof dados.alinhamento === "string") return dados.alinhamento; // Alinhamento único para todas as colunas
    if (Array.isArray(dados.alinhamento)) {
      return dados.alinhamento[index] || "center"; // Alinhamento específico para a coluna ou padrão
    }
    return "center"; // Fallback para alinhamento padrão
  };

  return (
    <View style={[styles.container, { marginBottom: dados.marginBottom }]}>
      <View>
        <View style={styles.cabecalho}>
          {dados.titulos.map((titulo, index) => (
            <Text
              key={index}
              style={[
                styles.titulo,
                {
                  width: getLargura(index),
                  textAlign: getAlinhamento(index),
                  fontFamily: fonte,
                },
              ]}
            >
              {titulo}
            </Text>
          ))}
        </View>
        <ScrollView>
          {dados.linhas.map((linha, linhaIndex) => (
            <Pressable
              onPress={() => {
                onPressAction && onPressAction(linha);
              }}
              key={linhaIndex}
              style={[
                styles.tabela,
                {
                  backgroundColor: dados.cor
                    ? Array.isArray(dados.cor)
                      ? dados.cor[linhaIndex]
                      : dados.cor
                    : corFundo,
                },
              ]}
            >
              {linha.map((valor, colunaIndex) => (
                <Text
                  key={colunaIndex}
                  style={[
                    styles.dados,
                    {
                      width: getLargura(colunaIndex),
                      textAlign: getAlinhamento(colunaIndex),
                      fontFamily: fonte,
                    },
                  ]}
                >
                  {valor}
                </Text>
              ))}
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
