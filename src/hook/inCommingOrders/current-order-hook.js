import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { createNewUserAction, loginUserAction } from '../../Redux/actions/authAction'
import { useNavigate } from 'react-router-dom'
import { profileAction } from '../../Redux/actions/profileAction'
import notify from '../notification-hook'
import { inCommingOrdersAction } from '../../Redux/actions/inCommingOrdersAction'



const CurrentOrderHook = (id) => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

   const [orderID,setOrderID]= useState("")
   const [custName,setCustName]= useState("")
   const [custAddress,setCustAddress]= useState("")
   const [custPhone,setCustPhone]= useState("")
   const [custlat,setCustlat]= useState("")
   const [custlng,setCustlng]= useState("")
   const [storeName,setStoreName]= useState("")
   const [orderAmount,setOrderAmount]= useState("")
   const [orderData,setOrderData]= useState("")
   const [loading,setLoading]= useState(true)


useEffect(() => {

    const get =  async()=>{
        setLoading(true)
       await dispatch(inCommingOrdersAction())
       setLoading(false)
    }
    get()
}, [])



   const res = useSelector(state => state.inCommingOrdersReducer.currentOrders)




   useEffect(()=>{
    
    if(loading === false){
     
       try{

           if(res){
            console.log(res.data.data, "res1")
               if(res && res.data && res.data.data){
                setOrderID(res.data.data[id])
                setCustName(res.data.contact_person_name)
                setCustAddress(res.data.address)
                setCustPhone(res.data.contact_person_number)
                setCustlat(res.data.latitude)
                setCustlng(res.data.longitude)
                setStoreName(res.data.store.name)
                setOrderAmount(res.data.data.order_amount)
                setOrderData(res.data.data)
               }else{
                  
   
               }
           
           }
       }catch(e){ }

    }

   },[loading])

   return [orderID,custName,custAddress,custPhone,custlat,custlng,storeName,orderAmount,res,orderData]
}

export default CurrentOrderHook