import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { customAlphabet } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../topBar/HeaderBanner/Banner';
import classes from './StudentProfileForm.module.css';
import { adminThunk } from '../../redux/pages';

const nanoid = customAlphabet('1234567890', 10);

const initialState = {
  student_name: '',
  student_id: nanoid(8),
  student_semester: '',
  student_course: '',
  student_class: '',
  student_contact_number: '',
  student_email: '',
  student_home_address: '',
  student_city: '',
  father_name: '',
  father_email: '',
  father_contact_number: '',
  father_city: '',
};

function StudentProfileForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      alert('Please fill all the fields');
    } else {
      setValidated(true);
      await dispatch(adminThunk.createStudent(formData));
      console.log('form Submit', formData);
      alert('Student Successfully Created');
      setFormData(initialState);
      navigate('/student-profile');
    }
  };

  const {
    student_name,
    student_id,
    student_course,
    student_class,
    student_semester,
    student_contact_number,
    student_email,
    student_home_address,
    student_city,
    father_name,
    father_email,
    father_contact_number,
    father_city,
  } = formData;

  return (
    <>
      <Banner style={{ height: '6rem', display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            color: 'white',
          }}
        >
          <h3>Create Profile</h3>
        </div>
      </Banner>

      <div className={classes.container}>
        <div className={classes.subContainer}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Col className="d-grid gap-3" style={{ paddingTop: '2rem' }}>
              <Form.Group className="w-50" controlId="validationCustom01">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Full Name"
                  name="student_name"
                  value={student_name}
                  onChange={handleChange}
                  // defaultValue="Mark"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50" controlId="validationCustom02">
                <Form.Label>Student ID</Form.Label>
                <Form.Control
                  // disabled
                  // type="number"
                  name="student_id"
                  value={student_id}
                />
              </Form.Group>

              <Form.Group className="w-50">
                <select
                  className="form-select form-select-md mb-0"
                  aria-label=".form-select-lg example"
                  name="student_course"
                  onChange={handleChange}
                  value={student_course}
                >
                  <option selected>Select student_course</option>
                  <option value="BTECH">B Tech</option>
                  <option value="MBA">MBA</option>
                  <option value="B COM">B COM</option>
                  <option value="BCA">BCA</option>
                </select>
              </Form.Group>
              <Form.Group className="w-50">
                <select
                  className="form-select form-select-md mb-0"
                  aria-label=".form-select-lg example"
                  name="student_class"
                  onChange={handleChange}
                >
                  <option selected>Select Class</option>
                  <option value="Class 1">Class 1</option>
                  <option value="Class 2">Class 2</option>
                  <option value="Class 3">Class 3</option>
                  <option value="Class 4">Class 4</option>
                  <option value="Class 5">Class 5</option>
                  <option value="Class 6">Class 6</option>
                  <option value="Class 7">Class 7</option>
                  <option value="Class 8">Class 8</option>
                  <option value="Class 9">Class 9</option>
                </select>
              </Form.Group>
              <Form.Group className="w-50">
                <select
                  className="form-select form-select-md mb-0"
                  aria-label=".form-select-lg example"
                  name="student_semester"
                  onChange={handleChange}
                >
                  <option selected>Select Semester</option>
                  <option value="Semester 1">Semester I</option>
                  <option value="Semester 2">Semester II</option>
                  <option value="Semester 3">Semester III</option>
                  <option value="Semester 4">Semester IV</option>
                  <option value="Semester 5">Semester V</option>
                  <option value="Semester 6">Semester VI</option>
                  <option value="Semester 7">Semester VII</option>
                  <option value="Semester 8">Semester VIII</option>
                </select>
              </Form.Group>
            </Col>
            <Col className="d-grid gap-3" style={{ paddingTop: '2rem' }}>
              <h6 style={{ marginBottom: '-0.25rem' }}>Personal Information</h6>

              <Form.Group className="w-50" controlId="validationCustom02">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="9876543210"
                  name="student_contact_number"
                  value={student_contact_number}
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="w-50" controlId="validationCustom02">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  required
                  type="student_email"
                  placeholder="Enter Email"
                  name="student_email"
                  value={student_email}
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50" controlId="validationCustom03">
                <Form.Label>Home Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Home Address"
                  required
                  name="student_home_address"
                  value={student_home_address}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Address.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50">
                <select
                  className="form-select form-select-md mb-0"
                  aria-label=".form-select-lg example"
                  name="student_city"
                  onChange={handleChange}
                >
                  <option selected>Select City</option>
                  <option value="Bareilly">Bareilly</option>
                  <option value="Kanupur">Kanpur</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Noida">Noida</option>
                </select>
              </Form.Group>
            </Col>

            <Col className="d-grid gap-3" style={{ paddingTop: '2rem' }}>
              <h6 style={{ marginBottom: '-0.25rem' }}>Personal Information</h6>
              <Form.Group className="w-50" controlId="validationCustom01">
                <Form.Label>Father name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Father Name"
                  name="father_name"
                  value={father_name}
                  onChange={handleChange}
                  // defaultValue="Mark"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="w-50" controlId="validationCustom02">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="9876543210"
                  name="father_contact_number"
                  value={father_contact_number}
                  onChange={handleChange}
                  // defaultValue="Otto"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="w-50" controlId="validationCustom02">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter Email"
                  name="father_email"
                  value={father_email}
                  onChange={handleChange}
                  // defaultValue="Otto"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50">
                <select
                  className="form-select form-select-md mb-0"
                  aria-label=".form-select-lg example"
                  name="father_city"
                  onChange={handleChange}
                >
                  <option selected>Select City</option>
                  <option value="Bareilly">Bareilly</option>
                  <option value="Kanupur">Kanpur</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Noida">Noida</option>
                </select>
              </Form.Group>
            </Col>
            <Row className="w-50" style={{ margin: '2rem 0rem' }}>
              <Col>
                <Button className={classes.button} type="submit">
                  Submit
                </Button>
              </Col>
              <Col>
                <Button className={classes.button} onClick={() => navigate(-1)}>
                  Cancel
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
}

export default StudentProfileForm;
