import { combineReducers } from '@reduxjs/toolkit';
import {
  adminReducer,
  commonReducer,
  facultyReducer,
  loginReducer,
  studentReducer,
} from './pages';

const createRootReducer = (injectedReducers = {}) =>
  combineReducers({
    ...injectedReducers,
    loginState: loginReducer, //login reducer slice
    adminState: adminReducer,
    facultyState: facultyReducer,
    studentState: studentReducer,
    commonState: commonReducer,
  });

export { createRootReducer };
