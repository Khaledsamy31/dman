import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './OrderDetailsPage.css';  // استيراد ملف التنسيقات
import CurrentOrderHook from '../hook/inCommingOrders/current-order-hook';
import GetOrderHook from '../hook/inCommingOrders/get-order-hook';

const OrderDetailsPage = () => {

  const { id } = useParams(); // استخراج معرف الطلب من الرابط

  const [totalPrice, custName, custAddress, custPhone, custlat, custlng, storeName, orderID, orderProducts] = GetOrderHook(id);

  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (orderProducts && orderProducts.length > 0) {
      // تجهيز بيانات المنتجات بناءً على `orderProducts`
      const items = orderProducts.map(product => ({
        name: product.item_details.name, // استخراج اسم المنتج
        price: product.item_details.price // استخراج سعر المنتج
      }));

      const fetchedOrder = {
        id: String(orderID), // تأكد أن المعرف هنا هو نص للمقارنة مع id
        customerName: custName,
        address: custAddress,
        phone: custPhone,
        store: storeName,
        items: items, // استخدام المنتجات المجهزة هنا
        totalPrice: totalPrice
      };

      if (id === String(orderID)) {
        setOrder(fetchedOrder);
      }
    }
  }, [id, orderID, orderProducts]); // إضافة orderProducts إلى قائمة التبعية

  if (!order) return <div>جارٍ تحميل تفاصيل الطلب...</div>;

  return (
    <div className="order-details-container" style={{direction:"rtl"}}>
      <h1 className="order-title">تفاصيل الطلب</h1>

      {/* معلومات العميل */}
      <div className="order-section">
        <h2 className="section-title">معلومات العميل</h2>
        <p><strong>رقم الطلب:</strong> {order.id}</p>
        <p><strong>اسم العميل:</strong> {order.customerName}</p>
        <p><strong>العنوان:</strong> {order.address}</p>
        <p><strong>رقم الهاتف:</strong> {order.phone}</p>
        <p><strong>المتجر:</strong> {order.store}</p>
      </div>

      {/* تفاصيل المنتجات */}
      <div className="order-section">
        <h2 className="section-title">تفاصيل المنتجات</h2>
        <table className="order-table">
          <thead>
            <tr>
              <th>اسم المنتج</th>
              <th>السعر (ج.م)</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price} ج.م</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* السعر الإجمالي */}
      <div className="order-summary">
        <h3 className="total-price">السعر الصافي بعد الخصم: {order.totalPrice} ج.م</h3>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
