import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dropdown, DropdownButton, ListGroup } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';

import LoginImg from '../../../assests/LoginImg.png';
import { facultyThunk } from '../../../redux/pages';

function AttendanceTable() {
  const dispatch = useDispatch();

  const { loading, facultyAttendanceList } = useSelector(
    (state) => state.facultyState
  );
  const handleAbsent = async (id) => {
    await dispatch(facultyThunk.updateAttendance({ id, status: false }));
    await dispatch(facultyThunk.getAttendanceList());
  };
  const handlePresent = async (id) => {
    await dispatch(facultyThunk.updateAttendance({ id, status: true }));
    await dispatch(facultyThunk.getAttendanceList());
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
                  fontWeight: 'bold',
                }}
              >
                S.No
              </div>
              <div className="col" style={{ fontWeight: 'bold' }}>
                Faculty Name
              </div>

              <div
                className="col"
                style={{ textAlign: 'center', fontWeight: 'bold' }}
              ></div>

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
          facultyAttendanceList?.map((data, index) => (
            <ListGroup.Item key={data?._id}>
              <div className="container">
                <div className="row align-items-start">
                  <div className="col">{index + 1}</div>
                  <div
                    className="col"
                    style={{ textAlign: 'center', display: 'flex' }}
                  >
                    <img src={LoginImg} id="circle" alt="" />
                    {data?.teacher_id?.faculty_name}
                  </div>
                  <div className="col" style={{ textAlign: 'center' }}></div>
                  <div className="col" style={{ width: '45%' }}></div>
                  <div className="col" style={{ textAlign: 'center' }}>
                    <FaCheckCircle
                      style={{ color: data?.is_present ? 'lightgreen' : 'red' }}
                    />
                  </div>

                  <div className="col" style={{ textAlign: 'center' }}>
                    <DropdownButton
                      id={`dropdown-button-drop-down`}
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
