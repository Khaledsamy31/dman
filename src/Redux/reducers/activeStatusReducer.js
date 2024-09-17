import { GET_PROFILE_USER, LOGIN_USER, UPDATE_ACTIVE_STATUS } from "../types"


const initial = {
    //createUser is array [] cuz date is obj of array
    activeStatus: [],

}
const activeStatusReducer = (state=initial,action)=>{

    switch(action.type){
        // on action GET_ALL_CATEGORY.. get & keep state & category array that carray data and turn loading to false

            case UPDATE_ACTIVE_STATUS:
                return{
                    ...state,
                    activeStatus: action.payload
                }

            default:
                return state
    }

}

export default activeStatusReducer