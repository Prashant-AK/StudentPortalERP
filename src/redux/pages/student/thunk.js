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

export const studentThunk = {
  /**
   * ########################### STUDENT Thunk START ##############################
   */
  createStudent: createAsyncThunk('student/createStudent', async (formData) => {
    // const {
    //   student_name,
    //   student_id,
    //   student_semester,
    //   student_course,
    //   student_class,
    //   student_contact_number,
    //   student_email,
    //   student_home_address,
    //   student_city,
    //   father_name,
    //   father_email,
    //   father_contact_number,
    //   father_city,
    // } = formData;
    const { data } = await axios.post(
      `${BASE_URL}/api/student/create-student`,
      formData
    );
    return data;
  }),
  getStudentList: createAsyncThunk('student/StudentList', async () => {
    const { data } = await axios.get(
      `${BASE_URL}/api/student/get-student`
      // config
    );

    return data.data;
  }),
  getStudentDetails: createAsyncThunk('student/StudentDetails', async (id) => {
    const { data } = await axios.get(
      `${BASE_URL}api/student/get-single-student/${id}`
      // config
    );
    console.log('Student  detail', data);
    return data;
  }),
  updateStudentDetail: createAsyncThunk(
    'student/updateStudentDetail',
    async (formData) => {
      console.log('inside thunk values are====>', formData);
      const {
        _id,
        student_name,
        student_id,
        student_semester,
        student_course,
        student_class,
        student_contact_number,
        student_email,
        student_home_address,
        student_city,
        father_name,
        father_email,
        father_contact_number,
        father_city,
      } = formData;
      const { data } = await axios.put(
        `${BASE_URL}/api/student/update-student/${_id}`,
        {
          student_name,
          student_id,
          student_semester,
          student_course,
          student_class,
          student_contact_number,
          student_email,
          student_home_address,
          student_city,
          father_name,
          father_email,
          father_contact_number,
          father_city,
        }
      );
      console.log(' faculty update api succesful data is ====>', data);
      return data;
    }
  ),
  deleteStudent: createAsyncThunk('student/deleteStudent', async (id) => {
    const res = await axios.delete(
      `${BASE_URL}/api/student/delete-student/${id}`
      // config
    );
    console.log('Faculty  detail', res);
    return res;
  }),
  /**
   * ########################### STUDENT Thunk END ##############################
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
  getAttendanceList: createAsyncThunk('student/AttendanceList', async () => {
    //

    const { data } = await axios.get(
      `${BASE_URL}/api/studentAttendance/get-student-attendance`
      // config
    );

    return data;
  }),
  getAttendanceDetail: createAsyncThunk(
    'student/AttendanceDetail',
    async (id) => {
      const { data } = await axios.get(
        `${BASE_URL}/api/attendance/get-single-attendance/${id}`
        // config
      );
      console.log('Attendance  detail', data);
      return data;
    }
  ),
  updateAttendance: createAsyncThunk(
    'student/updateAttendance',
    async (formData) => {
      const { id, status } = formData;
      const { data } = await axios.put(
        `${BASE_URL}/api/studentAttendance/update-student-attendance/${id}`,
        {
          student_id: id,
          is_present: status,
        }
      );  
      return data;
    }
  ),
  deleteAttendance: createAsyncThunk('student/deleteAttendance', async (id) => {
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
};
