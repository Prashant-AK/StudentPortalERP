import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SeparateHeader } from '../topBar/HeaderBanner/SeparateHeader';
import AttendanceTable from '../utils/faculty/AttendanceTable';

import classes from './FacultyAttendance.module.css';
import { adminThunk } from '../../redux/pages';

export const FacultyAttendance = () => {
  const dispatch = useDispatch();
  const [value, onChange] = useState(new Date());

  const callDispatch = async () => {
    await dispatch(adminThunk.getFacultyList());
  };

  useEffect(() => {
    callDispatch();
    return () => {
      console.log('return statement ');
    };
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
