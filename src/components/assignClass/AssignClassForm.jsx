import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Row, Form } from 'react-bootstrap';

import classes from './AssignClassForm.module.css';
import Banner from '../topBar/HeaderBanner/Banner';

const initialState = {
  Course: '',
  Course_class: '',
  Semester: '',
  Teacher: '',
  Assign_class: '',
  Lecture: '',
  Assign_substitution: '',
};

function AssignClassForm() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    if (!!errors[name]) setErrors({ ...errors, [name]: null });
  };
  const validateForm = () => {
    const {
      Course,
      Course_class,
      Semester,
      Teacher,
      Assign_class,
      Lecture,
      Assign_substitution,
    } = formValues;
    const newError = {};
    if (!Assign_substitution || Assign_substitution === '')
      newError.Assign_substitution = 'Please enter name';
    if (!Course || Course === '') newError.Course = 'Please select Course';
    if (!Semester || Semester === '')
      newError.Semester = 'Please select Semester';
    if (!Teacher || Teacher === '') newError.Teacher = 'Please select Teacher';
    if (!Assign_class || Assign_class === '')
      newError.Assign_class = 'Please  Assign class';
    if (!Course_class || Course_class === '')
      newError.Course_class = 'Please select class';
    if (!Lecture || Lecture === '') newError.Lecture = 'Please enter Lecture.';

    return newError;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      const formData = new FormData();
      await Promise.all(
        Object.keys(formValues).map(async (ele) => {
          await formData.append(ele, formValues[ele]);
        })
      );

      Object.keys(formValues).map((ele) => {
        console.log(
          'formValues values are for key',
          ele,
          ' ',
          formData.get(ele)
        );
      });
    }
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
    Course,
    Course_class,
    Semester,
    Teacher,
    Assign_class,
    Lecture,
    Assign_substitution,
  } = formValues;
  return (
    <>
      <Banner style={{ height: '6rem', display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            color: 'white',
          }}
        >
          <h3>Assign Class</h3>
        </div>
      </Banner>

      <div className={classes.container}>
        <div className={classes.subContainer}>
          <Form noValidate onSubmit={handleSubmit}>
            <Col className="d-grid gap-3" style={{ paddingTop: '2rem' }}>
              <Form.Group className="w-50" controlId="Semester">
                <Form.Control
                  className="form-select form-select-md mb-0"
                  aria-label=".form-select-lg example"
                  name="Semester"
                  onChange={handleChange}
                  value={Semester}
                  isInvalid={!!errors?.Semester}
                  required
                  as="select"
                  type="select"
                >
                  <option defaultValue="">Select Semester</option>
                  <option value="sem1">Semester-I</option>
                  <option value="sem2">Semester-II</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors?.Semester}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50" controlId="Course">
                <Form.Control
                  className="form-select form-select-md mb-0"
                  aria-label=".form-select-lg example"
                  name="Course"
                  onChange={handleChange}
                  value={Course}
                  isInvalid={!!errors?.Course}
                  required
                  as="select"
                  type="select"
                >
                  <option defaultValue="">Select Course</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="M.Tech">M.Tech</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors?.Course}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50" controlId="Course_class">
                <Form.Control
                  className="form-select form-select-md mb-0"
                  aria-label=".form-select-lg example"
                  name="Course_class"
                  onChange={handleChange}
                  value={Course_class}
                  isInvalid={!!errors?.Course_class}
                  required
                  as="select"
                  type="select"
                >
                  <option defaultValue="">Select Class</option>
                  <option value="CSE1">CSE-I</option>
                  <option value="CSE2">CSE-II</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors?.Course_class}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50" controlId="Teacher">
                <Form.Control
                  className="form-select form-select-md mb-0"
                  aria-label=".form-select-lg example"
                  name="Teacher"
                  onChange={handleChange}
                  value={Teacher}
                  isInvalid={!!errors?.Teacher}
                  required
                  as="select"
                  type="select"
                >
                  <option defaultValue="">Select Teacher</option>
                  <option value="teacher1">Teacher 1</option>
                  <option value="teacher2">Teacher 2</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors?.Teacher}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50" controlId="Assign_class">
                <Form.Control
                  className="form-select form-select-md mb-0"
                  aria-label=".form-select-lg example"
                  name="Assign_class"
                  onChange={handleChange}
                  value={Assign_class}
                  isInvalid={!!errors?.Assign_class}
                  required
                  as="select"
                  type="select"
                >
                  <option defaultValue="">Assign Class</option>
                  <option value="cse1">CSE-I</option>
                  <option value="cse2">CSE-II</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors?.Assign_class}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50" controlId="Lecture">
                <Form.Label>Lecture</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Lecture"
                  name="Lecture"
                  value={Lecture}
                  onChange={handleChange}
                  isInvalid={!!errors?.Lecture}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.Lecture}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50" controlId="Assign_substitution">
                <Form.Label>Assign Substitution</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  name="Assign_substitution"
                  value={Assign_substitution}
                  onChange={handleChange}
                  isInvalid={!!errors?.Assign_substitution}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.Assign_substitution}
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

export default AssignClassForm;
