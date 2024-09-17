
import { customHookUpdateData } from "../../hooks/customHookUpdateData"
import { GET_PROFILE_USER, LOGIN_USER, UPDATE_ACTIVE_STATUS } from "../types"

// to login new user
export const updateStatusAction = ()=> async(dispatch)=>{
    try{

        const response = await customHookUpdateData(`/v1/delivery-man/update-active-status`)
        console.log(response,"this is status")
        dispatch({
                type: UPDATE_ACTIVE_STATUS,
                payload:  response,
 
            })
    }catch(e){
        dispatch({
            type: UPDATE_ACTIVE_STATUS,
            payload: e.response,
        })

    }
}
