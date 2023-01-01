import { useContext, useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AuthContex } from "../../../context/userContext";
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import style from "./style";

export default function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false)
    const [load, setLoad] = useState("Sign In")
    const [error, setError] = useState("")
    const { Authenticate } = useContext(AuthContex)

    async function authenticate(){
        setLoad("Signing In...")
        setError("")
        await Authenticate({
            email, password, setError
        })
        setEmail("")
        setPassword("")
        setLoad("Sign In")
    }

    console.log(error)

    return(
        <View style={style.local}>
            <View style={style.form}>
                <Text style={style.title}>Welcome</Text>
                <View style={style.email}>
                    <Icons style={style.leftIcon} name="email" size={15}/>
                    <TextInput textContentType="emailAddress" style={style.inputEmail} placeholder="Email" onChangeText={(value) => setEmail(value)}/>
                </View>
                <View style={style.password}>
                    <Icons style={style.leftIcon} name="lock" size={15}/>
                    <TextInput style={style.inputPassword} secureTextEntry={ show ? false : true } placeholder="Password" onChangeText={(value) => setPassword(value)}/>
                    {
                        show ? 
                            <Icons style={style.RightIcon} name="eye-off" size={15} onPress={() => setShow(false)}/>
                        :
                            <Icons style={style.RightIcon} name="eye" size={15} onPress={() => setShow(true)}/>
                    }
                </View>
                <View style={style.error}>
                    <Text style={style.textError}>{error}</Text>
                </View>
                <TouchableOpacity disabled={load == "Signing In..." ? true : false} onPress={authenticate}>
                    <Text style={style.button}>{load}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}