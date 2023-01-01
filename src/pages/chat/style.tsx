import { Dimensions, StyleSheet } from "react-native";

const style = StyleSheet.create({
    main: {
        backgroundColor: "#dddddd",
        height: Dimensions.get("window").height,
    },
    send: {
        position: "absolute",
        top: Dimensions.get('window').height - 40,
        height: 30,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        width: Dimensions.get("window").width - 20,
        justifyContent: "space-between"
    },
    input: {
        width: 180,
        height: 30,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
        paddingLeft: 3,
        fontSize: 16
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
        textAlignVertical: "center"
    }
})

export default style