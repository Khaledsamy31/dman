// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import IncomingOrdersPage from './Pages/IncomingOrdersPage';
import AcceptedOrdersPage from './Pages/AcceptedOrdersPage';
import OrderDetailsPage from './Pages/OrderDetailsPage';
import DeliveredOrdersPage from './Pages/DeliveredOrdersPage';
import HomePage from './Pages/HomePage';


const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/login/dman" element={<LoginPage />} />
        {/* <Route path="/store" element={<StorePage />} /> */}
        <Route path="/incoming-orders" element={<IncomingOrdersPage />} />
        <Route path="/accepted-orders" element={<AcceptedOrdersPage />} />
        <Route path="/order-details/:id" element={<OrderDetailsPage />} />
        <Route path="/delivered-orders" element={<DeliveredOrdersPage />} />
      </Routes>
    </Router>
  );
};

export default App;
