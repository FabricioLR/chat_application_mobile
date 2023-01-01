import { View, Image, Text } from "react-native";
import style from "./style";
import Icons from "react-native-vector-icons/Ionicons"
import ProfileImage from "../../../images/profile.png"
import { useContext } from "react";
import { AuthContex } from "../../context/userContext";

export default function Header(){
    const { user } = useContext(AuthContex)

    return(
        <View style={style.header}>
            <View style={style.logo}>
            <Image style={style.logoImage} source={{ uri: "" }}/>
            </View>
            <View style={style.user}>
                <View>
                    <Icons name="search-sharp" size={25}/>
                </View>
                <View style={style.profile}>
                    <Image style={style.image} source={{ uri: user?.profile_image == "" ? ProfileImage : user?.profile_image }}/>
                </View>
            </View>
        </View>
    )
}