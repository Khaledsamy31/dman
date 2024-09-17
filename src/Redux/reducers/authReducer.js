import { LOGIN_USER } from "../types"


const initial = {
    //createUser is array [] cuz date is obj of array
    loginUser: [],

}
const authReducer = (state=initial,action)=>{

    switch(action.type){
        // on action GET_ALL_CATEGORY.. get & keep state & category array that carray data and turn loading to false

            case LOGIN_USER:
                return{
                    ...state,
                    loginUser: action.payload
                }

            default:
                return state
    }

}

export default authReducer