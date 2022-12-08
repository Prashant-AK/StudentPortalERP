import React from 'react';
import { Dropdown, DropdownButton, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { BsThreeDots } from 'react-icons/bs';
import { data } from './CategoryTableData';

export const CategoryTable = ({ profile, handleShow }) => {
  const { loading, studentList } = useSelector((state) => state.adminState);
  // console.log('data check for adminState', loading, studentList);
  return (
    <div id="Student_table">
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

              <div
                className="col"
                style={{ textAlign: 'center', fontWeight: 'bold' }}
              >
                Course
              </div>
              <div
                className="col"
                style={{ textAlign: 'center', fontWeight: 'bold' }}
              >
                Class
              </div>

              {!profile && (
                <div
                  className="col"
                  style={{ textAlign: 'center', fontWeight: 'bold' }}
                >
                  Total Attendance
                </div>
              )}
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
          studentList?.map((data, index) => (
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
                    {data.student_name}
                  </div>
                  <div className="col" style={{ textAlign: 'center' }}>
                    {data.student_id}
                  </div>
                  <div className="col" style={{ textAlign: 'center' }}>
                    {data.student_course}
                  </div>
                  <div className="col" style={{ textAlign: 'center' }}>
                    {data.student_class}
                  </div>

                  {!profile && (
                    <div className="col" style={{ textAlign: 'center' }}>
                      89
                    </div>
                  )}
                  <div className="col" style={{ textAlign: 'center' }}>
                    {/* <i type="button" onClick={''}>
                    ...
                  </i> */}
                    {!profile ? (
                      <DropdownButton
                        // as={ButtonGroup}
                        // key="down"
                        // id={`dropdown-button-drop-down`}
                        drop="down"
                        variant="secondary"
                        title={<BsThreeDots />}
                      >
                        <Dropdown.Item
                          eventKey="1"
                          onClick={() => handleShow(data)}
                        >
                          View Detail
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">Change</Dropdown.Item>
                      </DropdownButton>
                    ) : (
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
                          onClick={() => handleShow(data)}
                        >
                          View Profile
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">Cancel</Dropdown.Item>
                      </DropdownButton>
                    )}
                  </div>
                </div>
              </div>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
};
