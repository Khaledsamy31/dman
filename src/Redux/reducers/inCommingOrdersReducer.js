import { GET_CURRENT_ORDER, GET_PROFILE_USER, LOGIN_USER } from "../types"


const initial = {
    //createUser is array [] cuz date is obj of array
    currentOrders: [],

}
const inCommingOrdersReducer = (state=initial,action)=>{

    switch(action.type){
        // on action GET_ALL_CATEGORY.. get & keep state & category array that carray data and turn loading to false

            case GET_CURRENT_ORDER:
                return{
                    ...state,
                    currentOrders: action.payload
                }

            default:
                return state
    }

}

export default inCommingOrdersReducer