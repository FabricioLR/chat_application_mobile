import { useEffect, useState } from "react";
import { Keyboard, KeyboardEvent } from "react-native";

const usekeyboard = () => {
    const [keyboardHeight, setKeyboardHeight] = useState(0);

    useEffect(() => {
        function onKeyboardDidShow(e: KeyboardEvent) {
            setKeyboardHeight(e.endCoordinates.height)
        }

        function onKeyboardDidHide() {
            setKeyboardHeight(0);
        }

        const showSubscription = Keyboard.addListener('keyboardDidShow', onKeyboardDidShow)
        const hideSubscription = Keyboard.addListener('keyboardDidHide', onKeyboardDidHide)

        return () => {
            showSubscription.remove()
            hideSubscription.remove()
        }
    }, [])

    return keyboardHeight
}

export default usekeyboard