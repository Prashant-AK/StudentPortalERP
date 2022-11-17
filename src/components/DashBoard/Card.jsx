import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Stack, Form } from 'react-bootstrap';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import QRCode from 'react-qr-code';

import { Bar } from 'react-chartjs-2';

import QRicon from '../../assests/QRicon.png';
import shareicon from '../../assests/shareicon.png';
import { BiQrScan } from 'react-icons/bi';
import { BsFillSquareFill } from 'react-icons/bs';

import items from './Data';
import classes from './Dashboard.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [564, 92, 725, 909, 602, 727, 332],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [83, 31, 39, 67, 76, 49, 298],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};
const initialState = {
  semester: '',
  course: '',
  classs: '',
  lecture: '',
  facultyName: '',
  timeSlotStart: '',
  timeSlotEnd: '',
};
const Cards = () => {
  const [value, onChange] = useState(new Date());
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
              justifyContent: 'space-between',
              margin: '0px 30px 0px 25px',
            }}
          >
            <Col
              style={{
                backgroundColor: '#f5fafd',
                marginRight: '1rem',
                borderRadius: '20px',
                padding: '1rem',
                marginBottom: '10px',
              }}
            >
              <Stack gap={5} style={{ alignItems: 'center' }}>
                <div
                  style={{
                    width: '100%',
                  }}
                >
                  <span style={{ display: 'inline' }}>
                    <img
                      src={QRicon}
                      height="25"
                      width="25"
                      style={{ marginRight: '0.5rem' }}
                    />
                    <p style={{ display: 'inline' }} id="QR_text">
                      Faculty Statistics
                    </p>
                  </span>
                </div>
                <div style={{ width: '300px' }}>
                  <CircularProgressbarWithChildren
                    styles={buildStyles({
                      textColor: '#002154',
                      pathColor: '#002154',
                      // trailColor: 'gold',
                    })}
                    value={66}
                  >
                    <Stack
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <p style={{ fontSize: '2rem', fontWeight: 500 }}> 66%</p>
                      <p style={{ fontSize: '1.35rem', marginTop: '-1.25rem' }}>
                        Present today
                      </p>
                    </Stack>
                  </CircularProgressbarWithChildren>
                </div>
                <div
                  style={{
                    width: '50%',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    margin: '-1rem 0rem',
                  }}
                >
                  <span>
                    <BsFillSquareFill
                      style={{
                        color: '#002154',
                        marginTop: '-3px',
                      }}
                    />{' '}
                    <b style={{ marginLeft: '2px' }}>Present</b>
                  </span>
                  <span>
                    <BsFillSquareFill
                      style={{
                        color: '#d6d6d6',
                        marginTop: '-3px',
                      }}
                    />{' '}
                    <b style={{ marginLeft: '2px' }}>Absent</b>
                  </span>
                </div>
                <Link
                  to="/"
                  style={{ textDecoration: 'none', marginTop: '-0.25rem' }}
                  className={classes.button}
                >
                  View Attendance
                </Link>
              </Stack>
            </Col>
            <Col
              style={{
                backgroundColor: '#f5fafd',
                borderRadius: '20px',
                padding: '1rem',
                marginBottom: '10px',
              }}
            >
              <Stack
                gap={5}
                style={{
                  display: 'flex',
                  height: '100%',
                }}
              >
                <Row>
                  <span style={{ display: 'inline' }}>
                    <img
                      src={QRicon}
                      height="25"
                      width="25"
                      style={{ marginRight: '0.5rem' }}
                    />
                    <p style={{ display: 'inline' }} id="QR_text">
                      Students Statistics
                    </p>
                  </span>
                </Row>
                <Row>
                  {/* dropdown */}
                  <Col>
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
                      <option value="1">One</option>
                    </select>
                  </Col>

                  <Col>
                    {' '}
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
                      <option selected>Select Class</option>
                      <option value="1">One</option>
                    </select>
                  </Col>
                </Row>
                <Row style={{ flex: 1, alignItems: 'center' }}>
                  <Bar options={options} data={data} />
                </Row>
              </Stack>
            </Col>
          </Row>

          <Row
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              margin: '0px 30px 0px 25px',
              borderRadius: '30px',
              backgroundColor: '#f5fafd',
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
              <button onClick={handleQR} className={classes.QRbtn}>
                Generate QR
              </button>
            </Row>
          </Row>
        </Stack>
      </Container>
      {/* QR-container-ends */}
    </>
  );
};

export default Cards;
