import React, { useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const PrivateRoutes = () => {
  const { isAuthenticated, user } = useSelector((state) => state.loginState);

  // console.log('isAuth', isAuthenticated);

  // let auth = { token: true };
  return true ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
