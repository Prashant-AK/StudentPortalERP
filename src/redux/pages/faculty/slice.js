import { createSlice } from '@reduxjs/toolkit';
import { facultyThunk } from './thunk';

export const initialState = {
  loading: false,
  error: {},
  data: {},
  facultyList: [],
  facultyDetail: {},
  facultyAttendanceList: [],
};

export const facultySlice = createSlice({
  name: 'facultyState',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /**
       * Faculty start
       */
      .addCase(facultyThunk.createFaculty.pending, (state) => ({
        ...state,
        loading: true,
        data: {},
      }))
      .addCase(facultyThunk.createFaculty.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        data: payload,
      }))
      .addCase(facultyThunk.createFaculty.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
        data: {},
      }))
      .addCase(facultyThunk.getFacultyList.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(facultyThunk.getFacultyList.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        facultyList: payload,
      }))
      .addCase(facultyThunk.getFacultyList.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))
      .addCase(facultyThunk.getFacultyDetails.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(
        facultyThunk.getFacultyDetails.fulfilled,
        (state, { payload }) => ({
          ...state,
          loading: false,
          facultyDetail: payload,
        })
      )
      .addCase(
        facultyThunk.getFacultyDetails.rejected,
        (state, { payload }) => ({
          ...state,
          loading: false,
          error: payload,
        })
      )
      .addCase(facultyThunk.updateFacultyDetail.pending, (state) => ({
        ...state,
        loading: true,
        data: {},
      }))
      .addCase(
        facultyThunk.updateFacultyDetail.fulfilled,
        (state, { payload }) => ({
          ...state,
          loading: false,
          data: payload,
        })
      )
      .addCase(
        facultyThunk.updateFacultyDetail.rejected,
        (state, { payload }) => ({
          ...state,
          loading: false,
          error: payload,
        })
      )
      .addCase(facultyThunk.deleteFaculty.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(facultyThunk.deleteFaculty.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        data: payload,
      }))
      .addCase(facultyThunk.deleteFaculty.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))
      /**
       * Faculty End
       */
      /**
       *  ##################### ATTENDANCE START ###################
       */
      .addCase(facultyThunk.createAttendance.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(
        facultyThunk.createAttendance.fulfilled,
        (state, { payload }) => ({
          ...state,
          loading: false,
          data: payload,
        })
      )
      .addCase(
        facultyThunk.createAttendance.rejected,
        (state, { payload }) => ({
          ...state,
          loading: false,
          error: payload,
        })
      )
      .addCase(facultyThunk.getAttendanceList.pending, (state) => ({
        ...state,
        loading: true,
        facultyAttendanceList: [],
      }))
      .addCase(
        facultyThunk.getAttendanceList.fulfilled,
        (state, { payload }) => ({
          ...state,
          loading: false,
          facultyAttendanceList: payload,
        })
      )
      .addCase(
        facultyThunk.getAttendanceList.rejected,
        (state, { payload }) => ({
          ...state,
          loading: false,
          error: payload,
        })
      )
      .addCase(facultyThunk.getAttendanceDetail.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(
        facultyThunk.getAttendanceDetail.fulfilled,
        (state, { payload }) => ({
          ...state,
          loading: false,
          attendanceDetail: payload,
        })
      )
      .addCase(
        facultyThunk.getAttendanceDetail.rejected,
        (state, { payload }) => ({
          ...state,
          loading: false,
          error: payload,
        })
      )
      .addCase(facultyThunk.updateAttendance.pending, (state) => ({
        ...state,
        loading: true,
        data: {},
      }))
      .addCase(
        facultyThunk.updateAttendance.fulfilled,
        (state, { payload }) => ({
          ...state,
          loading: false,
          data: payload,
        })
      )
      .addCase(
        facultyThunk.updateAttendance.rejected,
        (state, { payload }) => ({
          ...state,
          loading: false,
          error: payload,
        })
      )
      .addCase(facultyThunk.deleteAttendance.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(
        facultyThunk.deleteAttendance.fulfilled,
        (state, { payload }) => ({
          ...state,
          loading: false,
          data: payload,
        })
      )
      .addCase(
        facultyThunk.deleteAttendance.rejected,
        (state, { payload }) => ({
          ...state,
          loading: false,
          error: payload,
        })
      )
      .addCase(facultyThunk.createEvent.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(facultyThunk.createEvent.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        data: payload,
      }))
      .addCase(facultyThunk.createEvent.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }));
  },
});

export const {
  reducer: facultyReducer,
  name: facultySliceKey,
  actions: facultySliceAction,
} = facultySlice;
