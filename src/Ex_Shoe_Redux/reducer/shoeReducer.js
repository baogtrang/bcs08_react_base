//rxreducer
import { shoeArr } from "../data";
import { ADD_TO_CART, VIEW_DETAIL } from "../constant/shoeConstant";

// initialState object in
const initialState = {
    shoeArr: shoeArr,
    cart: [],
    detail: shoeArr[0],
}

export let shoeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case VIEW_DETAIL : {
            state.detail = payload;
            return {...state};
        }
        case ADD_TO_CART : {
            
        }

    default:
        return state;
    }
};
