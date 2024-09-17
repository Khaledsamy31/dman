
import { customHookUpdateData } from "../../hooks/customHookUpdateData"
import { GET_PROFILE_USER, LOGIN_USER, ORDER_STATUS } from "../types"

// to login new user
export const orderStatusAction = (body)=> async(dispatch)=>{
    try{

        const response = await customHookUpdateData(`/v1/delivery-man/update-order-status`,body)
        console.log(response,"this is change order status")
        dispatch({
                type: ORDER_STATUS,
                payload:  response,
            })
    }catch(e){
        dispatch({
            type: ORDER_STATUS,
            payload: e.response,
        })

    }
}
