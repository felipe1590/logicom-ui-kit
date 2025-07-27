import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tituloContainer: {
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
    flex: 1,
  },
  tituloBotao: {
    height: "100%",
    justifyContent: "center",
  },
  botoes: {
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
    paddingRight: 5,
  },

  // Botao menu
  botaoMenu: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    paddingLeft: 15,
  },

  // Botao barra
  botaoBarra: {
    height: "100%",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});
