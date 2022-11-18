import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Stack, Form } from 'react-bootstrap';
import { IoMdMail } from 'react-icons/io';
import { AiOutlineClockCircle } from 'react-icons/ai';
import QRCode from 'react-qr-code';
import { BsTelephoneFill } from 'react-icons/bs';
import QRicon from '../../../assests/QRicon.png';
import shareicon from '../../../assests/shareicon.png';

import classes from './TeacherDashboard.module.css';
const initialState = {
  semester: '',
  course: '',
  classs: '',
  lecture: '',
  facultyName: '',
  timeSlotStart: '',
  timeSlotEnd: '',
};

function TeacherCard() {
  const [formValue, setFormValue] = useState(initialState);
  const [QRShow, setQrShow] = useState(false);
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    if (!!errors[name]) setErrors({ ...errors, [name]: null });
  };
  const validateForm = () => {
    const {
      semester,
      course,
      classs,
      lecture,
      facultyName,
      timeSlotStart,
      timeSlotEnd,
    } = formValue;
    const newError = {};
    if (!semester || semester === '')
      newError.semester = 'Please enter semester.';
    if (!course || course === '') newError.course = 'Please enter course.';
    if (!classs || classs === '') newError.classs = 'Please enter class.';
    if (!lecture || lecture === '') newError.lecture = 'Please enter lecture.';
    if (!timeSlotStart || timeSlotStart === '')
      newError.timeSlotStart = 'Please enter time.';
    if (!timeSlotEnd || timeSlotEnd === '')
      newError.timeSlotEnd = 'Please enter time.';
    if (!facultyName || facultyName === '')
      newError.facultyName = 'Please enter faculty name.';

    return newError;
  };

  const handleQR = () => {
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setQrShow(true);
      setTimeout(() => {
        setFormValue(initialState);
        setQrShow(false);
      }, 30000);
    }

    // console.log('handle Qr', formValue);
  };
  const {
    semester,
    course,
    classs,
    lecture,
    facultyName,
    timeSlotStart,
    timeSlotEnd,
  } = formValue;
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
              <Form.Group>
                <label for="Semester" id="lables">
                  Enter Semester
                </label>
                <input
                  type="text"
                  placeholder="Semester 1"
                  aria-label="First name"
                  className={`${classes.QR_form_inputs} ${
                    !!errors.semester && 'redBorder'
                  } form-control`}
                  name="semester"
                  value={semester}
                  onChange={handleChange}
                />
                <Form.Control.Feedback
                  className={`${!!errors?.semester && 'errorText'}`}
                  type={!!errors?.semester}
                >
                  {errors?.semester}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <label for="Course" id="lables">
                  Enter Course
                </label>
                <input
                  type="text"
                  placeholder="B.Tech"
                  aria-label="B.Tech"
                  className={`${classes.QR_form_inputs} ${
                    !!errors.course && 'redBorder'
                  } form-control`}
                  name="course"
                  value={course}
                  onChange={handleChange}
                />
                <Form.Control.Feedback
                  className={`${!!errors?.course && 'errorText'}`}
                  type={!!errors?.course}
                >
                  {errors?.course}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <label for="Class" id="lables">
                  Enter Class
                </label>
                <input
                  type="text"
                  placeholder="CSE-II"
                  aria-label="class"
                  className={`${classes.QR_form_inputs} ${
                    !!errors.classs && 'redBorder'
                  } form-control`}
                  name="classs"
                  value={classs}
                  onChange={handleChange}
                />
                <Form.Control.Feedback
                  className={`${!!errors?.classs && 'errorText'}`}
                  type={!!errors?.classs}
                >
                  {errors?.classs}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col id="form">
              <Form.Group>
                <label for="Lecture" id="lables">
                  Enter Lecture
                </label>
                <input
                  type="text"
                  placeholder="Physics-1"
                  aria-label="Lecture"
                  className={`${classes.QR_form_inputs} ${
                    !!errors.lecture && 'redBorder'
                  } form-control`}
                  name="lecture"
                  value={lecture}
                  onChange={handleChange}
                />
                <Form.Control.Feedback
                  className={`${!!errors?.lecture && 'errorText'}`}
                  type={!!errors?.lecture}
                >
                  {errors?.lecture}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <label for="Faculty" id="lables">
                  Enter Faculty Name
                </label>
                <input
                  type="text"
                  placeholder="Sangeet Das"
                  aria-label="Faculty Name"
                  className={`${classes.QR_form_inputs} ${
                    !!errors.facultyName && 'redBorder'
                  } form-control`}
                  name="facultyName"
                  value={facultyName}
                  onChange={handleChange}
                />
                <Form.Control.Feedback
                  className={`${!!errors?.facultyName && 'errorText'}`}
                  type={!!errors?.facultyName}
                >
                  {errors?.facultyName}
                </Form.Control.Feedback>
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group>
                    <label for="Time" id="lables">
                      Select Start Time
                    </label>
                    <input
                      type="time"
                      // placeholder="9:00AM-11:00Am"
                      aria-label="timeSlotStart"
                      className={`${classes.QR_form_inputs} ${
                        !!errors.timeSlotStart && 'redBorder'
                      } form-control`}
                      name="timeSlotStart"
                      value={timeSlotStart}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback
                      className={`${!!errors?.timeSlotStart && 'errorText'}`}
                      type={!!errors?.timeSlotStart}
                    >
                      {errors?.timeSlotStart}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <label for="Time" id="lables">
                      Select End Time
                    </label>
                    <input
                      type="time"
                      // placeholder="9:00AM-11:00Am"
                      aria-label="timeSlotEnd"
                      className={`${classes.QR_form_inputs} ${
                        !!errors.timeSlotEnd && 'redBorder'
                      } form-control`}
                      name="timeSlotEnd"
                      value={timeSlotEnd}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback
                      className={`${!!errors?.timeSlotEnd && 'errorText'}`}
                      type={!!errors?.timeSlotEnd}
                    >
                      {errors?.timeSlotEnd}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
            </Col>
            <Row
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {QRShow && (
                <div
                  style={{
                    width: '30vw',
                    height: '20vh',
                    // border: '1px solid blue',
                  }}
                >
                  <QRCode
                    size={100}
                    style={{
                      height: '40vh',
                      width: '100%',
                    }}
                    value={JSON.stringify(formValue)}
                    viewBox={`-60 -50 256 256`}
                  />
                </div>
              )}
            </Row>
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
