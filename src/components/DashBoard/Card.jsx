import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Stack,
  Form,
  Modal,
  Button,
} from 'react-bootstrap';
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
import CustomModal from '../utils/customModal/CustomModal';

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
  const handleClose = () => {
    setQrShow(false);
  };
  const handleShow = (profileData) => {
    setQrShow(true);
  };
  const handleQR = () => {
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setQrShow(true);
      // setTimeout(() => {
      //   setFormValue(initialState);
      //   setQrShow(false);
      // }, 30000);
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
                <Form.Label>Semester</Form.Label>
                <Form.Control
                  className={`form-select form-select-md mb-0 ${classes.QR_form_inputs}`}
                  aria-label=".form-select-lg example"
                  name="semester"
                  onChange={handleChange}
                  value={semester}
                  isInvalid={!!errors?.semester}
                  required
                  as="select"
                  type="select"
                  size="lg"
                >
                  <option defaultValue="">Select Semester</option>
                  <option value="BTECH">B Tech</option>
                  <option value="MBA">MBA</option>
                  <option value="B COM">B COM</option>
                  <option value="BCA">BCA</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors?.semester}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Course</Form.Label>
                <Form.Control
                  className={`form-select form-select-md mb-0 ${classes.QR_form_inputs}`}
                  aria-label=".form-select-lg example"
                  name="course"
                  onChange={handleChange}
                  value={course}
                  isInvalid={!!errors?.course}
                  required
                  as="select"
                  type="select"
                >
                  <option defaultValue="">Select Course</option>
                  <option value="BTECH">B Tech</option>
                  <option value="MBA">MBA</option>
                  <option value="B COM">B COM</option>
                  <option value="BCA">BCA</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors?.course}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Class</Form.Label>
                <Form.Control
                  className={`form-select form-select-md mb-0 ${classes.QR_form_inputs}`}
                  aria-label=".form-select-lg example"
                  name="classs"
                  onChange={handleChange}
                  value={classs}
                  isInvalid={!!errors?.classs}
                  required
                  as="select"
                  type="select"
                >
                  <option defaultValue="">Select Class</option>
                  <option value="Class 1">Class 1</option>
                  <option value="Class 2">Class 2</option>
                  <option value="Class 3">Class 3</option>
                  <option value="Class 4">Class 4</option>
                  <option value="Class 5">Class 5</option>
                  <option value="Class 6">Class 6</option>
                  <option value="Class 7">Class 7</option>
                  <option value="Class 8">Class 8</option>
                  <option value="Class 9">Class 9</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors?.classs}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col id="form">
              <Form.Label>Lecture</Form.Label>
              <Form.Control
                className={`form-select form-select-md mb-0 ${classes.QR_form_inputs}`}
                aria-label=".form-select-lg example"
                name="lecture"
                onChange={handleChange}
                value={lecture}
                isInvalid={!!errors?.lecture}
                required
                as="select"
                type="select"
              >
                <option defaultValue="">Select Lecture</option>
                <option value="Lecture 1">Lecture 1</option>
                <option value="Lecture 2">Lecture 2</option>
                <option value="Lecture 3">Lecture 3</option>
                <option value="Lecture 4">Lecture 4</option>
                <option value="Lecture 5">Lecture 5</option>
                <option value="Lecture 6">Lecture 6</option>
                <option value="Lecture 7">Lecture 7</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors?.lecture}
              </Form.Control.Feedback>
              <Form.Group>
                <Form.Label>Faculty Name</Form.Label>
                <Form.Control
                  className={`form-select form-select-md mb-0 ${classes.QR_form_inputs}`}
                  aria-label=".form-select-lg example"
                  name="facultyName"
                  onChange={handleChange}
                  value={facultyName}
                  isInvalid={!!errors?.facultyName}
                  required
                  as="select"
                  type="select"
                >
                  <option defaultValue="">Select Faculty</option>
                  <option value="Devansh">Devansh</option>
                  <option value="Prashant">Prashant</option>
                  <option value="Nate">Nate</option>
                  <option value="Palak">Palak</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors?.facultyName}
                </Form.Control.Feedback>
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label> Select Start Time</Form.Label>
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
                    <Form.Label> Select End Time</Form.Label>
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

            <Row style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <button onClick={handleQR} className={classes.QRbtn}>
                Generate QR
              </button>
            </Row>
          </Row>
        </Stack>
      </Container>
      {/* QR-container-ends */}

      <CustomModal
        show={QRShow}
        handleShow={handleShow}
        handleClose={handleClose}
      >
        <Modal.Body>
          <QRCode
            // size={150}
            style={{
              height: '80vh',
              width: '40vw',
            }}
            value={JSON.stringify(formValue)}
            viewBox={`0 0 256 256`}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ width: '100%' }} size="lg" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </CustomModal>
    </>
  );
};

export default Cards;
