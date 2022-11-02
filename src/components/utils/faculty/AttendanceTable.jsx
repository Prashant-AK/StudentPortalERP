import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaCheckCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import data from './Dailydata';
import LoginImg from '../../../assests/LoginImg.png';

function AttendanceTable() {
  const { loading, studentList } = useSelector((state) => state.adminState);

  return (
    <div style={{ marginRight: '30px' }}>
      <ListGroup>
        <ListGroup.Item>
          <div className="container">
            <div className="row align-items-start">
              <div
                className="col"
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}
              >
                S.No
              </div>
              <div
                className="col"
                style={{ textAlign: 'center', fontWeight: 'bold' }}
              >
                Student Name
              </div>

              <div
                className="col"
                style={{ textAlign: 'center', fontWeight: 'bold' }}
              >
                Student ID
              </div>

              <div className="col" style={{ width: '45%' }}></div>

              <div
                className="col"
                style={{ textAlign: 'center', fontWeight: 'bold' }}
              >
                Attendance
              </div>
              <div
                className="col"
                style={{ textAlign: 'center', fontWeight: 'bold' }}
              >
                Actions
              </div>
            </div>
          </div>
        </ListGroup.Item>
        {!loading &&
          studentList.map((data, index) => (
            <ListGroup.Item key={data?._id}>
              <div className="container">
                <div className="row align-items-start">
                  <div className="col" style={{ textAlign: 'center' }}>
                    {index + 1}
                  </div>
                  <div
                    className="col"
                    style={{ textAlign: 'center', display: 'flex' }}
                  >
                    <img src={LoginImg} id="circle" alt="" />
                    {data?.student_name}
                  </div>
                  <div className="col" style={{ textAlign: 'center' }}>
                    {data?.student_id}
                  </div>
                  <div className="col" style={{ width: '45%' }}></div>
                  <div className="col" style={{ textAlign: 'center' }}>
                    <FaCheckCircle style={{ color: 'lightgreen' }} />
                  </div>
                  <div className="col" style={{ textAlign: 'center' }}>
                    <i
                      type="button"
                      onClick={() => console.log('Button clicked')}
                    >
                      ...
                    </i>
                  </div>
                </div>
              </div>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}

export default AttendanceTable;
