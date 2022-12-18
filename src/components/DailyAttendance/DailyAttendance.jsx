import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import '../../App.css';

import { studentThunk } from '../../redux/pages';
import { SeparateHeader } from '../topBar/HeaderBanner/SeparateHeader';
import AttendanceTable from './AttendanceTable';

function BasicExample() {
  const dispatch = useDispatch();
  const [value, onChange] = useState(new Date());

  const callDispatch = async () => {
    await dispatch(studentThunk.getAttendanceList());
  };

  useEffect(() => {
    callDispatch();
    return () => {
      console.log('return statement  Daily Attendance ');
    };
  }, []);

  return (
    <>
      <SeparateHeader />

      <div className="DailyAttendance_mainContainer">
        <div className="div" style={{ marginLeft: '270px' }}>
          <h4>B.tech</h4>
          <h6>computer science-1</h6>
        </div>

        <div id="Daily_table_container">
          <AttendanceTable />
        </div>
      </div>
    </>
  );
}

export default BasicExample;
