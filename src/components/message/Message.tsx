import { useContext } from "react"
import { Text, View } from "react-native"
import { AuthContex } from "../../context/userContext"
import { Message as message } from "../../store/ducks/messages/types"
import style from "./style"

type MessageProps = {
    message: message
}

export default function Message(props: MessageProps){
    const { user } = useContext(AuthContex)

    return(
        <View style={user?.id == props.message.from.id ? style.owner : style.other}>
            <Text style={style.message}>{props.message.message}</Text>
        </View>
    )
}