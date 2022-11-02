import React from 'react';
import Cards from './Card';

import '../../App.css';

const DashBoard = () => {
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
