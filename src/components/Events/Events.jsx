import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import {
  Button,
  Table,
  Dropdown,
  DropdownButton,
  Modal,
  Row,
  Col,
  FloatingLabel,
  Form,
  Image,
} from 'react-bootstrap';

import { BannerHeader } from '../topBar/HeaderBanner/BannerHeader';
import { head, content } from './table';

import classes from './Events.module.css';

function Events() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <BannerHeader>
        <p className="headingg">Events</p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <p className="sub_heading">Dashboard / Events</p>
          </div>
          <div style={{ marginTop: '-3rem', marginRight: '3rem' }}>
            <Button
              style={{
                backgroundColor: '#27285C',
                color: '#fff',
              }}
              onClick={() =>
                navigate(
                  `${
                    location.pathname === '/teacher/events'
                      ? '/teacher/create-event'
                      : '/create-event'
                  }`
                )
              }
            >
              Create Event
            </Button>
          </div>
        </div>
      </BannerHeader>
      <div className="DailyAttendance_mainContainer">
        <div className="Student_Table_Container">
          <div id="table_header_content">
            <h3 style={{ fontWeight: 'bold', marginLeft: '2rem' }}>Events</h3>
          </div>
          <div className="table_container">
            <div id="Student_table" style={{ backgroundColor: 'white' }}>
              <Table>
                <thead style={{ borderTop: '1px solid black' }}>
                  <tr>
                    {head.map(({ colName }, index) => (
                      <th key={index + colName} style={{ textAlign: 'center' }}>
                        {colName}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content.map((element, index) => (
                    <tr key={index}>
                      <td style={{ textAlign: 'center' }}>{index + 1}</td>
                      <td style={{ textAlign: 'center' }}>
                        {element?.eventType}
                      </td>
                      <td width="20%" style={{ textAlign: 'center' }}>
                        {element?.dateTime}
                      </td>

                      <td width="40%">{element?.detail}</td>
                      <td style={{ textAlign: 'center' }}>
                        <DropdownButton
                          drop="left"
                          variant="secondary"
                          title="..."
                          style={{ color: 'black' }}
                        >
                          <Dropdown.Item
                            eventKey="1"
                            onClick={() => navigate('create-event-list')}
                          >
                            Edit
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

export default Events;
