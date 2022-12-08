import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
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
  let { studentId } = useParams();
  const { state } = useLocation();
  const [formValues, setformValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const { loading, data, error } = useSelector((state) => state.adminState);

  useEffect(() => {
    if (!loading && data?.is_success) {
      setformValues(initialState);
      setErrors({});
      navigate('/student-profile');
    }
    if (error) {
      alert('Something went wrong');
      navigate('/student-profile');
    }
    return () => {
      // setLoaded(false)
    };
  }, [loading, data, error]);
  console.log(loading, data, error);
  useEffect(() => {
    if (studentId) {
      // dispatch(adminThunk.getStudentDetails(studentId))
      setformValues(state);
    }
    return () => {
      console.log('return');
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
    if (!!errors[name]) setErrors({ ...errors, [name]: null });
  };

  const validateForm = () => {
    const {
      student_name,
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
    } = formValues;
    const newError = {};
    if (!student_name || student_name === '')
      newError.student_name = 'Please enter name.';
    if (!father_name || father_name === '')
      newError.father_name = 'Please enter name.';
    if (!student_course || student_course === '')
      newError.student_course = 'Please select course';
    if (!student_class || student_class === '')
      newError.student_class = 'Please select class';
    if (!student_semester || student_semester === '')
      newError.student_semester = 'Please select semester';
    if (!student_city || student_city === '')
      newError.student_city = 'Please select city.';
    if (!father_city || father_city === '')
      newError.father_city = 'Please select city.';
    if (!student_contact_number || student_contact_number === '')
      newError.student_contact_number = 'Please enter contact number';
    if (!father_contact_number || father_contact_number === '')
      newError.father_contact_number = 'Please enter contact number';
    if (!student_home_address || student_home_address === '')
      newError.student_home_address = 'Please enter address.';
    if (!student_email || student_email === '')
      newError.student_email = 'Please enter email.';
    if (!father_email || father_email === '')
      newError.father_email = 'Please enter email.';

    return newError;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      if (!studentId) await dispatch(adminThunk.createStudent(formValues));
      else await dispatch(adminThunk.updateStudentDetail(formValues));
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
  } = formValues;

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
          <Form noValidate onSubmit={handleSubmit}>
            <Col className="d-grid gap-3" style={{ paddingTop: '2rem' }}>
              <Form.Group className="w-50" controlId="student_name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Full Name"
                  name="student_name"
                  value={student_name}
                  onChange={handleChange}
                  isInvalid={!!errors?.student_name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.student_name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50" controlId="validationCustom02">
                <Form.Label>Student ID</Form.Label>
                <Form.Control name="student_id" value={student_id} />
              </Form.Group>
              <Form.Group className="w-50" controlId="student_course">
                <Form.Control
                  className="form-select form-select-md mb-0"
                  aria-label=".form-select-lg example"
                  name="student_course"
                  onChange={handleChange}
                  value={student_course}
                  isInvalid={!!errors?.student_course}
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
                  {errors?.student_course}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50" controlId="student_class">
                <Form.Control
                  className="form-select form-select-md mb-0"
                  aria-label=".form-select-lg example"
                  name="student_class"
                  onChange={handleChange}
                  value={student_class}
                  isInvalid={!!errors?.student_class}
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
                  {errors?.student_class}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50" controlId="student_semester">
                <Form.Control
                  className="form-select form-select-md mb-0"
                  aria-label=".form-select-lg example"
                  name="student_semester"
                  onChange={handleChange}
                  value={student_semester}
                  isInvalid={!!errors?.student_semester}
                  required
                  as="select"
                  type="select"
                >
                  <option defaultValue="">Select Semester</option>
                  <option value="Semester 1">Semester I</option>
                  <option value="Semester 2">Semester II</option>
                  <option value="Semester 3">Semester III</option>
                  <option value="Semester 4">Semester IV</option>
                  <option value="Semester 5">Semester V</option>
                  <option value="Semester 6">Semester VI</option>
                  <option value="Semester 7">Semester VII</option>
                  <option value="Semester 8">Semester VIII</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors?.student_semester}
                </Form.Control.Feedback>
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
                  isInvalid={!!errors?.student_contact_number}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.student_contact_number}
                </Form.Control.Feedback>
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
                  isInvalid={!!errors?.student_email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.student_email}
                </Form.Control.Feedback>
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
                  isInvalid={!!errors?.student_home_address}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.student_home_address}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50" controlId="student_city">
                <Form.Control
                  className="form-select form-select-md mb-0"
                  aria-label=".form-select-lg example"
                  name="student_city"
                  onChange={handleChange}
                  value={student_city}
                  isInvalid={!!errors?.student_city}
                  required
                  as="select"
                  type="select"
                >
                  <option defaultValue="">Assign City</option>
                  <option value="Bareilly">Bareilly</option>
                  <option value="Kanupur">Kanpur</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Noida">Noida</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors?.student_city}
                </Form.Control.Feedback>
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
                  isInvalid={!!errors?.father_name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.father_name}
                </Form.Control.Feedback>
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
                  isInvalid={!!errors?.father_contact_number}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.father_contact_number}
                </Form.Control.Feedback>
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
                  isInvalid={!!errors?.father_email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.father_email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50" controlId="father_city">
                <Form.Control
                  className="form-select form-select-md mb-0"
                  aria-label=".form-select-lg example"
                  name="father_city"
                  onChange={handleChange}
                  value={father_city}
                  isInvalid={!!errors?.father_city}
                  required
                  as="select"
                  type="select"
                >
                  <option defaultValue="">Assign City</option>
                  <option value="Bareilly">Bareilly</option>
                  <option value="Kanupur">Kanpur</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Noida">Noida</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors?.father_city}
                </Form.Control.Feedback>
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
