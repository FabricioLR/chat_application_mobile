import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    header: {
        width: "100%",
        height: 50,
        backgroundColor: "#E5E5E5",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    contact: {
        marginLeft: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 50
    },
    contactImage: {
        width: 40,
        height: 40,
        borderRadius: 100,
        marginRight: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#b9b9b9",
        marginLeft: 3
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 100
    },
    name: {
        fontSize: 15
    }
})

export default style