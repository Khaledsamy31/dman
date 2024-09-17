// rootReducer.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import updateStatusReducer from './updateStatusReducer';
import inCommingOrdersReducer from './inCommingOrdersReducer';
import getOrderReducer from './orderDetailsReducer';
import changeOrderStatusReducer from './updateStatusReducer';
import activeStatusReducer from './activeStatusReducer';

// استيراد الـ reducers الفردية هنا

const rootReducer = combineReducers({
  // إضافة الـ reducers الفردية هنا

  authReducer: authReducer,
  profileReducer: profileReducer,
  activeStatusReducer: activeStatusReducer,
  inCommingOrdersReducer: inCommingOrdersReducer,
  getOrderReducer: getOrderReducer,
  changeOrderStatusReducer: changeOrderStatusReducer
});

export default rootReducer;
