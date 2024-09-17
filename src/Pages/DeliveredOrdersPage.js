// src/pages/DeliveredOrdersPage.js
import React from 'react';
import './DeliveredOrdersPage.css';

// مثال على بيانات الطلبات التي تم توصيلها
const deliveredOrders = [
  { id: '1', customerName: 'علي', phone: '1234567890', address: 'عنوان 1', products: [{ name: 'منتج 1', price: 50 }, { name: 'منتج 2', price: 30 }], total: 80 },
  { id: '2', customerName: 'سارة', phone: '0987654321', address: 'عنوان 2', products: [{ name: 'منتج 3', price: 70 }], total: 70 }
  // أضف المزيد من الطلبات التي تم توصيلها هنا
];

const DeliveredOrdersPage = () => {
  return (
    <div className="delivered-orders-container">
      <h1>الطلبات التي تم توصيلها</h1>
      <table className="delivered-orders-table">
        <thead>
          <tr>
            <th className="order-id-header">رقم الطلب</th>
            <th>اسم العميل</th>
            <th>رقم التليفون</th>
            <th>العنوان</th>
            <th>تفاصيل المنتجات</th>
            <th>السعر الإجمالي</th>
          </tr>
        </thead>
        <tbody>
          {deliveredOrders.map(order => (
            <tr key={order.id}>
              <td className="order-id" data-label="رقم الطلب">{order.id}</td>
              <td data-label="اسم العميل">{order.customerName}</td>
              <td data-label="رقم التليفون">{order.phone}</td>
              <td data-label="العنوان">{order.address}</td>
              <td data-label="تفاصيل المنتجات">
                <ul>
                  {order.products.map((product, index) => (
                    <li key={index}>{product.name} - {product.price} دينار</li>
                  ))}
                </ul>
              </td>
              <td data-label="السعر الإجمالي">{order.total} دينار</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeliveredOrdersPage;
