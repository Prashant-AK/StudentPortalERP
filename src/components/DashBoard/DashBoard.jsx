import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Cards from './Card';
import '../../App.css';
import { commonThunk } from '../../redux/pages';

const DashBoard = () => {
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
        <Cards />
      </div>
    </>
  );
};

export default DashBoard;
