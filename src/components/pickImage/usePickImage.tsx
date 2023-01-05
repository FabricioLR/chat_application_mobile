import * as ImagePicker from "expo-image-picker"

const usePickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (permission.granted == false){
        alert("permission deined")
        return
    }

    const result = await ImagePicker.launchImageLibraryAsync()

    console.log(result)

    if (!result.canceled){
        return result.uri
    }
}

export default usePickImage