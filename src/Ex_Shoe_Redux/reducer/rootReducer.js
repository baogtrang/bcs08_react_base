import { combineReducers } from "redux";
import { shoeReducer } from "./shoeReducer";

export let rootReducer = combineReducers({
    shoeReducer: shoeReducer
});