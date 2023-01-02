import { Image, Text, TouchableOpacity, View, KeyboardAvoidingView } from "react-native";
import { User } from "../../context/userContext";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import style from "./style";
import ProfileImage from "../../../images/profile.png"
import { useLinkTo } from "@react-navigation/native";
import { useEffect, useState } from "react";

type ChatHeaderProps = {
    contact: User
}

export default function ChatHeader(props: ChatHeaderProps){
    const navigate = useLinkTo()
    const [ uri, setUri ] = useState("")

    useEffect(() => {
        if (props.contact.profile_image != ""){
            setUri(props.contact.profile_image)
        }
    }, [])

    return(
        <View style={style.header}>
            <TouchableOpacity style={style.contact} onPress={() => {
                navigate("/home")
            }}>
                <Icon name="arrow-left" size={23}/>
                <View style={style.contactImage}>
                    <Image style={style.image} source={uri != "" ? { uri: uri } : ProfileImage} onError={() => setUri(ProfileImage)}/>
                </View>
            </TouchableOpacity>
            <View>
                <Text style={style.name}>{props.contact.name}</Text>
            </View>
        </View>
    )
}