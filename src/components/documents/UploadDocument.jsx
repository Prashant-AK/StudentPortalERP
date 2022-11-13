import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Row, Form, FloatingLabel } from 'react-bootstrap';
import Multiselect from 'multiselect-react-dropdown';
import { BsPlusCircle } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';

import classes from './UploadDocument.module.css';
import Banner from '../topBar/HeaderBanner/Banner';

const initialState = {
  Course: '',
  Course_class: '',
  Semester: '',
  Schedule_File: {},
  Title: '',
  Description: '',
};

function UploadDocument() {
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState(initialState);
  const [uploadImage, setUploadImage] = useState([]);

  const handleRemoveImg = (e, index) => {
    e.preventDefault();
    var arr = [...uploadImage];
    arr.splice(index, 1);
    setUploadImage([...arr]);
  };

  const handleImageChange = (e) => {
    const rand = uuidv4().substr(0, 5);
    setUploadImage([
      ...uploadImage,
      {
        id: `image${rand}`,
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      },
    ]);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    if (!!errors[name]) setErrors({ ...errors, [name]: null });
  };

  const validateForm = () => {
    const { Course, Course_class, Semester, Title, Description } = formValues;
    const newError = {};
    if (!Title || Title === '') newError.Title = 'Please enter Title';
    if (!Course || Course === '') newError.Course = 'Please select Course';
    if (!Semester || Semester === '')
      newError.Semester = 'Please select Semester';
    if (!Course_class || Course_class === '')
      newError.Course_class = 'Please select class';
    if (!Description || Description === '')
      newError.Description = 'Please enter Description.';
    else if (Description.length < 5)
      newError.Description = 'Description is too short.';
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
          if (ele !== 'file') {
            await formData.append(ele, formValues[ele]);
          }
        })
      );

      await Promise.all(
        uploadImage.map((ele, index) => {
          formData.append(index, ele.file);
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

  const { Course, Course_class, Semester, Title, Description } = formValues;
  return (
    <>
      <Banner style={{ height: '6rem', display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            color: 'white',
          }}
        >
          <h3>Create Document</h3>
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
              <Form.Group controlId="Schedule_File" className="w-50">
                <Form.Label>Upload Schedule</Form.Label>
                <Form.Control type="file" />
              </Form.Group>

              <Form.Group>
                <p className={classes.topHead}>Upload Images</p>
                <Row>
                  {uploadImage?.map((element, index) => (
                    <Form.Group
                      key={element.id}
                      className={classes.uploadImageContainer}
                    >
                      <label
                        className={classes.uploadImageLabel}
                        htmlFor={element.id}
                      >
                        <img
                          width="100%"
                          height="100%"
                          src={element?.url}
                          alt="test"
                        />
                      </label>
                      <button
                        disabled={element?.id === 'uploadImage'}
                        className={classes.uploadImageRemoveBtn}
                        onClick={(e) => handleRemoveImg(e, index)}
                      >
                        X
                      </button>
                    </Form.Group>
                  ))}
                  <Col className={classes.uploadImageContainer}>
                    <Form.Label
                      htmlFor="uploadFile"
                      className={classes.uploadImageLabel}
                    >
                      <BsPlusCircle style={{ fontSize: '1.5rem' }} />
                    </Form.Label>
                    <Form.Control
                      id="uploadFile"
                      name="uploadFile"
                      type="file"
                      style={{ visibility: 'hidden' }}
                      onChange={handleImageChange}
                    />
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group className="w-50" controlId="Title">
                <p className={classes.topHead}>Enter Title</p>
                <Form.Control
                  as="textarea"
                  name="Title"
                  value={Title}
                  onChange={handleChange}
                  style={{
                    marginTop: '-1rem',
                    height: '100px',
                    boxShadow: '5px 5px  10px  #F3F3F3',
                    borderRadius: '0.5rem',
                  }}
                  placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  isInvalid={!!errors?.Title}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.Title}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50">
                <p className={classes.topHead}>Enter Description</p>
                <Form.Control
                  as="textarea"
                  name="Description"
                  value={Description}
                  onChange={handleChange}
                  style={{
                    marginTop: '-1rem',
                    height: '300px',
                    boxShadow: '5px 5px  10px  #F3F3F3',
                    borderRadius: '0.5rem',
                  }}
                  placeholder="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
                  isInvalid={!!errors.Description}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.Description}
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

export default UploadDocument;
