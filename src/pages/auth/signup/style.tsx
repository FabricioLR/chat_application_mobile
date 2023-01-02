import { StatusBar, StyleSheet } from "react-native";

const style = StyleSheet.create({
    local: {
        dispay: "flex",
        alignItems: "center",
        width: "100%",
        marginTop: StatusBar.currentHeight
    },
    form: {
        display: "flex",
        flexDirection: "column",
        width: "85%",
        marginTop: 30,
        backgroundColor: "#E5E5E5",
        alignItems: "center",
        borderRadius: 5,
        shadowColor: "#171717",
        shadowOffset: {
            width: 5,
            height: 4
        },
        shadowOpacity: 0.08,
        shadowRadius: 6

    },
    title: {
        fontSize: 21,
        marginTop: 20,
    },
    inputName: {
        width: 187,
        height: 30,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
        paddingLeft: 3,
        fontSize: 16
    },
    name: {
        marginTop: 30,
        display: "flex",
        alignItems: "center",
        height: 30,
        flexDirection: "row",
        width: 220,
    },
    inputEmail: {
        width: 187,
        height: 30,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
        paddingLeft: 3,
        fontSize: 16
    },
    email: {
        marginTop: 30,
        display: "flex",
        alignItems: "center",
        height: 30,
        flexDirection: "row",
        width: 220,
    },
    leftIcon: {
        height: 30,
        width: 30,
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "black",
        borderRightWidth: 0,
    },
    inputPassword: {
        width: 156,
        height: 30,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
        paddingLeft: 3,
        fontSize: 16
    },
    password: {
        marginTop: 30,
        display: "flex",
        alignItems: "center",
        height: 30,
        flexDirection: "row",
        width: 220,
        textDecorationLine: "none"
    },
    RightIcon: {
        height: 30,
        width: 30,
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "black",
        borderLeftWidth: 0,
    },
    error: {
        height: 15,
        marginTop: 5,
        
    },
    textError: {
        fontSize: 12,
        color: "#4e4e4e"
    },
    button: {
        width: 140,
        height: 35,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
        marginTop: 15,
        marginBottom: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        textAlignVertical: "center"
    }
})

export default style