import { Dimensions, StyleSheet } from "react-native";

const style = StyleSheet.create({
    search: {
        width: Dimensions.get("window").width,
        backgroundColor: "#E5E5E5",
        height: 60,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    goBack: {
        marginLeft: 10
    },
    input: {
        width: Dimensions.get("window").width - 60,
        height: 30,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
        paddingLeft: 3,
        fontSize: 16,
        marginLeft: 10
    }
})

export default style