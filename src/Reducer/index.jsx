import { combineReducers } from "redux";
import { productReducer } from "./Func";

const rootReducer = combineReducers(
    {
        product: productReducer
    }
);

export default rootReducer;