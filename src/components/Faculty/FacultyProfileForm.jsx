import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Button, Row, Form } from 'react-bootstrap';
import Multiselect from 'multiselect-react-dropdown';
import { customAlphabet } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../topBar/HeaderBanner/Banner';
import classes from './FacultProfileForm.module.css';
import { adminThunk } from '../../redux/pages';

const nanoid = customAlphabet('1234567890', 10);

const SUBJECT = [
  { name: 'Subject 1️', check: 'subject', id: 1 },
  { name: 'Subject 2️', check: 'subject', id: 2 },
  { name: 'Subject 3', check: 'subject', id: 3 },
];
const COURSE = [
  { name: 'Course 1️', check: 'course', id: 1 },
  { name: 'Course 2️', check: 'course', id: 2 },
  { name: 'Course 3', check: 'course', id: 3 },
];
const SEMESTER = [
  { name: 'Semester 1️', check: 'semester', id: 1 },
  { name: 'Semester 2️', check: 'semester', id: 2 },
  { name: 'Semester 3', check: 'semester', id: 3 },
];
const initialState = {
  teacher_id: nanoid(8),
  faculty_name: '',
  contact_number: '',
  email_address: '',
  password: '',
  city: '',
  father_name: '',
  home_address: '',
  designation: '',
  qualifications: '',
  subjects: [],
  course: [],
  semester: [],
};
function FacultyProfileForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    if (!!errors[name]) setErrors({ ...errors, [name]: null });
  };

  function onSelect(selectedList, selectedItem) {
    let arr = selectedList.map((data) => data.name);
    if (selectedItem?.check === 'subject') {
      setFormValues({ ...formValues, subjects: arr });
      if (!!errors['subjects']) setErrors({ ...errors, subjects: null });
    } else if (selectedItem?.check === 'course') {
      setFormValues({ ...formValues, course: arr });
      if (!!errors['course']) setErrors({ ...errors, course: null });
    } else {
      setFormValues({ ...formValues, semester: arr });
      if (!!errors['semester']) setErrors({ ...errors, semester: null });
    }
  }

  function onRemove(selectedList, removedItem) {
    let arr = selectedList.map((data) => data.name);
    if (removedItem?.check === 'subject') {
      setFormValues({ ...formValues, subjects: arr });
    } else if (removedItem?.check === 'course') {
      setFormValues({ ...formValues, course: arr });
    } else {
      setFormValues({ ...formValues, semester: arr });
    }
  }

  const validateForm = () => {
    const {
      teacher_id,
      faculty_name,
      contact_number,
      email_address,
      password,
      father_name,
      home_address,
      city,
      designation,
      qualifications,
      subjects,
      course,
      semester,
    } = formValues;
    const newError = {};
    if (!faculty_name || faculty_name === '')
      newError.faculty_name = 'Please enter name.';
    if (!father_name || father_name === '')
      newError.father_name = 'Please enter name.';
    if (!course || course?.length <= 0)
      newError.course = 'Please select course';
    if (!subjects || subjects?.length <= 0)
      newError.subjects = 'Please select subjects';
    if (!semester || semester?.length <= 0)
      newError.semester = 'Please select semester';
    if (!password || password === '')
      newError.password = 'Please enter password.';
    if (!city || city === '') newError.city = 'Please select city.';
    if (!contact_number || contact_number === '')
      newError.contact_number = 'Please enter contact number';
    if (!home_address || home_address === '')
      newError.home_address = 'Please enter home address';
    if (!email_address || email_address === '')
      newError.email_address = 'Please enter email.';
    if (!designation || designation === '')
      newError.designation = 'Please enter designation.';
    if (!qualifications || qualifications === '')
      newError.qualifications = 'Please enter qualifications.';

    return newError;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
    }

    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();

    // }
    // if (form.checkValidity() === false) {
    // console.log('errrorrr');
    // alert('Please fill all the fields');
    // } else {
    // setValidated(true);

    // await dispatch(
    //   adminThunk.createEvent({ ...formValues, file: uploadImage })
    // );

    // console.log(
    //   'submit form ',
    //   // file: uploadImage,
    //   form_Data.get('')
    // );
    // navigate('/events');
    // }
  };
  const {
    teacher_id,
    faculty_name,
    contact_number,
    email_address,
    password,
    father_name,
    home_address,
    city,
    designation,
    qualifications,
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
              <Form.Group className="w-50" controlId="faculty_name">
                <Form.Label>Faculty Name</Form.Label>
                <Form.Control
                  name="faculty_name"
                  value={faculty_name}
                  onChange={handleChange}
                  required
                  type="text"
                  placeholder="Faculty Name"
                  isInvalid={!!errors?.faculty_name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.faculty_name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50" controlId="validationCustom02">
                <Form.Label>Faculty ID</Form.Label>
                <Form.Control name="teacher_id" value={teacher_id} />
              </Form.Group>
              <Form.Group className="w-50" controlId="contact_number">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="9876543210"
                  name="contact_number"
                  value={contact_number}
                  onChange={handleChange}
                  isInvalid={!!errors?.contact_number}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.contact_number}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50" controlId="email_address">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  required
                  name="email_address"
                  value={email_address}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter Email"
                  isInvalid={!!errors?.email_address}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.email_address}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50" controlId="password">
                <Form.Label>Set Password</Form.Label>
                <Form.Control
                  required
                  name="password"
                  value={password}
                  onChange={handleChange}
                  type="password"
                  placeholder="********"
                  isInvalid={!!errors?.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.password}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50" controlId="designation">
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  required
                  name="designation"
                  value={designation}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Name"
                  // defaultValue="Mark"

                  isInvalid={!!errors?.designation}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.designation}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50" controlId="father_name">
                <Form.Label>Spouse/Father's Name</Form.Label>
                <Form.Control
                  required
                  name="father_name"
                  value={father_name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Name"
                  isInvalid={!!errors?.father_name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.father_name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50" controlId="home_address">
                <Form.Label>Home Address</Form.Label>
                <Form.Control
                  required
                  name="home_address"
                  value={home_address}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Address"
                  isInvalid={!!errors?.home_address}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.home_address}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50" controlId="city">
                <Form.Control
                  className="form-select form-select-md mb-0"
                  aria-label=".form-select-lg example"
                  name="city"
                  onChange={handleChange}
                  value={city}
                  isInvalid={!!errors?.city}
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
                  {errors?.city}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="w-50" controlId="qualifications">
                <Form.Label>Qualification</Form.Label>
                <Form.Control
                  name="qualifications"
                  value={qualifications}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Qualification"
                  isInvalid={!!errors?.qualifications}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.qualifications}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col className="d-grid gap-3" style={{ paddingTop: '2rem' }}>
              <h6 style={{ marginBottom: '-0.25rem' }}>Official Information</h6>
              <Form.Group className="w-50">
                <Form.Label>Select Subject</Form.Label>
                <Multiselect
                  className={`${!!errors.subjects && 'redBorder'}`}
                  closeOnSelect={true}
                  name="subjects"
                  style={multiselectStyle}
                  options={SUBJECT}
                  onSelect={onSelect}
                  onRemove={onRemove}
                  displayValue="name"
                />
                <Form.Control.Feedback
                  className={`${!!errors?.subjects && 'errorText'}`}
                  type={!!errors?.subjects}
                >
                  {errors?.subjects}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50">
                <Form.Label>Select Course</Form.Label>
                <Multiselect
                  className={`${!!errors.course && 'redBorder'}`}
                  style={multiselectStyle}
                  options={COURSE}
                  onSelect={onSelect}
                  onRemove={onRemove}
                  displayValue="name"
                  name="course"
                />
                <Form.Control.Feedback
                  className={`${!!errors?.course && 'errorText'}`}
                  type={!!errors?.course}
                >
                  {errors?.course}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50">
                <Form.Label>Select Semester</Form.Label>
                <Multiselect
                  className={`${!!errors.semester && 'redBorder'}`}
                  style={multiselectStyle}
                  options={SEMESTER} // Options to display in the dropdown
                  // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                  onSelect={onSelect} // Function will trigger on select event
                  onRemove={onRemove} // Function will trigger on remove event
                  displayValue="name" // Property name to display in the dropdown options
                  name="semester"
                />
                <Form.Control.Feedback
                  className={`${!!errors?.semester && 'errorText'}`}
                  type={!!errors?.semester}
                >
                  {errors?.semester}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Row className="w-50" style={{ margin: '2rem 0rem' }}>
              <Col>
                <Button className={classes.button} type="submit">
                  Submit
                </Button>
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

export default FacultyProfileForm;

const multiselectStyle = {
  multiselectContainer: {
    borderRadius: '6px',
    // To change css for multiselect (Width,height,etc..)
  },
  searchBox: {
    // To change search box element look
    border: 'none',
    background: 'white',
  },
  inputField: {
    // To change input field position or margin
    margin: '5px',
  },
  chips: {
    // To change css chips(Selected options)
    color: 'black',
    backgroundColor: '#eaf4ff',
  },
  optionContainer: {
    // To change css for option container
    border: 'none',
    backgroundColor: '#eaf4ff',
  },
  option: {
    // To change css for dropdown options
    // backgroundColor: '#eaf4ff',
    color: 'black',
  },
  groupHeading: {
    // To chanage group heading style
  },
};
