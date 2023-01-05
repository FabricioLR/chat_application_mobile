import { Dimensions, StatusBar, StyleSheet } from "react-native";

const style = StyleSheet.create({
    main: {
        backgroundColor: "#dddddd",
        height: Dimensions.get("window").height,
    },
    messages: {
        height: Dimensions.get("window").height - 105,
        flexGrow: 0,
    },
    send: {
        position: "absolute",
        top: Dimensions.get('window').height - 50,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        width: Dimensions.get("window").width,
        justifyContent: "space-between",
        backgroundColor: "#dddddd",
    },
    input: {
        width: 180,
        height: 30,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
        paddingLeft: 3,
        fontSize: 16,
        marginBottom: 10,
        marginLeft: 10,
        marginTop: 10
    },
    button: {
        width: 60,
        height: 30,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        textAlignVertical: "center",
        marginBottom: 10,
        marginRight: 10,
        marginTop: 10
    }
})

export default style