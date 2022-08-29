import {initState} from "../initState";

export const userReducer = (state = initState, action) => {
    switch (action.type){
        case "SET_USER": return  action.payload
        default: return state
    }
}