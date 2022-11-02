import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from '../../apiUrl';

const config = {
  headers: {
    // "Content-Type": "application/json",
    Authorization: `Bearer `,
  },
};

export const loginThunk = {
  login: createAsyncThunk('login', async (formData) => {
    const { email, password } = formData;
    const { data } = await axios.post(`${BASE_URL}/api/user/login`, {
      user_email: email,
      user_password: password,
    });
    localStorage.setItem('token', data?.data?.token);
    return data?.data;
  }),
  logout: createAsyncThunk('logout', () => {
    localStorage.clear();
  }),
};
