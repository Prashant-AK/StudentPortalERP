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

export const facultyThunk = {
  /**
   * Faculty Thunk START
   */
  createFaculty: createAsyncThunk('admin/createFaculty', async (formData) => {
    const { data } = await axios.post(
      `${BASE_URL}/api/teacher/create-teacher`,
      formData
    );
    console.log('create faculty api succesful data is ====>', data);
    return data;
  }),
  getFacultyList: createAsyncThunk('admin/facultyList', async () => {
    //
    const { data } = await axios.get(
      `${BASE_URL}/api/teacher/get-teacher`
      // config
    );

    return data;
  }),
  getFacultyDetails: createAsyncThunk('admin/facultyDetail', async (id) => {
    const { data } = await axios.get(
      `${BASE_URL}api/teacher/get-teacher/${id}`
      // config
    );
    console.log('Faculty  detail', data);
    return data;
  }),
  updateFacultyDetail: createAsyncThunk(
    'admin/updateFacultyDetail',
    async (formData) => {
      console.log('inside thunk values are====>', formData);
      const {
        faculty_name,
        contact_number,
        email_address,
        password,
        city,
        father_name,
        home_address,
        designation,
        qualifications,
        subjects,
        course,
        semester,
        _id,
      } = formData;
      const { data } = await axios.put(
        `${BASE_URL}/api/teacher/update-teacher/${_id}`,
        {
          faculty_name,
          contact_number,
          email_address,
          password,
          city,
          father_name,
          home_address,
          designation,
          qualifications,
          subjects,
          course,
          semester,
        }
      );
      console.log(' faculty update api succesful data is ====>', data);
      return data;
    }
  ),
  deleteFaculty: createAsyncThunk('admin/deleteFaculty', async (id) => {
    const res = await axios.delete(
      `${BASE_URL}/api/teacher/get-teacher/${id}`
      // config
    );
    console.log('Faculty  detail', res);
    return res;
  }),
  /**
   * ################# Faculty Thunk END #######################
   */

  /**
   * ########################### ATTENDANCE Thunk start ##############################
   */
  createAttendance: createAsyncThunk(
    'admin/createAttendance',
    async (formData) => {
      console.log('inside thunk values are====>', formData);
      const {} = formData;
      const { data } = await axios.post(
        `${BASE_URL}/api/attendance/create-attendance`,
        {
          is_present: true,
          student_id: '63342a03f9d6afb6c1905864',
        }
      );
      console.log('Create Attendance api succesful data is ====>', data);
      return data;
    }
  ),
  getAttendanceList: createAsyncThunk(
    'faculty/admin/AttendanceList',
    async () => {
      const { data } = await axios.get(
        `${BASE_URL}/api/teacher_attendance/get-teacher_attendance`
      );
      return data;
    }
  ),
  updateAttendance: createAsyncThunk(
    'faculty/admin/updateAttendance',
    async (formData) => {
      const { id, status } = formData;
      const { data } = await axios.put(
        `${BASE_URL}/api/teacher_attendance/update-teacher_attendance/${id}`,
        {
          is_present: status,
        }
      );
      return data;
    }
  ),
  getAttendanceDetail: createAsyncThunk(
    'admin/AttendanceDetail',
    async (id) => {
      const { data } = await axios.get(
        `${BASE_URL}api/attendance/get-single-attendance/${id}`
        // config
      );
      console.log('Attendance  detail', data);
      return data;
    }
  ),

  deleteAttendance: createAsyncThunk('admin/deleteAttendance', async (id) => {
    const res = await axios.delete(
      `${BASE_URL}/api/attendance/delete-attendance/${id}`
      // config
    );
    console.log('Attendance delete  ', res);
    return res;
  }),
  /**
   * ########################### ATTENDANCE Thunk END ##############################
   */
  createEvent: createAsyncThunk('admin/createEvent', async (formData) => {
    console.log('inside thunk values are====>', formData);
    // const {file,Event_name,Event_type,Select_Date,Select_time,Detail} = formData;
    const json = JSON.stringify(formData);
    const blob = new Blob([json]);
    console.log('check blob', blob);
    // const { data } = await axios.post(
    //   `${BASE_URL}/api/eventTeacher/create-teacher-event`, ,{
    // headers: {
    //   'Content-Type': 'multipart/form-data'
    // }

    // );
    // console.log('Create Attendance api succesful data is ====>', data);
    // return data;
  }),
};
