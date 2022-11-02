import { createSlice } from '@reduxjs/toolkit';
import { loginThunk } from './thunk';

export const initialState = {
  loading: false,
  isAuthenticated: false,
  role: '',
  user: {},
  token: '',
  refreshToken: '',
  error: '',
};

export const loginSlice = createSlice({
  name: 'loginState',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.login.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(loginThunk.login.fulfilled, (state, { payload }) => {
        return {
          ...state,
          loading: false,
          token: payload.token,
          user: payload.user,
          isAuthenticated: true,
          // role: payload.role,
        };
      })
      .addCase(loginThunk.login.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))
      .addCase(loginThunk.logout.fulfilled, (state) => {
        return {
          ...state,
          loading: false,
          token: '',
          user: {},
          isAuthenticated: false,
          // role: payload.role,
        };
      });
  },
});

export const {
  reducer: loginReducer,
  name: loginSliceKey,
  actions: loginSliceAction,
} = loginSlice;
