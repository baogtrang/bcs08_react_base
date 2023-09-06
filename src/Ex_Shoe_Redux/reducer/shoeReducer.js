import { shoeArr } from "../data";

//rxreducer

const initialState = {
    shoeArr: shoeArr,
    cart: [],
    detail: {},
}

export let shoeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        default:
            return state;
    }
};
