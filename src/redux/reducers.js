import { combineReducers } from '@reduxjs/toolkit';
import { adminReducer, loginReducer } from './pages';

const createRootReducer = (injectedReducers = {}) =>
  combineReducers({
    ...injectedReducers,
    loginState: loginReducer, //login reducer slice
    adminState: adminReducer,
  });

export { createRootReducer };
