import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    header: {
        width: "100%",
        height: 60,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#E5E5E5"
    },
    logo: {
        marginLeft: 20,
        width: 80,
        height: 50,
        backgroundColor: "#b9b9b9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    user: {
        display: "flex",
        flexDirection: "row",
        marginRight: 20,
        alignItems: "center"
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: "#b9b9b9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 100
    },
    logoImage: {
        width: "100%",
        height: "100%",
    }
})

export default style