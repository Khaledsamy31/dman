import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './IncomingOrdersPage.css';
import { profileAction } from '../Redux/actions/profileAction';
import { useDispatch, useSelector } from 'react-redux';
import IsActiveHook from '../hook/inCommingOrders/status-hook';
import CurrentOrderHook from '../hook/inCommingOrders/current-order-hook';
import ChangeOrderStatus from '../hook/inCommingOrders/change-order-status';
import notify from '../hook/notification-hook';

const IncomingOrdersPage = () => {
  const [status, onSubmit] = IsActiveHook(); // استخدام الـ Hook لإدارة حالة "متصل" أو "غير متصل"
  const [orderID, custName, custAddress, custPhone, custlat, custlng, storeName, orderAmount, res, orderData] = CurrentOrderHook();

  const [orderId, setOrderID] = useState("");
  const [cancelOrderId, setCancelOrderId] = useState("");

  const [setDelivered, setCanceled, onSubmitDelivered, onSubmitCanceled, loadingDelivered, loadingCanceled] = ChangeOrderStatus(orderId, cancelOrderId);

  const dispatch = useDispatch();
  const [orders, setOrders] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const getProfile = async () => {
      try {
        setDataLoading(true);
        await dispatch(profileAction());
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      } finally {
        setDataLoading(false);
      }
    };

    getProfile();
  }, [dispatch]);

  const userProfile = useSelector((state) => state.profileReducer.userProfile);

  useEffect(() => {
    if (res && res.data && res.data.data) {
      setOrders(res.data.data);
    }
  }, [res]);

  const toggleOnlineStatus = () => {
    onSubmit();
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const handleCall = (phone) => {
    window.open(`tel:${phone}`, '_blank');
  };

  const handleDirections = (custlat, custlng) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${custlat},${custlng}`;
    window.open(url, '_blank');
  };

  const handleOrderDetails = (id) => {
    navigate(`/order-details/${id}`);
  };

  useEffect(() => {
    if (orderId) {
      onSubmitDelivered();
    }
  }, [orderId]);

  const handleDeliveredOrder = (orderId) => {
    setOrderID(orderId);
    setDelivered("delivered");
  };

  useEffect(() => {
    if (cancelOrderId) {
      onSubmitCanceled();
    }
  }, [cancelOrderId]);

  const handleCanceledOrder = (cancelOrderId) => {
    setCancelOrderId(cancelOrderId);
    setCanceled("canceled");
  };

  return (
    <div className="orders-container">
      <div className="header">
        <div className="status-toggle">
          <button onClick={toggleOnlineStatus} className={status ? 'online' : 'offline'}>
            {status ? 'متصل' : 'غير متصل'}
          </button>
        </div>
        <div className="user-profile">
          {userProfile && userProfile.data && userProfile.data.data && userProfile.data.data.f_name ? (
            <h2>welcome {`${userProfile.data.data.f_name}`}!</h2>
          ) : (
            ""
          )}
        </div>
        <button onClick={handleLogout} className="logout-button">
          تسجيل خروج
        </button>
      </div>

      <h1>الطلبات الحالية</h1>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div key={order.id} className="order-card">
            <h2>Order Id: {`#${order.id}`}</h2>
            <p>Customer Name : {order.delivery_address.contact_person_name}</p>
            <p>Address: {order.delivery_address.address}</p>
            <p style={{display:"inline-block"}}>Phone Number : {order.delivery_address.contact_person_number}</p>
            {" "}<button onClick={() => handleCall(order.delivery_address.contact_person_number)}>📞 اتصال</button>

            <p>Store Name : {order.store.name}</p>
            <p>Total Price : {`${order.order_amount} ج.م`}</p>
            <div className="order-actions">
              <button onClick={() => handleOrderDetails(order.id)}>تفاصيل الطلب</button>
              <button onClick={() => handleDirections(order.delivery_address.latitude, order.delivery_address.longitude)}>
                الاتجاهات
              </button>
              <button className="delivered-button" onClick={() => handleDeliveredOrder(order.id)}>تم التوصيل</button>
              <button className="cancel-button" onClick={() => handleCanceledOrder(order.id)}>إلغاء الأوردر</button>
            </div>
          </div>
        ))
      ) : (
        <p>لا توجد طلبات حالياً.</p>
      )}
    </div>
  );
};

export default IncomingOrdersPage;
