import { FlatList, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View,  Dimensions, StatusBar, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ChatHeader from "../../components/chatHeader/ChatHeader";
import { ApplicationState } from "../../store";
import { Message as message, MessagesTypes } from "../../store/ducks/messages/types";
import Message from "../../components/message/Message"
import style from "./style";
import { useContext, useState } from "react";
import { AuthContex } from "../../context/userContext";
import socket from "../../context/socket";
import usekeyboard from "../../components/keyboard/UseKeyboard";

type RenderMessagesProps = {
    item: message
}

export default function Chat(){
    const keyboardHeight = usekeyboard()
    const [message, setMessage] = useState("")
    const State = useSelector(state => state) as ApplicationState
    const { user } = useContext(AuthContex)
    const dispatch = useDispatch()

    function send(){
        if (message != ""){
            const date = new Date()
            dispatch({ type: MessagesTypes.MESSAGE_REQUEST, payload: { message: { message, fromId: user?.id, contactId: State.contacts.currentContact?.contactId, id: String(Math.floor(Math.random() * 10000)), already: true, createdAt: date.toString() } }})
            socket.emit("message", { message, to: State.contacts.currentContact?.name, fromName: State.contacts.currentContact?.name, fromId: user?.id, contactId: State.contacts.currentContact?.contactId, createdAt: date.toString() })
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
            <SafeAreaView>
                {
                    State.messages.chat.length > 0 ?
                        <FlatList style={keyboardHeight > 0 ? {...style.messages, height: Dimensions.get("window").height - 130 - keyboardHeight} : style.messages}
                            inverted
                            data={[...State.messages.chat].reverse()}
                            renderItem={renderMessages}
                            keyExtractor={message => message.id}
                        />
                    :
                        null
                }
            </SafeAreaView>
            <KeyboardAvoidingView style={keyboardHeight > 0 ? { ...style.send, top: Dimensions.get('window').height - 50 - Number(StatusBar.currentHeight) - keyboardHeight } : style.send} behavior="padding">
                <TextInput value={message} style={style.input} onChangeText={(value) => setMessage(value)}/>
                <TouchableOpacity style={style.button} onPress={() => send()}>
                    <Text>Send</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}