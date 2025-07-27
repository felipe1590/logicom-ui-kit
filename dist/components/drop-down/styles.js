import { StyleSheet } from "react-native";
export var styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        // backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
    optionItem: {
        height: 40,
        justifyContent: "center",
        paddingHorizontal: 15,
    },
    // optionText: {
    //   fontSize: 15,
    //   color: "#333",
    // },
    // separator: {
    //   height: 1,
    //   backgroundColor: "#E5E5E5",
    //   marginHorizontal: 10,
    // },
    options: {
        position: "absolute",
        // backgroundColor: "white",
        padding: 0,
        borderRadius: 8,
        maxHeight: 250,
        elevation: 5, // Android
        shadowColor: "#000", // iOS
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    text: {
        // fontSize: 15,
        opacity: 0.8,
        // color: "#333",
    },
    button: {
        height: 50,
        justifyContent: "space-between",
        backgroundColor: "white",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#E5E5E5",
    },
});
