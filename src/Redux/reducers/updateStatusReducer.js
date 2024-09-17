import { GET_PROFILE_USER, LOGIN_USER, ORDER_STATUS, UPDATE_ACTIVE_STATUS } from "../types"


const initial = {
    //createUser is array [] cuz date is obj of array
    orderStatus: [],

}
const changeOrderStatusReducer = (state=initial,action)=>{

    switch(action.type){
        // on action GET_ALL_CATEGORY.. get & keep state & category array that carray data and turn loading to false

            case ORDER_STATUS:
                return{
                    ...state,
                    orderStatus: action.payload
                }

            default:
                return state
    }

}

export default changeOrderStatusReducer 