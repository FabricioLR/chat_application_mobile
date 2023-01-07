import { useLinkTo } from "@react-navigation/native"
import { useContext, useEffect, useState } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { AuthContex } from "../../context/userContext"
import { Contact as contact, ContactsTypes } from "../../store/ducks/contacts/types"
import { MessagesTypes } from "../../store/ducks/messages/types"
import style from "./style"
import ProfileImage from "../../../images/profile.png"
import { ApplicationState } from "../../store"
import socket from "../../context/socket"

type ContactProps = {
    contact: contact
}

export default function Contact(props: ContactProps){
    const { user } = useContext(AuthContex)
    const dispatch = useDispatch()
    const navigate = useLinkTo()
    const [ uri, setUri ] = useState("")
    const State = useSelector(state => state) as ApplicationState

    useEffect(() => {
        if (user?.id == props.contact.user1.id){
            if (props.contact.user2.profile_image != ""){
                setUri(props.contact.user2.profile_image)
            }
        } else {
            if (props.contact.user1.profile_image != ""){
                setUri(props.contact.user1.profile_image)
            }
        }
    }, [])

    return(
        <TouchableOpacity style={style.contact} onPress={() => {
            dispatch({ type: ContactsTypes.ADD_CURRENTCONTACT, payload: {
                name: props.contact.user1Id == user?.id ? props.contact.user2.name : props.contact.user1.name,
                id: props.contact.user1Id == user?.id ? props.contact.user2.id : props.contact.user1.id,
                profile_image: props.contact.user1Id == user?.id ? props.contact.user2.profile_image : props.contact.user1.profile_image,
                contactId: props.contact.id
            }})
            dispatch({ type: MessagesTypes.UPDATE_MESSAGE, payload: { contactId: props.contact.id }})
            dispatch({ type: MessagesTypes.UPDATE_MESSAGE_FRONT, payload: { contactId: props.contact.id }})
            dispatch({ type: MessagesTypes.FILTER_REQUEST, payload: { contactId: props.contact.id }})
            socket.emit("updateMessageStatus", { contactId: props.contact.id, to: props.contact.user1Id == user?.id ? props.contact.user2.name : props.contact.user1.name })
            navigate("/chat")
        }}>
            <View style={style.localImage}>
                <Image style={style.image} source={uri != "" ? { uri: uri } : ProfileImage} onError={() => setUri(ProfileImage)} />
            </View>
            <View>
                <Text style={style.name}>{ props.contact.user1Id == user?.id ? props.contact.user2.name : props.contact.user1.name }</Text>
            </View>
            {
                    State.messages.data.filter(message => message.contactId == props.contact.id && message.viewed == false && message.fromId != user?.id).length > 0 ?
                        <View style={style.viewed}>
                            <Text style={style.value}>{State.messages.data.filter(message => message.contactId == props.contact.id && message.viewed == false && message.fromId != user?.id).length}</Text>
                        </View>
                    :
                    null
                }
        </TouchableOpacity>
    )
}