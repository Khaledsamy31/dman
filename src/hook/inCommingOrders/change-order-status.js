import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import notify from '../notification-hook';
import { orderStatusAction } from '../../Redux/actions/orderStatusAction';

const ChangeOrderStatus = (orderId,cancelOrderId) => {
    const dispatch = useDispatch();
    const [loadingDelivered, setLoadingDelivered] = useState(true);
    const [loadingCanceled, setLoadingCanceled] = useState(true);
    const [delivered, setDelivered] = useState("delivered");
    const [canceled, setCanceled] = useState("canceled");
     

    const res = useSelector(state => state.changeOrderStatusReducer.orderStatus);

    // عند الضغط على زر "تغيير الحالة"
    const onSubmitDelivered = async () => {
        setLoadingDelivered(true);
        console.log("sub del1")
        await dispatch(orderStatusAction({
            order_id : orderId,
            status : delivered
        }));
        setLoadingDelivered(false);

    };
    const onSubmitCanceled = async () => {
      try{

        setLoadingCanceled(true);
        await dispatch(orderStatusAction({
            order_id : cancelOrderId,
            status : canceled
        }));
        setLoadingCanceled(false);
    
      }catch(e){ }
    };

    useEffect(() => {
      if(loadingDelivered === false){
        notify("تم توصيل الأوردر بنجاح", "success");
        setTimeout(() => {
            window.location.reload()
        }, 1500);
        return;
      }else{
       
      }
    

    }, [loadingDelivered])
    
    useEffect(() => {
      if(loadingCanceled === false){
        console.log(cancelOrderId,"can")
        notify("تم إلغاء الأوردر", "success");
        // setTimeout(() => {
        //     window.location.reload()
        // }, 1500);
        return;
      }else{
   
      }
    

    }, [loadingCanceled])
    


    return [setDelivered,setCanceled,onSubmitDelivered,onSubmitCanceled,loadingDelivered,loadingCanceled]
};

export default ChangeOrderStatus;
