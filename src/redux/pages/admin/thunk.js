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

export const adminThunk = {
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
      const { id } = formData;
      const { data } = await axios.put(
        `${BASE_URL}/api/teacher/update-teacher/${id}`,
        {
          faculty_name: 'teacher123',
          contact_number: 6596568468468,
          email_address: 'teacher123@gmail.com',
          father_name: 'father123',
          home_address: 'xyz123',
          designation: 'Ass.Teacher123',
          qualifications: ['B.com', 'B.A', 'M.com', 'BBA'],
          subjects: ['Maths', 'English', 'Physics'],
          course: [],
          semester: ['Sem-1', 'Sem-2'],
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
   * ########################### STUDENT Thunk START ##############################
   */
  createStudent: createAsyncThunk('admin/createStudent', async (formData) => {
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
  getStudentList: createAsyncThunk('admin/StudentList', async () => {
    const { data } = await axios.get(
      `${BASE_URL}/api/student/get-student`
      // config
    );
    return data;
  }),
  getStudentDetails: createAsyncThunk('admin/StudentDetails', async (id) => {
    const { data } = await axios.get(
      `${BASE_URL}api/student/get-single-student/${id}`
      // config
    );
    console.log('Student  detail', data);
    return data;
  }),
  updateStudentDetail: createAsyncThunk(
    'admin/updateStudentDetail',
    async (formData) => {
      console.log('inside thunk values are====>', formData);
      const { id } = formData;
      const { data } = await axios.put(
        `${BASE_URL}/api/student/update-student/${id}`,
        {
          student_id: 6,
          student_name: 'AWSupdate',
          student_course: 'B-tech',
          student_semester: 'III',
          student_class: 'Seventh',
          student_contact_number: 6546846844684684,
          student_email: 'awsupdate@gmail.com',
          student_home_address: 'aws-update',
          student_city: 'aws_city',
          father_name: 'AWS_Father',
          father_email: 'awsfather@gmail.com',
          father_contact_number: 546541684168168,
          father_city: 'aws_city',
        }
      );
      console.log(' faculty update api succesful data is ====>', data);
      return data;
    }
  ),
  deleteStudent: createAsyncThunk('admin/deleteStudent', async (id) => {
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
  getAttendanceList: createAsyncThunk('admin/AttendanceList', async () => {
    //
    const { data } = await axios.get(
      `${BASE_URL}api/attendance/get-attendance`
      // config
    );
    console.log('attendance  list', data);
    return data;
  }),
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
  updateAttendance: createAsyncThunk(
    'admin/updateAttendance',
    async (formData) => {
      console.log('inside thunk values are====>', formData);
      const { id } = formData;
      const { data } = await axios.put(
        `${BASE_URL}/api/attendance/update-attendance/${id}`,
        {
          student_id: '633290db1fb408ac9d48b364',
          is_present: false,
        }
      );
      console.log(' attendance update api succesful data is ====>', data);
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
