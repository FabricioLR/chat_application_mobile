import { FlatList, Text, TextInput, View } from "react-native";
import { useSelector } from "react-redux";
import ChatHeader from "../../components/chatHeader/ChatHeader";
import { ApplicationState } from "../../store";
import { Message as message } from "../../store/ducks/messages/types";
import Message from "../../components/message/Message"
import style from "./style";

type RenderMessagesProps = {
    item: message
}

export default function Chat(){
    const State = useSelector(state => state) as ApplicationState

    const renderMessages = ({ item }: RenderMessagesProps) => {
        return(
            <Message message={item}/>
        )
    }

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
                    <FlatList
                        data={State.messages.chat}
                        renderItem={renderMessages}
                        keyExtractor={message => message.id}
                    />
                :
                    null
            }
            <View style={style.send}>
                <TextInput style={style.input}/>
                <View style={style.button}>
                    <Text>Send</Text>
                </View>
            </View>
        </View>
    )
}