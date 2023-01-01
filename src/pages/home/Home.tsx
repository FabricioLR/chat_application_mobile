import { useLinkTo } from "@react-navigation/native";
import { useContext, useEffect, useState, } from "react";
import { Text, View, FlatList, SafeAreaView, FlatListProps } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header/Header";
import Contact from "../../components/contact/Contact";
import { AuthContex } from "../../context/userContext";
import { ApplicationState } from "../../store";
import { Contact as contact, ContactsTypes } from "../../store/ducks/contacts/types";
import { MessagesTypes } from "../../store/ducks/messages/types";
import style from "./style";


type RenderContactsProps = {
    item: contact
}

export default function Home(){
    const navigate = useLinkTo()
    const dispatch = useDispatch()
    const State = useSelector(state => state) as ApplicationState
    const { user, VerifyToken } = useContext(AuthContex)

    useEffect(() => {
        (async () => {
            const response = await VerifyToken()
            if (response.status != 200){
                navigate("/signin")
            } else {
                dispatch({ type: ContactsTypes.LOAD_REQUEST })
                dispatch({ type: MessagesTypes.LOAD_REQUEST})
                //socket.emit("whoami", response.name)
            }
        })()
    }, [])

    console.log(State)

    const renderContacts = ({ item }: RenderContactsProps) => {
        return(
            <Contact contact={item}/>
        )
    }
    
    return(
        <View style={style.content}>
            <Header/>
            <SafeAreaView style={style.contacts}>
                {
                    State.contacts.search[0] ?
                        <FlatList
                            data={State.contacts.search}
                            renderItem={renderContacts}
                            keyExtractor={contact => contact.id}
                        />
                    :
                        <></>
                }
            </SafeAreaView>
        </View>
    )
}