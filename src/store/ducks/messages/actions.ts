import { action } from "typesafe-actions";
import { Message, MessagesTypes, Payload } from "./types"

export const removeAll = () => action(MessagesTypes.REMOVE_ALL)

export const loadRequest = () => action(MessagesTypes.LOAD_REQUEST)
export const loadSuccess = (data: Message[]) => action(MessagesTypes.LOAD_SUCCESS, { data })
export const loadFailure = () => action(MessagesTypes.LOAD_FAILURE)

export const addRequest = (payload: Omit<Payload, "already">) => action(MessagesTypes.ADD_REQUEST, { payload })
export const addSuccess = (data: Message) => action(MessagesTypes.ADD_SUCCESS, { data })
export const addFailure = () => action(MessagesTypes.ADD_FAILURE)

export const filterRequest = (payload: Omit<Payload, "message"|"already">) => action(MessagesTypes.FILTER_REQUEST, { payload })

export const messageRequest = (payload: Pick<Payload, "message"|"already">) => action(MessagesTypes.MESSAGE_REQUEST, { payload })

export const updateMessage = (payload: Pick<Payload, "contactId">) => action(MessagesTypes.UPDATE_MESSAGE, { payload })

export const updateMessageFront = (payload: Pick<Payload, "contactId">) => action(MessagesTypes.UPDATE_MESSAGE_FRONT, { payload })