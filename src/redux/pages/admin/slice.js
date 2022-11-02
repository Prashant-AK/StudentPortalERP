import { createSlice } from '@reduxjs/toolkit';
import { adminThunk } from './thunk';

export const initialState = {
  loading: false,
  error: '',
  data: {},
  facultyList: [],
  studentList: [],
  facultyDetail: {},
  studentDetail: {},
  attendanceList: [],
};

export const adminSlice = createSlice({
  name: 'adminState',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /**
       * Faculty start
       */
      .addCase(adminThunk.createFaculty.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(adminThunk.createFaculty.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        data: payload,
      }))
      .addCase(adminThunk.createFaculty.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))
      .addCase(adminThunk.getFacultyList.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(adminThunk.getFacultyList.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        facultyList: payload,
      }))
      .addCase(adminThunk.getFacultyList.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))
      .addCase(adminThunk.getFacultyDetails.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(
        adminThunk.getFacultyDetails.fulfilled,
        (state, { payload }) => ({
          ...state,
          loading: false,
          facultyDetail: payload,
        })
      )
      .addCase(adminThunk.getFacultyDetails.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))
      .addCase(adminThunk.updateFacultyDetail.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(
        adminThunk.updateFacultyDetail.fulfilled,
        (state, { payload }) => ({
          ...state,
          loading: false,
          data: payload,
        })
      )
      .addCase(
        adminThunk.updateFacultyDetail.rejected,
        (state, { payload }) => ({
          ...state,
          loading: false,
          error: payload,
        })
      )
      .addCase(adminThunk.deleteFaculty.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(adminThunk.deleteFaculty.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        data: payload,
      }))
      .addCase(adminThunk.deleteFaculty.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))
      /**
       * Faculty End
       */
      /**
       * ############### Student START ###########################
       */
      .addCase(adminThunk.createStudent.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(adminThunk.createStudent.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        data: payload,
      }))
      .addCase(adminThunk.createStudent.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))
      .addCase(adminThunk.getStudentList.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(adminThunk.getStudentList.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        studentList: payload,
      }))
      .addCase(adminThunk.getStudentList.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))
      .addCase(adminThunk.getStudentDetails.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(
        adminThunk.getStudentDetails.fulfilled,
        (state, { payload }) => ({
          ...state,
          loading: false,
          studentDetail: payload,
        })
      )
      .addCase(adminThunk.getStudentDetails.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))
      .addCase(adminThunk.updateStudentDetail.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(
        adminThunk.updateStudentDetail.fulfilled,
        (state, { payload }) => ({
          ...state,
          loading: false,
          data: payload,
        })
      )
      .addCase(
        adminThunk.updateStudentDetail.rejected,
        (state, { payload }) => ({
          ...state,
          loading: false,
          error: payload,
        })
      )
      .addCase(adminThunk.deleteStudent.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(adminThunk.deleteStudent.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        data: payload,
      }))
      .addCase(adminThunk.deleteStudent.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))
      /**
       *  ##################### ATTENDANCE START ###################
       */
      .addCase(adminThunk.createAttendance.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(adminThunk.createAttendance.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        data: payload,
      }))
      .addCase(adminThunk.createAttendance.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))
      .addCase(adminThunk.getAttendanceList.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(
        adminThunk.getAttendanceList.fulfilled,
        (state, { payload }) => ({
          ...state,
          loading: false,
          attendanceList: payload,
        })
      )
      .addCase(adminThunk.getAttendanceList.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))
      .addCase(adminThunk.getAttendanceDetail.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(
        adminThunk.getAttendanceDetail.fulfilled,
        (state, { payload }) => ({
          ...state,
          loading: false,
          attendanceDetail: payload,
        })
      )
      .addCase(
        adminThunk.getAttendanceDetail.rejected,
        (state, { payload }) => ({
          ...state,
          loading: false,
          error: payload,
        })
      )
      .addCase(adminThunk.updateAttendance.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(adminThunk.updateAttendance.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        data: payload,
      }))
      .addCase(adminThunk.updateAttendance.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))
      .addCase(adminThunk.deleteAttendance.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(adminThunk.deleteAttendance.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        data: payload,
      }))
      .addCase(adminThunk.deleteAttendance.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))
      .addCase(adminThunk.createEvent.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(adminThunk.createEvent.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        data: payload,
      }))
      .addCase(adminThunk.createEvent.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }));
  },
});

export const {
  reducer: adminReducer,
  name: adminSliceKey,
  actions: adminSliceAction,
} = adminSlice;
