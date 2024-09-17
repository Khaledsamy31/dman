import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateStatusAction } from '../../Redux/actions/activeStatusAction';
import notify from '../notification-hook';

const IsActiveHook = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);
    const [status, setStatus] = useState(() => {
        // استرجاع الحالة من LocalStorage إذا كانت موجودة
        const savedStatus =  localStorage.getItem('status');
        return savedStatus ? JSON.parse(savedStatus) : false;
    });
    
    // عند الضغط على زر "تغيير الحالة"
    const onSubmit = async () => {
        setLoading(true);
        await dispatch(updateStatusAction());
        setLoading(false);
       
    };
    
    const res = useSelector(state => state.activeStatusReducer.activeStatus);

    // تحديث حالة الاتصال بناءً على الاستجابة من الباك إند
    useEffect(() => {
        try{
            if (res && res.data && res.data.data.is_active !== undefined) {
          
                setStatus(res.data.data.is_active); // تحديث حالة النشاط
                localStorage.setItem('status', JSON.stringify(res.data.data.is_active)); // تخزين الحالة في LocalStorage

            }
        }catch(e){ }
    }, [res]);

    // عند انتهاء تحميل البيانات، يظهر إشعار بالتغيير
    useEffect(() => {
        if (loading === false && res) {
            try {
                if (status) {
                    setIsPress(true);
                    notify("تم تغيير الحالة إلى متصل", "success");
                    setTimeout(() => {
                        
                        window.location.reload()
                    }, 1000);
                } else {
                    setIsPress(false);
                    notify("غير متصل", "success");
                    setTimeout(() => {
                        
                        window.location.reload()
                    }, 1000);
                }
            } catch (e) {
                console.error(e);
            }
            setLoading(true);
        }
    }, [loading, status]);

    return [status, onSubmit];
};

export default IsActiveHook;
