import baseUrl from "../API/baseURL";

//this is custom hook to fetch data
//we use 2 paramters: firstone url secOne params to send params like page number.. user id...

const customHookGetData = async(url,params)=>{


    const res = await baseUrl.get(url,params)

    return res.data
}



const customHookGetDataToken = async(url,params)=>{

   

    //to get token
    const config = {
        headers: {
            'Authorization': localStorage.getItem('token'),
            'lat': JSON.parse(localStorage.getItem('Latitude')),
            'lng': JSON.parse(localStorage.getItem('Longitude')),
        }
      };
    
    //notice inster data accept to add 3 params url&params&confing.. but get data not accept that.. just accept 2 params
    const res = await baseUrl.get(url,config)

    return res
}

export {customHookGetData, customHookGetDataToken}