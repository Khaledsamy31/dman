import { customHookGetDataToken } from "../../hooks/customHookGetData"
import { customHookInsertData } from "../../hooks/customHookInsertData"
import { GET_CURRENT_ORDER, GET_ORDER, GET_ORDER_PRODUCTS, GET_PROFILE_USER, LOGIN_USER } from "../types"

// to get one order data
export const getOrderAction = (id)=> async(dispatch)=>{
    try{

        const response = await customHookGetDataToken(`/v1/delivery-man/order?order_id=${id}`)
        console.log(response,"this is order")
        dispatch({
                type: GET_ORDER,
                payload:  response,
                loading: true
            })
    }catch(e){
        dispatch({
            type: GET_ORDER,
            payload: e.response,
        })

    }
}

// to get order products 
export const getOrderProductsAction = (id)=> async(dispatch)=>{
    try{

        const response = await customHookGetDataToken(`/v1/delivery-man/order-details?order_id=${id}`)
        console.log(response,"this is order")
        dispatch({
                type: GET_ORDER_PRODUCTS,
                payload:  response,
                loading: true
            })
    }catch(e){
        dispatch({
            type: GET_ORDER_PRODUCTS,
            payload: e.response,
        })

    }
}
