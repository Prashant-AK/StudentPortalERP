import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Row, Form } from 'react-bootstrap';

import classes from './UploadSchedule.module.css';
import Banner from '../topBar/HeaderBanner/Banner';

const initialState = {
  Course: '',
  Course_class: '',
  File: {},
  Title: '',
};

function UploadSchedule() {
  //

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    if (!!errors[name]) setErrors({ ...errors, [name]: null });
  };
  const validateForm = () => {
    const { Course, Course_class, File, Title } = formValues;
    const newError = {};

    if (!Course || Course === '') newError.Course = 'Please select Course';
    if (!Course_class || Course_class === '')
      newError.Course_class = 'Please select class';
    if (!Title || Title === '') newError.Title = 'Please enter Title.';

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
  const { Course, Course_class, File, Title } = formValues;
  return (
    <>
      <Banner style={{ height: '6rem', display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            color: 'white',
          }}
        >
          <h3>Upload Schedule</h3>
        </div>
      </Banner>

      <div className={classes.container}>
        <div className={classes.subContainer}>
          <Form noValidate onSubmit={handleSubmit}>
            <Col className="d-grid gap-3" style={{ paddingTop: '2rem' }}>
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
              <Form.Group controlId="formFile" className="w-50">
                <Form.Label>Upload Schedule</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <div
                style={{
                  height: '200px',
                  backgroundColor: 'whitesmoke',
                }}
                className="w-50"
              >
                <p style={{ textAlign: 'right', paddingRight: '1rem' }}>X</p>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    width={60}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/640px-PDF_file_icon.svg.png"
                  />
                </div>
              </div>
              <Form.Group className="w-50" controlId="validationCustom01">
                <Form.Label>Enter Title</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Title"
                  name="Title"
                  value={Title}
                  onChange={handleChange}
                  isInvalid={!!errors?.Title}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.Title}
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

export default UploadSchedule;
