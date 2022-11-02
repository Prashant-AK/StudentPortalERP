import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Stack, Form } from 'react-bootstrap';
import { IoMdMail } from 'react-icons/io';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsTelephoneFill } from 'react-icons/bs';
import QRicon from '../../../assests/QRicon.png';
import shareicon from '../../../assests/shareicon.png';

import classes from './TeacherDashboard.module.css';

function TeacherCard() {
  return (
    <>
      <Container>
        <Stack gap={3}>
          <Row
            style={{
              margin: '0px 30px 0px 25px',
            }}
          >
            <Col className={`card text-white mb-2 ${classes.cards}`}>
              <div className="card-body">
                <h3 className="card-title" style={{ fontSize: '4rem' }}>
                  300
                </h3>
                <p className="card-text">
                  Registered Students <br></br>
                  Description text
                </p>
              </div>
            </Col>

            <Col
              className={`card text-white mb-2 ${classes.cards}`}
              style={{ marginLeft: '1rem', marginRight: '1rem' }}
            >
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: '4rem' }}>
                  250
                </h5>
                <p className="card-text">
                  Active Students<br></br>
                  Description text
                </p>
              </div>
            </Col>

            <Col className={`card text-white mb-2 ${classes.cards}`}>
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: '4rem' }}>
                  180
                </h5>
                <p className="card-text">
                  Present Today<br></br>
                  Description text
                </p>
              </div>
            </Col>
          </Row>
          <Row
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              margin: '0px 30px 0px 25px',
              borderRadius: '30px',
              backgroundColor: '#f5fafd',
              padding: '1rem',
            }}
          >
            <div>
              <div id="QR_heading_container">
                <img src={QRicon} id="QRicon" />
                <p id="QR_text">Generate QR</p>

                <img src={shareicon} id="shareicon" />
              </div>
              <div className="underline"> </div>
            </div>

            <Col id="form">
              <label for="Semester" id="lables">
                Enter Semester
              </label>
              <input
                type="text"
                placeholder="Semester 1"
                aria-label="First name"
                className={`${classes.QR_form_inputs} form-control`}
              />
              <label for="Course" id="lables">
                Enter Course
              </label>
              <input
                type="text"
                placeholder="B.Tech"
                aria-label="First name"
                className={`${classes.QR_form_inputs} form-control`}
              />
              <label for="Class" id="lables">
                Enter Class
              </label>
              <input
                type="text"
                placeholder="CSE-II"
                aria-label="First name"
                className={`${classes.QR_form_inputs} form-control`}
              />
            </Col>

            <Col id="form">
              <label for="Lecture" id="lables">
                Enter Lecture
              </label>
              <input
                type="text"
                placeholder="Physics-1"
                aria-label="Last name"
                className={`${classes.QR_form_inputs} form-control`}
              />
              <label for="Faculty" id="lables">
                Enter Faculty Name
              </label>
              <input
                type="text"
                placeholder="Sangeet Das"
                aria-label="Last name"
                className={`${classes.QR_form_inputs} form-control`}
              />
              <label for="Time" id="lables">
                Enter Time Slot
              </label>
              <input
                type="text"
                placeholder="9:00AM-11:00Am"
                aria-label="Last name"
                className={`${classes.QR_form_inputs} form-control`}
              />
            </Col>

            <Row style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <button className={classes.QRbtn}>Generate QR</button>
            </Row>
          </Row>
          <Stack
            style={{
              display: 'flex',
              // justifyContent: 'space-around',
              margin: '0px 30px 0px 25px',
              padding: '0px 12px',
              borderRadius: '30px',
              backgroundColor: '#f5fafd',
              padding: '1rem',
            }}
            gap={4}
          >
            <div>
              <div id="QR_heading_container">
                <img src={QRicon} id="QRicon" />
                <p id="QR_text">Class Schedule</p>

                <img src={shareicon} id="shareicon" />
              </div>
              <div className="underline"> </div>
            </div>
            <Row>
              <Col style={{ textAlign: 'center' }}>
                <h5>Class</h5>
              </Col>
              <Col style={{ textAlign: 'center' }}>
                <h5>Subjects</h5>
              </Col>
              <Col style={{ textAlign: 'center' }}>
                <h5>Time Slot</h5>
              </Col>
            </Row>
          </Stack>
          <Stack
            style={{
              display: 'flex',

              margin: '0px 30px 0px 25px',

              borderRadius: '40px',
              backgroundColor: '#f5fafd',
              padding: '2rem',
            }}
            gap={4}
          >
            <div>
              <div id="QR_heading_container">
                <img src={QRicon} id="QRicon" />
                <p id="QR_text">Contact Us!</p>

                <img src={shareicon} id="shareicon" />
              </div>
              <div className="underline"> </div>
            </div>
            <Row>
              <Col id="form">
                <label for="Semester" id="lables">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Semester 1"
                  className={`${classes.QR_form_inputs} form-control`}
                />
                <label for="Course" id="lables">
                  Email ID
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className={`${classes.QR_form_inputs} form-control`}
                />
                <label for="Course" id="lables">
                  Message
                </label>
                <textarea rows="4" className={`form-control`}></textarea>
              </Col>
              <Col
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '4rem',
                }}
              >
                <Stack
                  style={{
                    backgroundColor: '#002154',
                    color: '#fff',
                    border: '1px solid #006489',
                    padding: '1rem 3rem',
                    borderRadius: '4rem',
                  }}
                >
                  <Row>
                    <div
                      id="QR_heading_container"
                      style={{ marginTop: '1rem' }}
                    >
                      <p id="QR_text">Contact Info</p>
                    </div>
                    <div
                      className="underline"
                      style={{
                        backgroundColor: 'white',
                        marginTop: '-0.5rem',
                        width: '100%',
                      }}
                    />
                  </Row>
                  <Row>
                    <p>
                      <span
                        style={{ marginRight: '0.5rem', fontSize: 'x-large' }}
                      >
                        <IoMdMail />
                      </span>
                      admin@gmail.com
                    </p>
                  </Row>
                  <Row>
                    <p>
                      <span
                        style={{ marginRight: '0.5rem', fontSize: 'x-large' }}
                      >
                        <BsTelephoneFill />
                      </span>
                      9876543210
                    </p>
                  </Row>
                  <Row>
                    <p>
                      <span
                        style={{ marginRight: '0.5rem', fontSize: 'x-large' }}
                      >
                        <AiOutlineClockCircle />
                      </span>
                      09:00am - 15:00pm
                    </p>
                  </Row>
                </Stack>
              </Col>
              <Row
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  marginLeft: '0.25rem',
                }}
              >
                <button className={classes.QRbtn}>Submit</button>
              </Row>
            </Row>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

export default TeacherCard;
