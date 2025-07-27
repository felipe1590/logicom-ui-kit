import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    flexDirection: "column",
  },
  cabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
    paddingHorizontal: 3,
    position: "static",
  },
  tabela: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    marginBottom: 5,
    borderRadius: 5,
    paddingHorizontal: 3,
  },
  titulo: {
    fontSize: 14,
  },
  dados: {
    fontSize: 16,
  },
});
