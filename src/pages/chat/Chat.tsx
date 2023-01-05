import { FlatList, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View, Keyboard, Dimensions, StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ChatHeader from "../../components/chatHeader/ChatHeader";
import { ApplicationState } from "../../store";
import { Message as message, MessagesTypes } from "../../store/ducks/messages/types";
import Message from "../../components/message/Message"
import style from "./style";
import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../context/userContext";
import socket from "../../context/socket";
import usekeyboard from "../../components/keyboard/UseKeyboard";
import { ContactsTypes } from "../../store/ducks/contacts/types";

type RenderMessagesProps = {
    item: message
}

export default function Chat(){
    const keyboardHeight = usekeyboard()
    const [message, setMessage] = useState("")
    const State = useSelector(state => state) as ApplicationState
    const { user } = useContext(AuthContex)
    const dispatch = useDispatch()

    useEffect(() => {
        socket.on("contact message", (message) => {
            dispatch({ type: MessagesTypes.MESSAGE_REQUEST, payload: { message: {...message, id: String(Math.floor(Math.random() * 10000)) }, already: false }})
        })
        socket.on("onlines", (contacts) => {
            dispatch({ type: ContactsTypes.SET_ONLINE, payload: contacts})
        })
    }, [socket])

    useEffect(() => {
        const interval = setInterval(() => {
            if (State.contacts.currentContact?.name){
                if (State.contacts.currentContact?.name in State.contacts.online){
                    dispatch({ type: ContactsTypes.UPDATE_CURRENTCONTACT, payload: { online: true }})
                } else {
                    dispatch({ type: ContactsTypes.UPDATE_CURRENTCONTACT, payload: { online: false }})
                }
            }
        }, 3000)

        return () => {
            clearInterval(interval)
        }
    }, [State.contacts.online])

    function send(){
        if (message != ""){
            dispatch({ type: MessagesTypes.MESSAGE_REQUEST, payload: { message: { message, fromId: user?.id, contactId: State.contacts.currentContact?.contactId, id: String(Math.floor(Math.random() * 10000)), already: true } }})
            socket.emit("message", { message, to: State.contacts.currentContact?.name, fromId: user?.id, contactId: State.contacts.currentContact?.contactId })
            dispatch({ type: MessagesTypes.ADD_REQUEST, payload: { message, contactId: State.contacts.currentContact?.contactId } })
            setMessage("")
        }
    }

    const renderMessages = ({ item }: RenderMessagesProps) => {
        return(
            <Message message={item}/>
        )
    }

    //console.log(State)

    return(
        <View style={style.main}>
            {
                State.contacts.currentContact ? 
                    <ChatHeader contact={State.contacts.currentContact}/>
                :
                    null
            }
            {
                State.messages.chat.length > 0 ?
                    <FlatList style={keyboardHeight > 0 ? {...style.messages, height: Dimensions.get("window").height - 105 - keyboardHeight} : style.messages}
                        data={State.messages.chat}
                        renderItem={renderMessages}
                        keyExtractor={message => message.id}
                    />
                :
                    null
            }
            <KeyboardAvoidingView style={keyboardHeight > 0 ? { ...style.send, top: Dimensions.get('window').height - 50 - keyboardHeight } : style.send} behavior="padding">
                <TextInput value={message} style={style.input} onChangeText={(value) => setMessage(value)}/>
                <TouchableOpacity style={style.button} onPress={() => send()}>
                    <Text>Send</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}