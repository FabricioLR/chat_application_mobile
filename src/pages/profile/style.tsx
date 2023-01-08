import { Dimensions, StyleSheet } from "react-native";

const style = StyleSheet.create({
    profile: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height + 20,
        display: "flex",
        alignItems: "center",
        backgroundColor: "#dddddd",
    },
    imageLocal: {
        width: 200,
        height: 200,
        borderRadius: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#b9b9b9",
        marginTop: 40
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 1000,
    },
    nameLocal: {
        marginTop: 15,
        width: 200,
        textAlign: "center"
    },
    name: {
        fontSize: 22,
        width: 200,
        textAlign: "center"
    },
    buttonLocal: {
        width: 200,
        display: "flex",
        alignItems: "center"
    },
    signOut: {
        width: 140,
        height: 35,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
        marginTop: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        textAlignVertical: "center",
    },
    form: {
        display: "flex",
        alignItems: "center",
    },
    formTitle: {
        width: 156,
        fontSize: 18,
        marginTop: 20,
        marginBottom: 5,
    },
    formInput: {
        width: 156,
        height: 30,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
        paddingLeft: 3,
        fontSize: 16,
    },
    formButton: {
        width: 100,
        height: 30,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
        marginTop: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        textAlignVertical: "center",
    },
    error: {
        height: 15,
        marginLeft: 5,
        width: 156,
    },
    textError: {
        fontSize: 12,
        color: "#4e4e4e",
    },
    changeImageForm: {
        display: "flex",
        alignItems: "center",
    },
    changeImageFormFile: {
        width: 156,
        height: 30,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        textAlignVertical: "center"
    },
    changeImageFormButton: {
        width: 100,
        height: 30,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
        marginTop: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        textAlignVertical: "center",
    }
})

export default style