import axios from "axios";
import {setUserAction} from "../setUserAction";

export const thunkSetUserAction = () => async (dispatch) =>{
    const user = await axios('http://194-67-121-97.xen.vps.regruhosting.ru:4000/user')
    console.log(user)
    dispatch(setUserAction(user.data))
}