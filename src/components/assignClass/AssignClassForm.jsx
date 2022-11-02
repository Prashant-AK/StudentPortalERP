import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Row, Form } from 'react-bootstrap';
import Multiselect from 'multiselect-react-dropdown';

import classes from './AssignClassForm.module.css';
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

function AssignClassForm() {
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
          <h3>Assign Class</h3>
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
                  <option selected>Select Semester</option>
                  <option value="1">Semester I</option>
                  <option value="2">Semester II</option>
                </select>
              </Form.Group>
              <Form.Group className="w-50">
                <select
                  className="form-select form-select-md mb-0"
                  aria-label=".form-select-lg example"
                >
                  <option selected>Select Course</option>
                  <option value="1">B.Tech</option>
                  <option value="2">B.Tech</option>
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
                  <option selected>Select Teacher</option>
                  <option value="1">Teacher 1</option>
                  <option value="2">Teacher 2</option>
                </select>
              </Form.Group>
              <Form.Group className="w-50">
                <select
                  className="form-select form-select-md mb-0"
                  aria-label=".form-select-lg example"
                >
                  <option selected>Assign Class</option>
                  <option value="1">CSE-I</option>
                  <option value="2">CSE-II</option>
                </select>
              </Form.Group>

              <Form.Group className="w-50" controlId="validationCustom01">
                <Form.Label>Lecture</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Lecture"
                  // defaultValue="Mark"
                />
              </Form.Group>
              <Form.Group className="w-50" controlId="validationCustom01">
                <Form.Label>Assign Substitution</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  // defaultValue="Mark"
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

export default AssignClassForm;
