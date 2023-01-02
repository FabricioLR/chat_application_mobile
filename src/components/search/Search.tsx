import { TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import style from "./style";

type SearchProps = {
    setShow: Function
    search: Function
}

export default function Search(props: SearchProps){
    return(
        <View style={style.search}>
            <Icon style={style.goBack} name="arrow-left" size={26} onPress={() => {props.setShow(false); props.search("")}}/>
            <TextInput style={style.input} autoCapitalize='none' placeholderTextColor={"#00000078"} placeholder="Search..." onChangeText={(value) => props.search(value)}/>
        </View>
    )
}