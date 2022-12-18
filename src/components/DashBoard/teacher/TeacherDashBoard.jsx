import React, { useEffect } from 'react';
import TeacherCard from './TeacherCard';
import { useDispatch } from 'react-redux';

import { commonThunk } from '../../../redux/pages';

function TeacherDashBoard() {
  const dispatch = useDispatch();

  const getData = async () => {
    await dispatch(commonThunk.getSemester());
    await dispatch(commonThunk.getSubject());
    await dispatch(commonThunk.getCourses());
    // await dispatch(commonThunk.getClass())
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div style={{ height: '.5rem', backgroundColor: 'white' }}></div>
      <div style={{ marginLeft: '230px' }}>
        <TeacherCard />
      </div>
    </>
  );
}

export default TeacherDashBoard;
