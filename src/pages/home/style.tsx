import { Dimensions, StatusBar, StyleSheet } from "react-native";

const style = StyleSheet.create({
    content: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: "#dddddd",
        height: Dimensions.get("window").height,
    },
    contacts: {
        
    }
})

export default style