import { View, Image, Text, TouchableOpacity } from "react-native";
import style from "./style";
import Icons from "react-native-vector-icons/Ionicons"
import ProfileImage from "../../../images/profile.png"
import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../context/userContext";
import { useLinkTo } from "@react-navigation/native";

type HeaderProps = {
    setShow: Function
}
export default function Header(props: HeaderProps){
    const navigate = useLinkTo()
    const { user } = useContext(AuthContex)
    const [ uri, setUri ] = useState("")

    useEffect(() => {
        if (user?.profile_image){
            setUri(user!.profile_image)
        }
    }, [])

    return(
        <View style={style.header}>
            <View style={style.logo}>
                {/* <Image style={style.logoImage} source={{ uri:  }}/> */}
                <Text>Logo</Text>
            </View>
            <View style={style.user}>
                <View>
                    <Icons name="search-sharp" size={25} onPress={() => props.setShow(true)}/>
                </View>
                <TouchableOpacity style={style.profile} onPress={() => navigate("/profile")}>
                    <Image style={style.image} source={uri != "" ? { uri: uri } : ProfileImage} onError={() => setUri(ProfileImage)}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}