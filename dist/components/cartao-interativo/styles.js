import { StyleSheet } from "react-native";
export var styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderLeftWidth: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    containerSuperior: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 5,
        borderBottomWidth: 1,
    },
    cartaoSuperior: {
        paddingBottom: 5,
        width: "90%",
    },
    containerMeio: {
        paddingVertical: 5,
    },
    cartaoMeio: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    containerInferior: {
        paddingVertical: 5,
        borderTopWidth: 1,
    },
    cartaoInferior: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    texto: {
        fontSize: 16,
    },
});
