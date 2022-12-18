import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SeparateHeader } from '../topBar/HeaderBanner/SeparateHeader';
import AttendanceTable from '../utils/faculty/AttendanceTable';

import classes from './FacultyAttendance.module.css';
import { facultyThunk } from '../../redux/pages';

export const FacultyAttendance = () => {
  const dispatch = useDispatch();
  const callDispatch = async () => {
    await dispatch(facultyThunk.getAttendanceList());
  };

  useEffect(() => {
    callDispatch();
  }, []);
  return (
    <>
      <SeparateHeader />
      <div className={classes.MainContainer}>
        <div className={classes.SubContainer}>
          <AttendanceTable />
        </div>
      </div>
    </>
  );
};
