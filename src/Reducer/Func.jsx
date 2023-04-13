import { ActionTypes } from "../Const/Const";

const initialState = {
    items: [],
    item: null,
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.AddData:
            return { ...state, items: [...state.items, payload] }

        case ActionTypes.DeleteData:
            let data = [...state.items];
            data.splice(payload, 1);
            return { ...state, items: data }

        case ActionTypes.PrePopulateData:
            let singleData = state.items.find((x)=>{
                return x.id === payload
            })
            return {...state, item: singleData}

        case ActionTypes.UpdateData:
            state.items.map((x,i)=>{
                if(x.id === payload.id){
                    return { ...state, ...state.items[i] =  payload}
                }
            })

        case ActionTypes.SetItemState:
            return { ...state, item: null}

        default:
            return state;

    }
}