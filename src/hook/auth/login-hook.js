import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { createNewUserAction, loginUserAction } from '../../Redux/actions/authAction'
import { useNavigate } from 'react-router-dom'
import { profileAction } from '../../Redux/actions/profileAction'
import notify from '../notification-hook'


const LoginHook = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

   const [phone,setPhone]= useState("")
   const [password,setPassword]= useState("")
   const [loading,setLoading]= useState(true)
   const [isPress,setIsPress]= useState(false)



   const onChangePhone = (e)=>{
    setPhone(e.target.value)
   }

   const onChangePassword = (e)=>{
    setPassword(e.target.value)
   }

   const loginData = useSelector(state => state.authReducer.loginUser)
   const onSubmit = async()=>{

    if(phone === ""){
        notify("برجاء ادخال رقم الهاتف","error")
        return;
    }else if(password === ""){
        notify("برجاء ادخال كلمة المرور","error")
        return;
    }
    setIsPress(true)
       setLoading(true)

    await dispatch(loginUserAction({
        phone,
        password
   }))
  
   setLoading(false)
   setIsPress(false)
   }



   useEffect(()=>{
    
    if(loading === false){
       console.log(loginData)
       try{

           if(loginData){
               console.log(loginData)
               if(loginData && loginData.data && loginData.data.data.token){
                   localStorage.setItem("token", loginData.data.data.token)
                   notify("تم تسجيل الدخول بنجاح","success")
                   setTimeout(() => {
                       window.location.href ="/incoming-orders"
                   }, 1500);
               }else{
                   localStorage.removeItem("token")
   
               }
               if(loginData && loginData.data && loginData.data.message === "Incorrect email or password"){
   
                   localStorage.removeItem("token")
                   localStorage.removeItem("user")
                   // notify("الإيميل أو الباسورد غير صحيح","error")
               }
               setLoading(true)
           }
       }catch(e){ }

    }

   },[loading])

   return [phone,password,onChangePhone,onChangePassword,loading,onSubmit, isPress]
}

export default LoginHook