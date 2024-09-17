import baseUrl from "../API/baseURL";

//this is custom hook to post or insert data
//we use 2 paramters: firstone url secOne params to send params like page number.. user id...

//this to send data to database with images
const customHookInsertDataWithImage = async(url,params)=>{
    // to send images to database we should do this form (confing)
    const confing = {
        headers:{
            "Content-Type":"multipart/form-data",
            "Content-Length":"<calculated when request is sent>",
            "Host":"<calculated when request is sent>",
            "lat":"{{lat}}",
            "lng":"{{lng}}",
            //to send token to check if user is admin.. allow for him to add products.. categories..
             Authorization: `Bearer ${localStorage.getItem("token")}`}
                }

    // this to send data to database and here we put the confing as params
    const res = await baseUrl.post(url,params,confing)
    
    return res;
}


// this to send data to database without images
const customHookInsertData = async(url,params)=>{

 //to send token to check if user is admin.. allow for him to add products.. categories..
 const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'lat': JSON.parse(localStorage.getItem('Latitude')),
      'lng': JSON.parse(localStorage.getItem('Longitude')),
    }
  };


    const res = await baseUrl.post(url,params, config)

 

    return res;
}

export  {customHookInsertData, customHookInsertDataWithImage}