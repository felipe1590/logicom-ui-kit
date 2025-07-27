import { StyleSheet } from "react-native";
export var styles = StyleSheet.create({
    // Menu Modal
    // overlay: {
    //   flex: 1,
    //   backgroundColor: "rgba(0, 0, 0, 0.5)",
    //   flexDirection: "row",
    // },
    // background: {
    //   flex: 1,
    // },
    // menuContainer: {
    //   width: "80%",
    //   height: "100%",
    //   borderTopLeftRadius: 10,
    //   borderBottomLeftRadius: 10,
    //   elevation: 5,
    //   shadowColor: "#000",
    //   shadowOffset: { width: -2, height: 0 },
    //   shadowOpacity: 0.25,
    //   shadowRadius: 3.84,
    // },
    // Menu Conteudo
    menuConteudo: {
        flex: 1,
        overflow: "hidden",
    },
    conteudoContainer: {
        paddingBottom: 42,
        height: "100%",
    },
    // Menu Info
    menuInfo: {
        marginVertical: 20,
        paddingLeft: 20,
        width: "100%",
        flexDirection: "row",
    },
    menuImageViwer: {
        width: 80,
        height: 80,
        marginRight: 15,
        borderRadius: "50%",
        backgroundColor: "white",
    },
    menuImage: {
        width: 70,
        height: 70,
        marginLeft: 5,
    },
    // Menu Botao
    menuBotao: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        height: 52,
        paddingHorizontal: 24,
        marginLeft: 12,
    },
});
