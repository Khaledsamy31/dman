import { customHookGetDataToken } from "../../hooks/customHookGetData"
import { customHookInsertData } from "../../hooks/customHookInsertData"
import { GET_CURRENT_ORDER, GET_PROFILE_USER, LOGIN_USER } from "../types"

// to login new user
export const inCommingOrdersAction = ()=> async(dispatch)=>{
    try{

        const response = await customHookGetDataToken(`/v1/delivery-man/current-orders`)
        console.log(response,"this is profile")
        dispatch({
                type: GET_CURRENT_ORDER,
                payload:  response,
                loading: true
            })
    }catch(e){
        dispatch({
            type: GET_CURRENT_ORDER,
            payload: e.response,
        })

    }
}
