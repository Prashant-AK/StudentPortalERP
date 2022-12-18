import React from 'react';
import { Dropdown, DropdownButton, ListGroup } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import LoginImg from '../../assests/LoginImg.png';
import { studentThunk } from '../../redux/pages';

function AttendanceTable() {
  const dispatch = useDispatch();
  const { loading, attendanceList } = useSelector(
    (state) => state.studentState
  );

  const handleAbsent = async (id) => {
    await dispatch(studentThunk.updateAttendance({ id, status: false }));
    await dispatch(studentThunk.getAttendanceList());
  };
  const handlePresent = async (id) => {
    await dispatch(studentThunk.updateAttendance({ id, status: true }));
    await dispatch(studentThunk.getAttendanceList());
  };

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
          attendanceList?.map((data, index) => (
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
                    <FaCheckCircle
                      style={{ color: data?.is_present ? 'lightgreen' : 'red' }}
                    />
                  </div>
                  <div className="col" style={{ textAlign: 'center' }}>
                    {/* <i
                      type="button"
                      onClick={() => console.log('Button clicked')}
                    >
                      ...
                    </i> */}
                    <DropdownButton
                      // as={ButtonGroup}
                      // key="down"
                      // id={`dropdown-button-drop-down`}
                      drop="down"
                      variant="secondary"
                      title={<BsThreeDots />}
                      style={{ outline: 'none' }}
                    >
                      <Dropdown.Item
                        eventKey="1"
                        onClick={() => handlePresent(data?._id)}
                      >
                        Present
                      </Dropdown.Item>
                      <Dropdown.Item
                        eventKey="2"
                        onClick={() => handleAbsent(data?._id)}
                      >
                        Absent
                      </Dropdown.Item>
                    </DropdownButton>
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
