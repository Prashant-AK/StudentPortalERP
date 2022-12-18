import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { getAccessToken } from '../../../utils/commonUtility';
import { BASE_URL } from '../../apiUrl';

// const accessToken = getAccessToken();
const config = {
  headers: {
    // "Content-Type": "application/json",
    Authorization: `Bearer `,
  },
};

export const commonThunk = {
  /**
   * Common Thunk START
   */

  getSemester: createAsyncThunk('common/SemesterList', async () => {
    //
    const { data } = await axios.get(`${BASE_URL}/api/semester/get-semester`);
    // console.log('getSemester', data);
    return data;
  }),
  getClass: createAsyncThunk('common/classList', async () => {
    //
    const { data } = await axios.get(`${BASE_URL}/api`);
    // console.log('getClass', data);
    return data;
  }),
  getCourses: createAsyncThunk('common/courseList', async () => {
    //
    const { data } = await axios.get(`${BASE_URL}/api/course/get-course`);
    // console.log('getCourses', data);
    return data;
  }),
  getSubject: createAsyncThunk('common/Subject', async () => {
    //
    const { data } = await axios.get(`${BASE_URL}/api/subject/get-subject`);
    // console.log('getSubject', data);
    return data;
  }),
};
