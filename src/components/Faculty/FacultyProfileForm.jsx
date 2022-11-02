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
      // console.log('errrorrr');
      alert('Please fill all the fields');
    } else {
      setValidated(true);
      await dispatch(adminThunk.createFaculty(formData));
      console.log('submit form ', formData);
      navigate('/teacher-profile');
    }
  };
  function onSelect(selectedList, selectedItem) {
    let arr = selectedList.map((data) => data.name);
    if (selectedItem?.check === 'subject') {
      setFormData({ ...formData, subjects: arr });
    } else if (selectedItem?.check === 'course') {
      setFormData({ ...formData, course: arr });
    } else {
      setFormData({ ...formData, semester: arr });
    }
  }

  function onRemove(selectedList, removedItem) {
    let arr = selectedList.map((data) => data.name);
    if (removedItem?.check === 'subject') {
      setFormData({ ...formData, subjects: arr });
    } else if (removedItem?.check === 'course') {
      setFormData({ ...formData, course: arr });
    } else {
      setFormData({ ...formData, semester: arr });
    }
  }

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
                <Form.Label>Faculty Name</Form.Label>
                <Form.Control
                  name="faculty_name"
                  value={faculty_name}
                  onChange={handleChange}
                  required
                  type="text"
                  placeholder="Faculty Name"
                  // defaultValue="Mark"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50" controlId="validationCustom02">
                <Form.Label>Faculty ID</Form.Label>
                <Form.Control name="teacher_id" value={teacher_id} />
              </Form.Group>
              <Form.Group className="w-50" controlId="validationCustom02">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="9876543210"
                  name="contact_number"
                  value={contact_number}
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50" controlId="validationCustom02">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  required
                  name="email_address"
                  value={email_address}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter Email"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50" controlId="validationCustom02">
                <Form.Label>Set Password</Form.Label>
                <Form.Control
                  required
                  name="password"
                  value={password}
                  onChange={handleChange}
                  type="password"
                  placeholder="********"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50" controlId="validationCustom01">
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  required
                  name="designation"
                  value={designation}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Name"
                  // defaultValue="Mark"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50" controlId="validationCustom01">
                <Form.Label>Spouse/Father's Name</Form.Label>
                <Form.Control
                  required
                  name="father_name"
                  value={father_name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Name"
                  // defaultValue="Mark"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50" controlId="validationCustom01">
                <Form.Label>Home Address</Form.Label>
                <Form.Control
                  required
                  name="home_address"
                  value={home_address}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Address"
                  // defaultValue="Mark"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50">
                <select
                  name="city"
                  onChange={handleChange}
                  value={city}
                  className="form-select form-select-md mb-0"
                  aria-label=".form-select-lg example"
                >
                  <option selected>Select City</option>
                  <option value="Bareilly">Bareilly</option>
                  <option value="Noida">Noida</option>
                  <option value="Delhi">Delhi</option>
                </select>
              </Form.Group>

              <Form.Group className="w-50" controlId="validationCustom01">
                <Form.Label>Qualification</Form.Label>
                <Form.Control
                  name="qualifications"
                  value={qualifications}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Qualification"
                  // defaultValue="Mark"
                />
              </Form.Group>
            </Col>

            <Col className="d-grid gap-3" style={{ paddingTop: '2rem' }}>
              <h6 style={{ marginBottom: '-0.25rem' }}>Official Information</h6>
              <Form.Group className="w-50">
                <Form.Label>Select Subject</Form.Label>
                <Multiselect
                  closeOnSelect={true}
                  name="subject"
                  style={multiselectStyle}
                  options={SUBJECT} // Options to display in the dropdown
                  // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                  onSelect={onSelect} // Function will trigger on select event
                  onRemove={onRemove} // Function will trigger on remove event
                  displayValue="name" // Property name to display in the dropdown options

                  // placeholder="Select Subject"
                />
              </Form.Group>
              <Form.Group className="w-50">
                <Form.Label>Select Course</Form.Label>
                <Multiselect
                  style={multiselectStyle}
                  options={COURSE} // Options to display in the dropdown
                  // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                  onSelect={onSelect} // Function will trigger on select event
                  onRemove={onRemove} // Function will trigger on remove event
                  displayValue="name" // Property name to display in the dropdown options
                  // placeholder="Select Course"
                />
              </Form.Group>
              <Form.Group className="w-50">
                <Form.Label>Select Semester</Form.Label>
                <Multiselect
                  style={multiselectStyle}
                  options={SEMESTER} // Options to display in the dropdown
                  // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                  onSelect={onSelect} // Function will trigger on select event
                  onRemove={onRemove} // Function will trigger on remove event
                  displayValue="name" // Property name to display in the dropdown options
                  // placeholder="Select Semester"
                />
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
    // To change css for multiselect (Width,height,etc..)
  },
  searchBox: {
    // To change search box element look
    border: 'none',
    background: 'white',
    // fontSize: "10px",
    // minHeight: "50px"
  },
  inputField: {
    // To change input field position or margin
    margin: '5px',
  },
  chips: {
    // To change css chips(Selected options)
    color: 'white',
    backgroundColor: '#fd8473',
  },
  optionContainer: {
    // To change css for option container
    border: 'none',
    backgroundColor: '#fd8473',
  },
  option: {
    // To change css for dropdown options
  },
  groupHeading: {
    // To chanage group heading style
  },
};
