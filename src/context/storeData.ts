import AsyncStorage from '@react-native-async-storage/async-storage'

type Data = {
    name: string
    value: string
}

class StoreData{
    async Set(data: Data){
        await AsyncStorage.setItem(data.name, data.value)
    }
    async Get(data: Pick<Data, "name">){
        return await AsyncStorage.getItem(data.name)
    }
    async Remove(data: Pick<Data, "name">){
        await AsyncStorage.removeItem(data.name)
    }
}

export default new StoreData()
