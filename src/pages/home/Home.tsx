import { useContext, useEffect, useState, } from "react";
import { View, FlatList, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header/Header";
import Contact from "../../components/contact/Contact";
import { AuthContex } from "../../context/userContext";
import { ApplicationState } from "../../store";
import { Contact as contact, ContactsTypes } from "../../store/ducks/contacts/types";
import { MessagesTypes } from "../../store/ducks/messages/types";
import style from "./style";
import Search from "../../components/search/Search";
import socket from "../../context/socket";

type RenderContactsProps = {
    item: contact
}

export default function Home(){
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const State = useSelector(state => state) as ApplicationState
    const { user } = useContext(AuthContex)

    useEffect(() => {
        dispatch({ type: ContactsTypes.LOAD_REQUEST })
        dispatch({ type: MessagesTypes.LOAD_REQUEST})
        socket.emit("whoami", user?.name)
    }, [])

    useEffect(() => {
        socket.on("onlines", (contacts) => {
            dispatch({ type: ContactsTypes.SET_ONLINE, payload: contacts})
        })
    }, [socket])

    function search(name: string){
        dispatch({ type: ContactsTypes.FILTER_REQUEST, payload: { name, userId: user?.id }})
    }

    const renderContacts = ({ item }: RenderContactsProps) => {
        return(
            <Contact contact={item} />
        )
    }
    
    return(
        <View style={style.content}>
            {
                show ?
                    <Search setShow={setShow} search={search}/>
                :
                    null
            }
            {
                show == false ?
                    <Header setShow={setShow}/>
                :
                    null
            }
            <SafeAreaView style={style.contacts}>
                {
                    State.contacts.search[0] ?
                        <FlatList
                            data={State.contacts.search}
                            renderItem={renderContacts}
                            keyExtractor={contact => contact.id}
                        />
                    :
                        null
                }
            </SafeAreaView>
        </View>
    )
}