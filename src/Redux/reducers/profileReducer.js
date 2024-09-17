import { GET_PROFILE_USER, LOGIN_USER } from "../types"


const initial = {
    //createUser is array [] cuz date is obj of array
    userProfile: [],

}
const profileReducer = (state=initial,action)=>{

    switch(action.type){
        // on action GET_ALL_CATEGORY.. get & keep state & category array that carray data and turn loading to false

            case GET_PROFILE_USER:
                return{
                    ...state,
                    userProfile: action.payload
                }

            default:
                return state
    }

}

export default profileReducer