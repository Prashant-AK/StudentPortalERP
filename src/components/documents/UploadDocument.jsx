import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Row, Form, FloatingLabel } from 'react-bootstrap';
import Multiselect from 'multiselect-react-dropdown';
import { BsPlusCircle } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';

import classes from './UploadDocument.module.css';
import Banner from '../topBar/HeaderBanner/Banner';

function UploadDocument() {
  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);
  const [uploadImage, setUploadImage] = useState([
    {
      id: 'uploadImage',
      image: '',
    },
  ]);

  const handleRemoveImg = (e, index) => {
    e.preventDefault();
    var arr = [...uploadImage];
    arr.splice(index, 1);
    setUploadImage([...arr]);
  };

  const handleAddImg = (e) => {
    e.preventDefault();
    const rand = uuidv4().substr(0, 5);
    setUploadImage([...uploadImage, { id: `uploadImage1${rand}`, image: '' }]);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    const formData = new FormData();

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

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
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Col className="d-grid gap-3" style={{ paddingTop: '2rem' }}>
              <Form.Group className="w-50">
                <select
                  className="form-select form-select-md mb-0"
                  aria-label=".form-select-lg example"
                >
                  <option selected>Select Course</option>
                  <option value="1">B.Tech</option>
                  <option value="2">M.Tech</option>
                </select>
              </Form.Group>
              <Form.Group className="w-50">
                <select
                  className="form-select form-select-md mb-0"
                  aria-label=".form-select-lg example"
                >
                  <option selected>Select Class</option>
                  <option value="1">CSE-I</option>
                  <option value="2">CSE-II</option>
                </select>
              </Form.Group>
              <Form.Group className="w-50">
                <select
                  className="form-select form-select-md mb-0"
                  aria-label=".form-select-lg example"
                >
                  <option selected>Select Semester</option>
                  <option value="1">Semester-I</option>
                  <option value="2">Semester-II</option>
                </select>
              </Form.Group>

              <Form.Group controlId="formFile" className="w-50">
                <Form.Label>Upload Schedule</Form.Label>
                <Form.Control type="file" />
              </Form.Group>

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
                        <img
                          // height="10"
                          width="60"
                          src="https://lasd.lv/public/assets/no-image.png"
                        />
                      </label>
                      <input
                        id={element.id}
                        type="file"
                        class={classes.uploadImage}
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

              <Form.Group className="w-50">
                <p className={classes.topHead}>Enter Title</p>

                <Form.Control
                  as="textarea"
                  style={{
                    marginTop: '-1rem',
                    height: '100px',
                    boxShadow: '5px 5px  10px  #F3F3F3',
                    borderRadius: '0.5rem',
                  }}
                  placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                />
              </Form.Group>
              <Form.Group className="w-50">
                <p className={classes.topHead}>Enter Description</p>

                <Form.Control
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
