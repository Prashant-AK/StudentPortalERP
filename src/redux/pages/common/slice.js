import { createSlice } from '@reduxjs/toolkit';
import { commonThunk } from './thunk';

export const initialState = {
  loading: false,
  error: {},
  data: {},
  courseList: [],
  semesterList: [],
  classList: [],
  subjectList: [],
};

export const commonSlice = createSlice({
  name: 'commonState',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /**
       * Faculty start
       */
      .addCase(commonThunk.getSemester.pending, (state) => ({
        ...state,
        loading: true,
        semesterList: [],
      }))
      .addCase(commonThunk.getSemester.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        semesterList: payload,
      }))
      .addCase(commonThunk.getSemester.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))
      .addCase(commonThunk.getClass.pending, (state) => ({
        ...state,
        loading: true,
        classList: [],
      }))
      .addCase(commonThunk.getClass.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        classList: payload,
      }))
      .addCase(commonThunk.getClass.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))
      .addCase(commonThunk.getCourses.pending, (state) => ({
        ...state,
        loading: true,
        courseList: [],
      }))
      .addCase(commonThunk.getCourses.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        courseList: payload,
      }))
      .addCase(commonThunk.getCourses.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
        data: {},
      }))
      .addCase(commonThunk.getSubject.pending, (state) => ({
        ...state,
        loading: true,
        subjectList: [],
      }))
      .addCase(commonThunk.getSubject.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        subjectList: payload,
      }))
      .addCase(commonThunk.getSubject.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
        data: {},
      }));
  },
});

export const {
  reducer: commonReducer,
  name: commonSliceKey,
  actions: commonSliceAction,
} = commonSlice;
