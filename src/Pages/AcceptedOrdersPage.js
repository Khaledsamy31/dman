// src/pages/AcceptedOrdersPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AcceptedOrdersPage.css';

const initialAcceptedOrders = [
  { id: '1', customerName: 'علي', storeName: 'مطعم X', lat: 37.7749, lng: -122.4194, delivered: false },
  { id: '2', customerName: 'سارة', storeName: 'مطعم Y', lat: 34.0522, lng: -118.2437, delivered: false }
  // أضف المزيد من الطلبات المقبولة هنا
];

const AcceptedOrdersPage = () => {
  const [orders, setOrders] = useState(initialAcceptedOrders);

  const handleDelivery = (id) => {
    // تحديث حالة التوصيل للطلب
    setOrders(orders.map(order =>
      order.id === id ? { ...order, delivered: true } : order
    ));

    // إزالة الطلب بعد 3 ثوانٍ
    setTimeout(() => {
      setOrders(prevOrders => prevOrders.filter(order => order.id !== id));
    }, 3000);
  };

  return (
    <div className="accepted-orders-container">
      <h1>الطلبات الحالية</h1>
      {orders.map(order => (
        <div key={order.id} className="accepted-order-card">
          <h2>رقم الطلب: {order.id}</h2>
          <p>اسم العميل: {order.customerName}</p>
          <p>اسم المتجر: {order.storeName}</p>
          <div className="button-container">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${order.lat},${order.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`button ${order.delivered ? 'disabled' : ''}`}
              aria-disabled={order.delivered}
            >
              الاتجاهات
            </a>
            <button 
              onClick={() => handleDelivery(order.id)}
              className={`delivery-button ${order.delivered ? 'disabled' : ''}`}
              disabled={order.delivered}
            >
              تم التوصيل
            </button>
          </div>
          <Link to={`/order-details/${order.id}`} className="button">تفاصيل الطلب</Link>
        </div>
      ))}
    </div>
  );
};

export default AcceptedOrdersPage;
