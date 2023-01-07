import { useContext } from "react"
import { Text, View } from "react-native"
import { AuthContex } from "../../context/userContext"
import { Message as message } from "../../store/ducks/messages/types"
import style from "./style"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

type MessageProps = {
    message: message
}

export default function Message(props: MessageProps){
    const { user } = useContext(AuthContex)
    
    return(
        <View style={user?.id == props.message.fromId ? style.owner : style.other}>
            <Text style={style.message}>{props.message.message}</Text>
            {
                user?.id == props.message.fromId ?
                    props.message.viewed ?
                        <View  style={style.viewed}>
                            <Icon name="check-all" size={15}/>
                        </View>
                    :
                        <View style={style.viewed}>
                            <Icon name="check" size={15}/>
                        </View>
                :
                    null
            }
        </View>
    )
}