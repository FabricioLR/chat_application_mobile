import { call, put } from "@redux-saga/core/effects";
import api from "../../../context/api";
import storeData from "../../../context/storeData";
import { loadFailure, loadSuccess, addRequest, addSuccess, addFailure, updateMessage as updMessage} from "./actions";
import { Payload, Message } from "./types"

type ResponseData = {
    data: {
        messages: Message[]
        message: Message
    }
    
}

async function getMessages(){
    return await api.get("/GetMessages", {
        headers: {
            token: await storeData.Get({ name: "token"})
        }
    })
}

async function addMessage(payload: Pick<Payload, "contactId"|"message">){
    return await api.post("/SaveMessage", {
        contactId: payload.contactId,
        message: payload.message,
    }, {
        headers: {
            token: await storeData.Get({ name: "token"})
        }
    })
}

async function updateMessage(payload: Pick<Payload, "contactId">){
    return await api.post("/UpdateMessageStatus", {
        contactId: payload.contactId
    }, {
        headers: {
            token: await storeData.Get({ name: "token"})
        }
    })
}

export function* GetMessages(){
    try {
        const response: ResponseData = yield call(getMessages)

        yield put(loadSuccess(response.data.messages))
    } catch (error: any) {
        yield put(loadFailure())
    }
}

export function* AddMessage({ payload }: ReturnType<typeof addRequest>){
    const { contactId, message } = payload as any

    try {
        const response: ResponseData = yield call(addMessage, { contactId, message })

        yield put(addSuccess(response.data.message))
    } catch (error: any) {
        yield put(addFailure())
    }
}

export function* UpdateMessage({ payload }: ReturnType<typeof updMessage>){
    const { contactId } = payload as any

    try {
        yield call(updateMessage, { contactId })
    } catch (error: any) {
        yield put(addFailure())
    }
}