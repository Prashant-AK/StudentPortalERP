import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { BannerHeader } from '../topBar/HeaderBanner/BannerHeader';
import { CategoryTable } from '../utils/faculty/CategoryTable';
import { adminThunk } from '../../redux/pages';

export const FacultyProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      <BannerHeader>
        <p className="headingg">Faculty Profile</p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <p className="sub_heading">Dashboard / Faculty-Profile</p>
          </div>
          <div style={{ marginTop: '-3rem', marginRight: '3rem' }}>
            <Button
              style={{
                backgroundColor: '#27285C',
                color: '#fff',
              }}
              onClick={() => navigate('/create-faculty-profile')}
            >
              Create Profile
            </Button>
          </div>
        </div>
      </BannerHeader>

      <div className="DailyAttendance_mainContainer">
        <div className="Student_Table_Container">
          <div id="table_header_content">
            <h3 style={{ fontWeight: 'bold', marginLeft: '2rem' }}>Profile</h3>

            <select
              className="form-select form-select-lg mb-0"
              aria-label=".form-select-lg example"
              style={{
                width: '12rem',
                height: '2.5rem',
                borderRadius: '15px',
                fontSize: '1rem',
                marginRight: '15px',
                marginLeft: 'auto',
              }}
            >
              <option selected>Select Course</option>
              <option value="1">B Tech</option>
            </select>
            <select
              className="form-select form-select-lg mb-0"
              aria-label=".form-select-lg example"
              style={{
                width: '12rem',
                height: '2.5rem',
                borderRadius: '15px',
                fontSize: '1rem',
                marginRight: '15px',
              }}
            >
              <option selected>Select class</option>
              <option value="1">One</option>
            </select>

            <div id="srch_icon_container" style={{ marginRight: '2rem' }}>
              <BiSearch id="srch_icon" />
            </div>
          </div>
          <div className="table_container">
            <CategoryTable //profile={true} handleShow={handleShow}
            />
          </div>
        </div>
      </div>
    </>
  );
};
