import baseUrl from "../API/baseURL";

//this is custom hook to fetch data
//we use 2 paramters: firstone url secOne params to send params like page number.. user id...

const customHookDeleteData = async(url,params)=>{

     //to send token to check if user is admin.. allow for him to delete products.. categories..
     const confing = {
        //in delete accept only 2 params, so we put params in confing indside headers to send 2 params
        headers:{ Authorization: `Bearer ${localStorage.getItem("token")}`},
        params: params
    }
        
    const res = await baseUrl.delete(url,confing )

    return res.data
}

export default customHookDeleteData