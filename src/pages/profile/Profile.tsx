import { useContext, useEffect, useState } from "react";
import { Image, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";
import { AuthContex } from "../../context/userContext";
import ProfileImage from "../../../images/profile.png";
import style from "./style";
import { useLinkTo } from "@react-navigation/native";
import { ContactsTypes } from "../../store/ducks/contacts/types";
import { useDispatch } from "react-redux";

export default function Profile(){
    const [ uri, setUri ] = useState("")
    const { user, SignOut } = useContext(AuthContex)
    const [name, setName] = useState("")
    const [load, setLoad] = useState("Add")
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const navigate = useLinkTo()

    useEffect(() => {
        if (user?.profile_image != "") setUri(user!.profile_image)

    }, [])

    function add(){
        if (name !== ""){
            setLoad("Adding...")
            setError("")
            dispatch({ type: ContactsTypes.ADD_REQUEST, payload: { name, setLoad, setError }})
            setName("")
        }
    }

    return(
        <KeyboardAvoidingView style={style.profile} behavior="position">
            <View style={style.imageLocal}>
                <Image style={style.image} source={uri != "" ? { uri: uri } : ProfileImage} onError={() => setUri(ProfileImage)}/>
            </View>
            <View style={style.nameLocal}>
                <Text style={style.name}>{user?.name}</Text>
            </View>
            <View style={style.form}>
                <Text style={style.formTitle}>Add Contact</Text>
                <TextInput value={name} autoCapitalize="none" style={style.formInput} onChangeText={(value) => setName(value)}/>
                <View style={style.error}>
                    <Text style={style.textError}>{error}</Text>
                </View>
                <TouchableOpacity style={style.formButton} disabled={load == "Adding..." ? true : false} onPress={() => add()}>
                    <Text>{load}</Text>
                </TouchableOpacity>
            </View>
            <View style={style.buttonLocal}>
                <TouchableOpacity style={style.signOut} onPress={() => SignOut(navigate)}>
                    <Text>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}