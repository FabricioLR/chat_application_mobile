import { Dimensions, StyleSheet } from "react-native";

const style = StyleSheet.create({
    other: {
        width: 200,
        backgroundColor: "#b9b9b9",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 10,
        marginLeft: 10,
        marginTop: 10,
    },
    owner: {
        width: 200,
        backgroundColor: "#b9b9b9",
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 10,
        marginRight: 10,
        marginTop: 10,
        left: Dimensions.get('window').width - 210,
        textAlign: "end"
    },
    message: {
        margin: 5
    }
})

export default style