let initialState = {
    soLuong: 1,

}

export let numberReducer = (state=initialState, action) => {
    switch(action.type){
        // logic dùng để thay đổi data của state tại đây
        case "TANG" : {
            state.soLuong++;
            return {...state}
        }
        case "GIAM" : {
            state.soLuong = state.soLuong - action.payload;
            return {...state}
        }

        default: return state;
    }

}
// mapStateToProps, mapDispatchToProps