import { GET_CURRENT_ORDER, GET_ORDER, GET_ORDER_PRODUCTS, GET_PROFILE_USER, LOGIN_USER } from "../types"


const initial = {
    //createUser is array [] cuz date is obj of array
    getOrder: [],
    getOrderProducts: [],

}
const getOrderReducer = (state=initial,action)=>{

    switch(action.type){
        // on action GET_ALL_CATEGORY.. get & keep state & category array that carray data and turn loading to false

            case GET_ORDER:
                return{
                    ...state,
                    getOrder: action.payload
                }
            case GET_ORDER_PRODUCTS:
                return{
                    ...state,
                    getOrderProducts: action.payload
                }

            default:
                return state
    }

}

export default getOrderReducer