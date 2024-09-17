import { customHookGetDataToken } from "../../hooks/customHookGetData"
import { customHookInsertData } from "../../hooks/customHookInsertData"
import { GET_PROFILE_USER, LOGIN_USER } from "../types"

// to login new user
export const profileAction = ()=> async(dispatch)=>{
    try{

        const response = await customHookGetDataToken(`/v1/delivery-man/profile`)
        console.log(response,"this is profile")
        dispatch({
                type: GET_PROFILE_USER,
                payload:  response,
                loading: true
            })
    }catch(e){
        dispatch({
            type: GET_PROFILE_USER,
            payload: e.response,
        })

    }
}
