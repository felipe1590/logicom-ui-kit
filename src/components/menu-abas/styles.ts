import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  barraAbas: {
    flexDirection: "row",
    height: 50,
    borderBottomWidth: 1,
    justifyContent: "space-around",
  },
  botaoAba: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  botaoAbaAtivo: {
    borderBottomWidth: 2,
  },
  conteudo: {
    flex: 1,
  },
});
