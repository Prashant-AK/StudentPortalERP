import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button, Table, Dropdown, DropdownButton } from 'react-bootstrap';

import { BannerHeader } from '../topBar/HeaderBanner/BannerHeader';

import { head, content } from './table';

function ClassSchedule() {
  const navigate = useNavigate();
  return (
    <>
      <BannerHeader>
        <p className="headingg">Class Schedule</p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <p className="sub_heading">Dashboard / Class-Schedule</p>
          </div>
          <div style={{ marginTop: '-3rem', marginRight: '3rem' }}>
            <Button
              style={{
                backgroundColor: '#27285C',
                color: '#fff',
              }}
              onClick={() => navigate('/upload-schedule')}
            >
              Upload Schedule
            </Button>
          </div>
        </div>
      </BannerHeader>
      <div className="DailyAttendance_mainContainer">
        <div className="Student_Table_Container">
          <div id="table_header_content">
            <h3 style={{ fontWeight: 'bold', marginLeft: '2rem' }}>
              Class/Schedule
            </h3>
          </div>
          <div className="table_container">
            <div id="Student_table" style={{ backgroundColor: 'white' }}>
              <Table>
                <thead style={{ borderTop: '1px solid black' }}>
                  <tr>
                    {head.map(({ colName }, index) => (
                      <th key={index + colName}>{colName}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content.map((element, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{element?.course}</td>
                      <td>{element?.class}</td>
                      <td>
                        <Link style={{ textDecoration: 'none' }} to="#">
                          {element?.schedule}
                        </Link>
                      </td>
                      <td>
                        <DropdownButton
                          key="down"
                          drop="down"
                          variant="secondary"
                          title="..."
                        >
                          <Dropdown.Item
                            eventKey="1"
                            onClick={() => navigate('/create-class-schedule')}
                          >
                            Change
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="2">Remove</Dropdown.Item>
                        </DropdownButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClassSchedule;
