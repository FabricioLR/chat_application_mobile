import { createContext, ReactNode, useState } from "react"
import api from "./api"
import storeData from "./storeData"

export type User = {
    name: string
    profile_image: string
    id: string
}

type AuthContextData = {
    user: User | null
    Register: Function
    Authenticate: Function
    SignOut: Function
    ChangeProfileImage: Function
    VerifyToken: Function
    ChangeUserCredentials: Function
}

type AuthProviderProps = {
    children: ReactNode
}

type Props = {
    email: string
    name: string
    password: string
    navigate: any
    token: string
    user: User
    uri: string
    setError: Function
}

export const AuthContex = createContext({} as AuthContextData)

function AuthProvider(props: AuthProviderProps){
    const [ user, setUser ] = useState<User | null>(null)

    async function Register(data: Pick<Props, "navigate"|"setError"|"email"|"password"|"name">){
        try {
            const response = await api.post<Pick<Props, "token"|"user"|"navigate">>("Register", { email: data.email, password: data.password, name: data.name })

            if (response.status == 200){
                setUser({
                    name: response.data.user.name,
                    profile_image: response.data.user.profile_image,
                    id: response.data.user.id,
                })
                data.navigate.navigate("home")
                await storeData.Set({ name: "token", value: response.data.token })
            }
        } catch (error: any) {
            data.setError(error.response.data.error)
        }
    }

    async function Authenticate(data: Pick<Props, "navigate"|"setError"|"email"|"password">){
        try {
            const response = await api.post<Pick<Props, "user"|"token"|"navigate">>("Authenticate", { email: data.email, password: data.password})

            if (response.status == 200){
                setUser({
                    name: response.data.user.name,
                    profile_image: response.data.user.profile_image,
                    id: response.data.user.id,
                })
                data.navigate.navigate("home")
                await storeData.Set({ name: "token", value: response.data.token })
            }
        } catch (error: any) {
            console.log(error.response.data.error)
            data.setError(error.response.data.error)
        }
    }

    async function SignOut(){
        setUser(null)
        await storeData.Remove({ name: "token" })
    }

    async function VerifyToken(){
        try {
            const response = await api.get<Pick<Props, "user">>("AuthenticateByToken", {
                headers: {
                    token: await storeData.Get({ name: "token" })
                }
            })

            if(response.status == 200){
                setUser({
                    name: response.data.user.name,
                    profile_image: response.data.user.profile_image,
                    id: response.data.user.id,
                })
            }
            return { status: response.status, name: response.data.user.name}
        } catch(error) {
            return { status: 400 }
        }
    }

    async function ChangeProfileImage(data: Omit<Props, "token"|"user"|"name"|"navigate"|"email"|"password">){
        /* const filename = data.uri.split('/').pop() as string

        const match = /\.(\w+)$/.exec(filename)
        const type = match ? `image/${match[1]}` : `image`

        console.log(filename, type) */
        const formData = new FormData()
        formData.append("file", { uri: data.uri, type: "image", name: "image"} as any)

        console.log(formData)
        
        try {
            /* const response = await api.post<Pick<Props, "user">>("ChangeUserImage", formData, {
                headers: {
                    token: await storeData.Get({ name: "token" })
                }
            })

            if (response.status == 200){
                setUser({
                    name: response.data.user.name,
                    profile_image: response.data.user.profile_image,
                    id: response.data.user.id,
                })
            } */
        } catch (error: any) {
            console.log(error.response.data.error)
            //alert(error.response.data.message)
        }
    }

    async function ChangeUserCredentials(data: Pick<Props, "name"|"password">){
        try {
            const response = await api.post<Pick<Props, "user">>("ChangeUserCredentials", {
                name: data.name,
                password: data.password
            }, {
                headers: {
                    token: await storeData.Get({ name: "token" })
                }
            })

            if (response.status == 200){
                setUser({
                    name: response.data.user.name,
                    profile_image: response.data.user.profile_image,
                    id: response.data.user.id,
                })
            }
        } catch (error: any) {
            alert(error.response.data.message)
        }
    }

    return (
        <AuthContex.Provider value={{ user, ChangeUserCredentials, Register, Authenticate, SignOut, ChangeProfileImage, VerifyToken }}>
            {props.children}
        </AuthContex.Provider>
    )
}

export default AuthProvider