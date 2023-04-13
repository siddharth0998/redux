import { ActionTypes } from "../Const/Const";

export const GetAddData = (payload) => {
    return {
        type: ActionTypes.AddData,
        payload
    }
}

export const GetDeleteData = (payload) => {
    return {
        type: ActionTypes.DeleteData,
        payload
    }
}

export const PrePopulateData = (payload) => {
    return {
        type: ActionTypes.PrePopulateData,
        payload
    }
}

export const GetUpdateData = (payload) => {
    return {
        type: ActionTypes.UpdateData,
        payload
    }
}

export const GetSetItemState = () => {
    return {
        type: ActionTypes.SetItemState,
    }
}