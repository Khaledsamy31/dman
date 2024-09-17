// src/pages/LoginPage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import LoginHook from '../hook/auth/login-hook';

const LoginPage = () => {
  const [phone,password,onChangePhone,onChangePassword,loading,onSubmit, isPress] = LoginHook()
  const navigate = useNavigate();


useEffect(() => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      localStorage.setItem("Latitude", lat)
      localStorage.setItem("Longitude", lng)
    },
    (error) => {
      console.error('Error getting location:', error);
    }
  );
}, [])

  
  const handleLogin = () => {
    // هنا يمكنك إضافة منطق تسجيل الدخول الفعلي
    navigate('/incoming-orders'); // التوجيه إلى صفحة الطلبات الواردة بعد تسجيل الدخول
  };

  return (
    <div className="login-container">
      <h1>تسجيل الدخول</h1>
      <input
        type="text"
        placeholder=" ادخل رقم الهاتف"
        value={phone}
        onChange={onChangePhone}
      />
      <input
        type="password"
        placeholder="كلمة المرور"
        value={password}
        onChange={onChangePassword}
      />
      <button onClick={onSubmit}>تسجيل الدخول</button>
    </div>
  );
};

export default LoginPage;
