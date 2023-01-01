import { useLinkTo } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header/Header";
import { AuthContex } from "../../context/userContext";
import { ContactsTypes } from "../../store/ducks/contacts/types";
import { MessagesTypes } from "../../store/ducks/messages/types";

export default function Home(){
    const navigate = useLinkTo()
    const dispatch = useDispatch()
    const State = useSelector(state => state)
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

    return(
        <View>
            <Header/>
        </View>
    )
}