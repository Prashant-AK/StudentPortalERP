import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Row, Form } from 'react-bootstrap';
import Multiselect from 'multiselect-react-dropdown';

import classes from './UploadSchedule.module.css';
import Banner from '../topBar/HeaderBanner/Banner';

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

function UploadSchedule() {
  //
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  function onSelect(selectedList, selectedItem) {
    // ...
  }

  function onRemove(selectedList, removedItem) {
    // ...
  }
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
                  // defaultValue="Mark"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
