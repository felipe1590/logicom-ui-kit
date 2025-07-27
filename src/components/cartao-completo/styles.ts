import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderLeftWidth: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: "100%",
  },
  containerSuperior: {
    display: "flex",
    justifyContent: "space-between",
    paddingVertical: 5,
    borderBottomWidth: 2,
  },
  cartaoSuperior: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cartaoSuperiorSec: {
    width: "95%",
  },
  containerInferior: {
    paddingVertical: 5,
  },
  cartaoInferior: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titulo: {
    fontSize: 18,
  },
  texto: {
    fontSize: 14,
  },
});
