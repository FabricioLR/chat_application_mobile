import { call, put } from "@redux-saga/core/effects";
import api from "../../../context/api";
import storeData from "../../../context/storeData";
import { loadFailure, loadSuccess, addRequest, addSuccess, addFailure} from "./actions";
import { Contact, Payload } from "./types"

type ResponseData = {
    data: {
        contacts: Contact[],
        contact: Contact
    }
}

async function getContacts(){
    return await api.get("/GetContacts", {
        headers: {
            token: await storeData.Get({ name: "token"})
        }
    })
}

async function addContact(payload: Pick<Payload, "name">){
    return await api.post("/AddContact", {
        name: payload.name,
    }, {
        headers: {
            token: await storeData.Get({ name: "token"})
        }
    })
}

export function* GetContacts(){
    try {
        const response: ResponseData = yield call(getContacts)

        yield put(loadSuccess(response.data.contacts))
    } catch (error: any) {
        yield put(loadFailure())
    }
}

export function* AddContact({ payload }: ReturnType<typeof addRequest>){
    const { name, setLoad, setError } = payload as any

    try {
        const response: Omit<ResponseData, ""> = yield call(addContact, { name })

        setError("Success")

        setLoad("Add")

        yield put(addSuccess(response.data.contact))
    } catch (error: any) {
        setLoad("Add")
        setError(error.response.data.error)
        yield put(addFailure())
    }
}