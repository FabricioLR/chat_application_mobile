import { useContext, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { AuthContex } from "../../../context/userContext";
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import style from "./style";
import { useLinkTo } from "@react-navigation/native";

export default function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false)
    const [load, setLoad] = useState("Sign In")
    const [error, setError] = useState("")
    const navigate = useLinkTo()
    const { Authenticate } = useContext(AuthContex)

    async function authenticate(){
        setLoad("Signing In...")
        setError("")
        await Authenticate({
            email, password, setError, navigate
        })
        setEmail("")
        setPassword("")
        setLoad("Sign In")
    }

    return(
        <View style={style.local}>
            <View style={style.form}>
                <Text style={style.title}>Welcome</Text>
                <View style={style.email}>
                    <View style={style.leftIcon}>
                        <Icons name="email" size={15}/>
                    </View>
                    <TextInput value={email} placeholderTextColor={"#00000078"} textContentType="emailAddress" style={style.inputEmail} placeholder="Email" onChangeText={(value) => setEmail(value)}/>
                </View>
                <View style={style.password}>
                    <View style={style.leftIcon}>
                        <Icons name="lock" size={15}/>
                    </View>
                    <TextInput value={password} placeholderTextColor={"#00000078"} style={style.inputPassword} secureTextEntry={ show ? false : true } placeholder="Password" onChangeText={(value) => setPassword(value)}/>
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
                <TouchableOpacity disabled={load == "Signing In..." ? true : false} onPress={authenticate}>
                    <Text style={style.button}>{load}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}