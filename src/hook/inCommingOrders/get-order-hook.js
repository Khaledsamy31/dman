import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { createNewUserAction, loginUserAction } from '../../Redux/actions/authAction'
import { useNavigate } from 'react-router-dom'
import { profileAction } from '../../Redux/actions/profileAction'
import notify from '../notification-hook'
import { inCommingOrdersAction } from '../../Redux/actions/inCommingOrdersAction'
import { getOrderAction, getOrderProductsAction } from '../../Redux/actions/orderDetailsAction'



const GetOrderHook = (id) => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

   const [orderID,setOrderID]= useState("")
   const [totalPrice,setTotalPrice]= useState("")
   const [custName,setCustName]= useState("")
   const [custAddress,setCustAddress]= useState("")
   const [custPhone,setCustPhone]= useState("")
   const [custlat,setCustlat]= useState("")
   const [custlng,setCustlng]= useState("")
   const [storeName,setStoreName]= useState("")
   const [loading,setLoading]= useState(true)
   const [loadingProducts,setLoadingProducts]= useState(true)
   const [orderProducts,setOrderProducts]= useState([])


useEffect(() => {

    const get =  async()=>{
        setLoading(true)
       await dispatch(getOrderAction(id))
       setLoading(false)
    }
    get()
}, [])


useEffect(() => {

    const get =  async()=>{
        setLoadingProducts(true)
       await dispatch(getOrderProductsAction(id))
       setLoadingProducts(false)
    }
    get()
}, [])



   const res = useSelector(state => state.getOrderReducer.getOrder)

   
   


   useEffect(()=>{
    
    if(loading === false){
     
       try{

           if(res){
            console.log(res.data.data.order_amount, "res5")
               if(res && res.data && res.data.data){
                setOrderID(res.data.data.id)
                setTotalPrice(res.data.data.order_amount)
                setCustName(res.data.data.delivery_address.contact_person_name)
                setCustAddress(res.data.data.delivery_address.address)
                setCustPhone(res.data.data.delivery_address.contact_person_number)
                setCustlat(res.data.data.delivery_address.latitude)
                setCustlng(res.data.data.delivery_address.longitude)
                setStoreName(res.data.data.store_name)
 
               }else{
                  
   
               }
           
           }
       }catch(e){ }

    }

   },[loading])

   
   const resOrderProducts = useSelector(state => state.getOrderReducer.getOrderProducts)

   useEffect(()=>{
    
    if(loadingProducts === false){
     console.log(resOrderProducts.data.data,"hello")
       try{

           if(resOrderProducts){

               if(resOrderProducts && resOrderProducts.data && resOrderProducts.data.data){
                setOrderProducts(resOrderProducts.data.data)
               }else{
                  
   
               }
           
           }
       }catch(e){ }

    }

   },[loadingProducts])

   return [totalPrice,custName,custAddress,custPhone,custlat,custlng,storeName,orderID,orderProducts]
}

export default GetOrderHook