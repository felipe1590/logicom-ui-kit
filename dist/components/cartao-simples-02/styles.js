import { StyleSheet } from "react-native";
export var styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        height: 130,
        width: "48%",
    },
    iconeContainer: {
        width: 26,
        height: 28,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    containerSuperior: {
        flexDirection: "column",
        justifyContent: "space-between",
        paddingVertical: 5,
        borderBottomWidth: 2,
        width: "100%",
    },
    cartaoSuperior: {
        gap: 5,
        paddingBottom: 10,
    },
    cartaoSuperiorSec: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    containerInferior: {
        paddingVertical: 5,
    },
    subTitulo: {
        fontSize: 16,
    },
});
