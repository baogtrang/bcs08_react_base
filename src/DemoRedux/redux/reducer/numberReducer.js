// Reducer chứa logic để update dữ liệu của State.  
// Reducer is a pure function that describes how the state of the application should change in response to action. 
// Reducers take in the current state and the action as argument and return a new state.
let initialState = {
    soLuong: 1000,

}

// 1 reducer xử lý 1 nhiệm vu. 1 nhiệm vụ có thể có nhiều tính năng. 
// Dùng TYPE để phân biệt các tính năng 
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