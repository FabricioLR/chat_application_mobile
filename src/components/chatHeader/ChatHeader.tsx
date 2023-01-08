import { Image, Text, TouchableOpacity, View, KeyboardAvoidingView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import style from "./style";
import ProfileImage from "../../../images/profile.png"
import { useLinkTo, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ContactsTypes, CurrentContact } from "../../store/ducks/contacts/types";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../../store";

type ChatHeaderProps = {
    contact: CurrentContact
}

export default function ChatHeader(props: ChatHeaderProps){
    const navigate = useLinkTo()
    const [ uri, setUri ] = useState("")
    const State = useSelector(state => state) as ApplicationState
    const dispatch = useDispatch()

    useEffect(() => {
        if (props.contact.profile_image){
            setUri(props.contact.profile_image)
        }
    }, [])

    return(
        <View style={style.header}>
            <TouchableOpacity style={style.contact} onPress={() => {
                dispatch({ type: ContactsTypes.REMOVE_CURRENTCONTACT })
                navigate("/home")
            }}>
                <Icon name="arrow-left" size={23}/>
                <View style={style.contactImage}>
                    <Image style={style.image} source={uri != "" ? { uri: uri } : ProfileImage} onError={() => setUri(ProfileImage)}/>
                </View>
            </TouchableOpacity>
            <View>
                <Text style={style.name}>{props.contact.name}</Text>
                {
                    State.contacts.currentContact && State.contacts.onlines ?
                        State.contacts.currentContact!.name in State.contacts.onlines ?
                            <Text style={style.online}>online</Text>
                        : 
                        null
                    :
                    null
                }
            </View>
        </View>
    )
}