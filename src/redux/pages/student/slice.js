import { createSlice } from '@reduxjs/toolkit';
import { studentThunk } from './thunk';

export const initialState = {
  loading: false,
  error: {},
  data: {},
  studentList: [],
  studentDetail: {},
  attendanceList: [],
};

export const studentSlice = createSlice({
  name: 'studentState',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /**
       * student start
       */
      // .addCase(studentThunk.createstudent.pending, (state) => ({
      //   ...state,
      //   loading: true,
      // }))
      // .addCase(studentThunk.createstudent.fulfilled, (state, { payload }) => ({
      //   ...state,
      //   loading: false,
      //   data: payload,
      // }))
      // .addCase(studentThunk.createstudent.rejected, (state, { payload }) => ({
      //   ...state,
      //   loading: false,
      //   error: payload,
      // }))
      // .addCase(studentThunk.getstudentList.pending, (state) => ({
      //   ...state,
      //   loading: true,
      // }))
      // .addCase(studentThunk.getstudentList.fulfilled, (state, { payload }) => ({
      //   ...state,
      //   loading: false,
      //   studentList: payload,
      // }))
      // .addCase(studentThunk.getstudentList.rejected, (state, { payload }) => ({
      //   ...state,
      //   loading: false,
      //   error: payload,
      // }))
      // .addCase(studentThunk.getstudentDetails.pending, (state) => ({
      //   ...state,
      //   loading: true,
      // }))
      // .addCase(
      //   studentThunk.getstudentDetails.fulfilled,
      //   (state, { payload }) => ({
      //     ...state,
      //     loading: false,
      //     studentDetail: payload,
      //   })
      // )
      // .addCase(
      //   studentThunk.getstudentDetails.rejected,
      //   (state, { payload }) => ({
      //     ...state,
      //     loading: false,
      //     error: payload,
      //   })
      // )
      // .addCase(studentThunk.updatestudentDetail.pending, (state) => ({
      //   ...state,
      //   loading: true,
      // }))
      // .addCase(
      //   studentThunk.updatestudentDetail.fulfilled,
      //   (state, { payload }) => ({
      //     ...state,
      //     loading: false,
      //     data: payload,
      //   })
      // )
      // .addCase(
      //   studentThunk.updatestudentDetail.rejected,
      //   (state, { payload }) => ({
      //     ...state,
      //     loading: false,
      //     error: payload,
      //   })
      // )
      // .addCase(studentThunk.deletestudent.pending, (state) => ({
      //   ...state,
      //   loading: true,
      // }))
      // .addCase(studentThunk.deletestudent.fulfilled, (state, { payload }) => ({
      //   ...state,
      //   loading: false,
      //   data: payload,
      // }))
      // .addCase(studentThunk.deletestudent.rejected, (state, { payload }) => ({
      //   ...state,
      //   loading: false,
      //   error: payload,
      // }))
      /**
       * student End
       */
      /**
       *  ##################### ATTENDANCE START ###################
       */
      // .addCase(studentThunk.createAttendance.pending, (state) => ({
      //   ...state,
      //   loading: true,
      // }))
      // .addCase(
      //   studentThunk.createAttendance.fulfilled,
      //   (state, { payload }) => ({
      //     ...state,
      //     loading: false,
      //     data: payload,
      //   })
      // )
      // .addCase(
      //   studentThunk.createAttendance.rejected,
      //   (state, { payload }) => ({
      //     ...state,
      //     loading: false,
      //     error: payload,
      //   })
      // )
      .addCase(studentThunk.getAttendanceList.pending, (state) => ({
        ...state,
        loading: true,
        attendanceList:[]
      }))
      .addCase(
        studentThunk.getAttendanceList.fulfilled,
        (state, { payload }) => ({
          ...state,
          loading: false,
          attendanceList: payload,
        })
      )
      .addCase(
        studentThunk.getAttendanceList.rejected,
        (state, { payload }) => ({
          ...state,
          loading: false,
          error: payload,
          attendanceList:[]
        })
      )
      // .addCase(studentThunk.getAttendanceDetail.pending, (state) => ({
      //   ...state,
      //   loading: true,
      // }))
      // .addCase(
      //   studentThunk.getAttendanceDetail.fulfilled,
      //   (state, { payload }) => ({
      //     ...state,
      //     loading: false,
      //     attendanceDetail: payload,
      //   })
      // )
      // .addCase(
      //   studentThunk.getAttendanceDetail.rejected,
      //   (state, { payload }) => ({
      //     ...state,
      //     loading: false,
      //     error: payload,
      //   })
      // )
      // .addCase(studentThunk.updateAttendance.pending, (state) => ({
      //   ...state,
      //   loading: true,
      // }))
      // .addCase(
      //   studentThunk.updateAttendance.fulfilled,
      //   (state, { payload }) => ({
      //     ...state,
      //     loading: false,
      //     data: payload,
      //   })
      // )
      // .addCase(
      //   studentThunk.updateAttendance.rejected,
      //   (state, { payload }) => ({
      //     ...state,
      //     loading: false,
      //     error: payload,
      //   })
      // )
      // .addCase(studentThunk.deleteAttendance.pending, (state) => ({
      //   ...state,
      //   loading: true,
      // }))
      // .addCase(
      //   studentThunk.deleteAttendance.fulfilled,
      //   (state, { payload }) => ({
      //     ...state,
      //     loading: false,
      //     data: payload,
      //   })
      // )
      // .addCase(
      //   studentThunk.deleteAttendance.rejected,
      //   (state, { payload }) => ({
      //     ...state,
      //     loading: false,
      //     error: payload,
      //   })
      // )
      // .addCase(studentThunk.createEvent.pending, (state) => ({
      //   ...state,
      //   loading: true,
      // }))
      // .addCase(studentThunk.createEvent.fulfilled, (state, { payload }) => ({
      //   ...state,
      //   loading: false,
      //   data: payload,
      // }))
      // .addCase(studentThunk.createEvent.rejected, (state, { payload }) => ({
      //   ...state,
      //   loading: false,
      //   error: payload,
      // }));
  },
});

export const {
  reducer: studentReducer,
  name: studentSliceKey,
  actions: studentSliceAction,
} = studentSlice;
