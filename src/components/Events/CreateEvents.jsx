import React, { useState, useEffect } from 'react';
import DatePicker from 'react-date-picker';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Row, Form } from 'react-bootstrap';
import { BsPlusCircle } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { adminThunk } from '../../redux/pages';
import classes from './CreateEvent.module.css';
import Banner from '../topBar/HeaderBanner/Banner';

const initialState = {
  file: [],
  Event_name: '',
  Event_type: '',
  Select_Date: '',
  Select_time: '',
  Detail: '',
};

function CreateEvents() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState(initialState);
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});

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
        id: `uploadImage1${rand}`,
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

  const handleDateChange = (date) => {
    setFormValues({ ...formValues, Select_Date: date });
    if (!!errors.Select_Date) setErrors({ ...errors, Select_Date: null });
  };
  const validateForm = () => {
    const { Event_name, Event_type, Select_Date, Select_time, Detail } =
      formValues;
    const newError = {};
    if (!Event_name || Event_name === '')
      newError.Event_name = 'Please enter event name.';
    if (!Event_type || Event_type === '')
      newError.Event_type = 'Please select event type';
    if (!Select_Date || Select_Date < new Date())
      newError.Select_Date = 'Please select valid Date';
    if (!Detail || Detail === '')
      newError.Detail = 'Please enter event detail.';
    else if (Detail.length < 5) newError.Detail = 'Detail is too short.';
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
      console.log('file', formData.get('0'));
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

  const { Event_name, Event_type, Select_Date, Select_time, Detail } =
    formValues;
  return (
    <>
      <Banner style={{ height: '6rem', display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            color: 'white',
          }}
        >
          <h3>Create Event</h3>
        </div>
      </Banner>
      <div className={classes.container}>
        <div className={classes.subContainer}>
          <Form noValidate onSubmit={handleSubmit}>
            <Col className="d-grid gap-3" style={{ paddingTop: '2rem' }}>
              <Form.Group className="w-50" controlId="EventName">
                <Form.Label>Enter Event Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Annual Function"
                  name="Event_name"
                  onChange={handleChange}
                  value={Event_name}
                  isInvalid={!!errors?.Event_name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.Event_name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="w-50" controlId="Event_type">
                <Form.Control
                  className="form-select form-select-md mb-0"
                  aria-label=".form-select-lg example"
                  name="Event_type"
                  onChange={handleChange}
                  value={Event_type}
                  isInvalid={!!errors?.Event_type}
                  required
                  as="select"
                  type="select"
                >
                  <option defaultValue="">Select Event Type</option>
                  <option value="public">Public Event</option>
                  <option value="private">Private Event</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors?.Event_type}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50" htmlFor="Select_Date">
                <DatePicker
                  className={`${classes.date_picker} form-control ${
                    !!errors.Select_Date && 'redBorder'
                  }`}
                  name="Select_Date"
                  value={Select_Date}
                  onChange={(date) => handleDateChange(date)}
                  format="dd/MM/yyyy"
                  clearIcon={null}
                />
                <Form.Control.Feedback
                  className={`${!!errors?.Select_Date && 'errorText'}`}
                  type={!!errors?.Select_Date}
                >
                  {errors?.Select_Date}
                </Form.Control.Feedback>
              </Form.Group>
              {/* Dynamic Image input START */}
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
              {/* Dynamic Image input END */}

              <Form.Group className="w-50" controlId="Detail">
                <p className={classes.topHead}>Details</p>
                <Form.Control
                  onChange={handleChange}
                  name="Detail"
                  value={Detail}
                  as="textarea"
                  style={{
                    marginTop: '-1rem',
                    height: '300px',
                    boxShadow: '5px 5px  10px  #F3F3F3',
                    borderRadius: '0.5rem',
                  }}
                  placeholder="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                  isInvalid={!!errors?.Detail}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.Detail}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Row className="w-80" style={{ margin: '2rem 0rem' }}>
              <Col>
                <Button className={classes.button} type="submit">
                  Submit
                </Button>
                <Button className={classes.button} onClick={() => navigate(-1)}>
                  Cancel
                </Button>
                <Button className={classes.button}>Add New</Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
}

export default CreateEvents;
