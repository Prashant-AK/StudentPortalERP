import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Row, Form } from 'react-bootstrap';
import Multiselect from 'multiselect-react-dropdown';
import { BsPlusCircle } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { adminThunk } from '../../redux/pages';
import classes from './CreateEvent.module.css';
import Banner from '../topBar/HeaderBanner/Banner';
import { BiNoEntry } from 'react-icons/bi';

const SUBJECT = [
  { name: 'Option 1️', id: 1 },
  { name: 'Option 2️', id: 2 },
  { name: 'Option 3', id: 3 },
];

const multiselectStyle = {
  multiselectContainer: {
    // To change css for multiselect (Width,height,etc..)
    // ....
  },
  searchBox: {
    // To change search box element look
    border: 'none',
    // fontSize: "10px",
    // minHeight: "50px"
  },
  inputField: {
    // To change input field position or margin
    margin: '5px',
  },
  chips: {
    // To change css chips(Selected options)
    background: 'red',
  },
  optionContainer: {
    // To change css for option container
    border: '2px solid',
  },
  option: {
    // To change css for dropdown options
    color: 'blue',
  },
  groupHeading: {
    // To chanage group heading style
    // ....
  },
};

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

  const [formData, setFormData] = useState(initialState);
  const [validated, setValidated] = useState(false);
  const [uploadImage, setUploadImage] = useState([
    {
      id: 'uploadImage',
      file: {},
    },
  ]);
  function dataURLToBlob(dataurl) {
    let arr = dataurl.split(',');
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }
  const handleImageChange = (e, index) => {
    const arr = uploadImage;
    arr[index].file = URL.createObjectURL(e.target.files[0]);
    setUploadImage(arr);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleRemoveImg = (e, index) => {
    e.preventDefault();
    var arr = [...uploadImage];
    arr.splice(index, 1);
    setUploadImage([...arr]);
  };
  const handleAddImg = (e) => {
    e.preventDefault();
    const rand = uuidv4().substr(0, 5);
    setUploadImage([...uploadImage, { id: `uploadImage1${rand}`, file: {} }]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();

    // }

    if (form.checkValidity() === false) {
      console.log('errrorrr');
      alert('Please fill all the fields');
    } else {
      setValidated(true);

      await dispatch(
        adminThunk.createEvent({ ...formData, file: uploadImage })
      );
      console.log('submit form ', { ...formData, file: uploadImage });
      navigate('/events');
    }
  };
  useEffect(() => {
    return () => {};
  }, [uploadImage]);

  const { Event_name, Event_type, Select_Date, Select_time, Detail } = formData;
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
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Col className="d-grid gap-3" style={{ paddingTop: '2rem' }}>
              <Form.Group className="w-50" controlId="validationCustom01">
                <Form.Label>Enter Event Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Annual Function"
                  name="Event_name"
                  onChange={handleChange}
                  value={Event_name}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="w-50">
                <select
                  className="form-select form-select-md mb-0"
                  aria-label=".form-select-lg example"
                  name="Event_type"
                  onChange={handleChange}
                  value={Event_type}
                >
                  <option>Select Event Type</option>
                  <option value="public">Public Event</option>
                  <option value="private">Private Event</option>
                </select>
              </Form.Group>
              <Form.Group className="w-50" controlId="validationCustom01">
                {/* <Form.Label>Enter Event Name</Form.Label> */}
                <Form.Control
                  required
                  type="date"
                  placeholder="Select Date"
                  name="Select_Date"
                  value={Select_Date}
                  onChange={handleChange}
                />
              </Form.Group>
              {/* Dynamic Image input START */}
              <Form.Group>
                {/* <Form.Group controlId="formFile" className="w-50" > */}
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
                        <img width="100" height="100" src={element?.file} />
                      </label>
                      <input
                        id={element.id}
                        type="file"
                        class={classes.uploadImage}
                        onChange={(e) => handleImageChange(e, index)}
                      />
                      <button
                        disabled={element?.id === 'uploadImage'}
                        className={classes.uploadImageRemoveBtn}
                        onClick={(e) => handleRemoveImg(e, index)}
                      >
                        X
                      </button>
                    </Form.Group>
                  ))}

                  {/* <Form.Group className={classes.uploadImageContainer}>
                    <label
                      className={classes.uploadImageLabel}
                      htmlFor={`project_neighbour`}
                    >
                      <img
                        // height="10"
                        width="60"
                        src="https://lasd.lv/public/assets/no-image.png"
                      />
                    </label>
                    <input
                      id={`project_neighbour`}
                      type="file"
                      class={classes.uploadImage}
                    />
                    <button
                      // disabled={field.id === 1}
                      className={classes.uploadImageRemoveBtn}
                      onClick={(e) => handleRemoveImg(e)}
                    >
                      X
                    </button>
                  </Form.Group> */}

                  <Col className={classes.uploadImageContainer}>
                    <label className={classes.uploadImageLabel}>
                      <button
                        onClick={(e) => handleAddImg(e)}
                        style={{ border: 'none' }}
                      >
                        <BsPlusCircle style={{ fontSize: '1.5rem' }} />
                      </button>
                    </label>
                  </Col>
                </Row>
              </Form.Group>
              {/* Dynamic Image input END */}

              <Form.Group className="w-50">
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
                  placeholder="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
                />
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
