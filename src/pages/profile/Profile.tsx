import { useContext, useEffect, useState } from "react";
import { Image, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView } from "react-native";
import { AuthContex } from "../../context/userContext";
import ProfileImage from "../../../images/profile.png";
import style from "./style";
import { useNavigation } from "@react-navigation/native";
import { ContactsTypes } from "../../store/ducks/contacts/types";
import { useDispatch } from "react-redux";
import usePickImage from "../../components/pickImage/usePickImage";
import { MessagesTypes } from "../../store/ducks/messages/types";
import socket from "../../context/socket";

export default function Profile(){
    const [ uri, setUri ] = useState("")
    const [ imageUri, setImageUri ] = useState("")
    const { user, SignOut, ChangeProfileImage } = useContext(AuthContex)
    const [name, setName] = useState("")
    const [load, setLoad] = useState("Add")
    const [error, setError] = useState("")
    const [imageError, setImageError] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigation() as any

    useEffect(() => {
        if (user?.profile_image) setUri(user!.profile_image)
    }, [user])

    function add(){
        setError("")
        if (name !== ""){
            setLoad("Adding...")
            dispatch({ type: ContactsTypes.ADD_REQUEST, payload: { name, setLoad, setError }})
            setName("")
        } else {
            setError("credentials cant be empty")
        }
    }

    async function pickImage(){
        const uri = await usePickImage() as string
        setImageUri(uri)
    }

    async function signOut(){
        dispatch({ type: ContactsTypes.REMOVE_ALL })
        dispatch({ type: MessagesTypes.REMOVE_ALL })
        socket.disconnect()
        await SignOut()
        navigate.push("signin")
    }

    return(
        <ScrollView>
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
                <View style={style.changeImageForm}>
                <Text style={style.formTitle}>Change Image</Text>
                    <TouchableOpacity style={style.changeImageFormFile} onPress={() => pickImage()}>
                        <Text>{imageUri != "" ? "Selected" : "Select an Image"}</Text>
                    </TouchableOpacity>
                    <View style={style.error}>
                        <Text style={style.textError}>{imageError}</Text>
                    </View>
                    <TouchableOpacity style={style.changeImageFormButton} onPress={() => {setImageError("");ChangeProfileImage({ uri: imageUri, setError: setImageError });setImageUri("")}}>
                        <Text>Save</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.buttonLocal}>
                    <TouchableOpacity style={style.signOut} onPress={signOut}>
                        <Text>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}