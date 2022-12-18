import React, { useState } from 'react';

import {
  Container,
  Row,
  Col,
  Stack,
  Form,
  Modal,
  Button,
} from 'react-bootstrap';
import { IoMdMail } from 'react-icons/io';
import { AiOutlineClockCircle } from 'react-icons/ai';
import QRCode from 'react-qr-code';
import { BsTelephoneFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';

import CustomModal from '../../utils/customModal/CustomModal';
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
  const { loading, courseList, semesterList, classList, subjectList } =
    useSelector((state) => state.commonState);

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
                  {semesterList?.map((data, index) => (
                    <option key={data?._id} value={data?.student_semester}>
                      {data?.student_semester}{' '}
                    </option>
                  ))}
                  {/* <option value="BTECH">B Tech</option>
                  <option value="MBA">MBA</option>
                  <option value="B COM">B COM</option>
                  <option value="BCA">BCA</option> */}
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
                  {courseList?.map((data, index) => (
                    <option key={data?._id} value={data?.student_course}>
                      {data?.student_course}
                    </option>
                  ))}
                  {/* <option value="BTECH">B Tech</option>
                  <option value="MBA">MBA</option>
                  <option value="B COM">B COM</option>
                  <option value="BCA">BCA</option> */}
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
                <Button
                  style={{ width: '100%' }}
                  size="lg"
                  onClick={handleClose}
                >
                  Close
                </Button>
              </Modal.Footer>
            </CustomModal>
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
