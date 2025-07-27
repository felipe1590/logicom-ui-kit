import { StyleSheet } from "react-native";
export var styles = StyleSheet.create({
    celula: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 5,
        borderBottomWidth: 1,
    },
    celulaDescricao: {
        width: "70%",
    },
    celulaValor: {
        justifyContent: "center",
        alignContent: "center",
        width: "30%",
    },
    rotulo: {
        fontSize: 16,
    },
    descricao: {
        flexDirection: "row",
        height: "100%",
        alignItems: "center",
        paddingRight: 5,
        fontSize: 14,
    },
});
