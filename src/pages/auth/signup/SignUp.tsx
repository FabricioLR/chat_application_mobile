import {useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { AuthContex } from "../../../context/userContext";
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import IconsF from "react-native-vector-icons/FontAwesome"
import style from "./style";

export default function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false)
    const [load, setLoad] = useState("Sign Up")
    const [error, setError] = useState("")
    const navigate = useNavigation()
    const {  Register } = useContext(AuthContex)

    async function register(){
        setLoad("Signing Up...")
        setError("")
        await Register({
            name, email, password, setError, navigate
        })
        setEmail("")
        setPassword("")
        setName("")
        setLoad("Sign Up")
    }

    return(
        <View style={style.local}>
            <View style={style.form}>
                <Text style={style.title}>Welcome</Text>
                <View style={style.name}>
                    <View style={style.leftIcon}>
                        <IconsF name="user" size={15}/>
                    </View>
                    <TextInput autoCapitalize='none' value={name} placeholderTextColor={"#00000078"} textContentType="nickname" style={style.inputName} placeholder="Name" onChangeText={(value) => setName(value)}/>
                </View>
                <View style={style.email}>
                    <View style={style.leftIcon}>
                        <Icons name="email" size={15}/>
                    </View>
                    <TextInput autoCapitalize='none' value={email} placeholderTextColor={"#00000078"} textContentType="emailAddress" style={style.inputEmail} placeholder="Email" onChangeText={(value) => setEmail(value)}/>
                </View>
                <View style={style.password}>
                    <View style={style.leftIcon}>
                        <Icons name="lock" size={15}/>
                    </View>
                    <TextInput autoCapitalize='none' value={password} placeholderTextColor={"#00000078"} style={style.inputPassword} secureTextEntry={ show ? false : true } placeholder="Password" onChangeText={(value) => setPassword(value)}/>
                    {
                        show ? 
                            <View style={style.RightIcon}>
                                <Icons name="eye-off" size={15} onPress={() => setShow(false)}/>
                            </View>
                        :
                            <View style={style.RightIcon}>
                                <Icons name="eye" size={15} onPress={() => setShow(true)}/>
                            </View>
                    }
                </View>
                <View style={style.error}>
                    <Text style={style.textError}>{error}</Text>
                </View>
                <TouchableOpacity disabled={load == "Signing Up..." ? true : false} onPress={register}>
                    <Text style={style.button}>{load}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}