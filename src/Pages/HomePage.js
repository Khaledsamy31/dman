// src/pages/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // قم بإنشاء ملف CSS لتنسيق الصفحة

const HomePage = () => {
  const navigate = useNavigate();

  const handleDeliveryClick = () => {
    navigate('/login/dman');
  };

  const handleStoreClick = () => {
    navigate('/store'); // يمكنك تغيير هذا إلى المسار الصحيح لصفحة المتجر
  };

  return (
    <div className="home-container">
      <h1>الصفحة الرئيسية</h1>
      <div className="button-container">
        <button onClick={handleDeliveryClick} className="button delivery-button">
          Delivery
        </button>
        <button disabled onClick={handleStoreClick} className="button store-button">
          Store
        </button>
      </div>
    </div>
  );
};

export default HomePage;
