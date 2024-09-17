import { customHookInsertData } from "../../hooks/customHookInsertData"
import { LOGIN_USER } from "../types"

// to login new user
export const loginUserAction = (data)=> async(dispatch)=>{
    try{

        const response = await customHookInsertData(`/v1/auth/delivery-man/login`, data)
       
        dispatch({
                type: LOGIN_USER,
                payload:  response,
                loading: true
            })
    }catch(e){
        dispatch({
            type: LOGIN_USER,
            payload: e.response,
        })

    }
}
