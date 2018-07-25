var initialState = {
    status : false
}
var myReducer = (state = initialState, action)=>{
    if(action.type ==='SHOW_TABLE'){
        state.status = !state.status;
        return state;
    }
}
export default myReducer;