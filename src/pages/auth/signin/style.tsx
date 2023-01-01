import { StyleSheet } from "react-native";


const style = StyleSheet.create({
    local: {
        dispay: "flex",
        alignItems: "center",
        width: "100%",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        width: "70%",
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
        fontSize: 17,
        marginTop: 10,
    },
    inputEmail: {
        width: 152,
        height: 25,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
        paddingLeft: 3,
    },
    email: {
        marginTop: 15,
        display: "flex",
        alignItems: "center",
        height: 25,
        flexDirection: "row",
        width: 180,
    },
    leftIcon: {
        height: 25,
        width: 25,
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "black",
        borderRightWidth: 0,
    },
    inputPassword: {
        width: 126,
        height: 25,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
        paddingLeft: 3,
    },
    password: {
        marginTop: 15,
        display: "flex",
        alignItems: "center",
        height: 25,
        flexDirection: "row",
        width: 180,
        textDecorationLine: "none"
    },
    RightIcon: {
        height: 25,
        width: 25,
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
        fontSize: 14,
        color: "#4e4e4e"
    },
    button: {
        width: 110,
        height: 26,
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "black",
        marginTop: 10,
        marginBottom: 20
    }
})  

export default style