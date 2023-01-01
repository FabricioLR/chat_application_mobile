import { Image, Text, TouchableOpacity, View } from "react-native";
import { User } from "../../context/userContext";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import style from "./style";
import ProfileImage from "../../../images/profile.png"
import { useLinkTo } from "@react-navigation/native";

type ChatHeaderProps = {
    contact: User
}

export default function ChatHeader(props: ChatHeaderProps){
    const navigate = useLinkTo()

    return(
        <View style={style.header}>
            <TouchableOpacity style={style.contact} onPress={() => {
                navigate("/home")
            }}>
                <Icon name="arrow-left" size={23}/>
                <View style={style.contactImage}>
                    <Image style={style.image} source={{ uri: props.contact.profile_image == "" ? ProfileImage : props.contact.profile_image }}/>
                </View>
            </TouchableOpacity>
            <View>
                <Text style={style.name}>{props.contact.name}</Text>
            </View>
        </View>
    )
}