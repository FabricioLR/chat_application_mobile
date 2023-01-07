import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    contact: {
        width: "90%",
        display: "flex",
        flexDirection: "row",
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        alignItems: "center"
    },
    localImage: {
        width: 50,
        height: 50,
        borderRadius: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#b9b9b9",
        marginRight: 10
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 100,
    },
    name: {
        fontSize: 17,
    },
    viewed: {
        marginLeft: 20,
        width: 20,
        height: 20,
        borderRadius: 100,
        backgroundColor: "#b9b9b9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    value: {
        fontSize: 12
    }
})

export default style