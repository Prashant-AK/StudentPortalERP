import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import { BiSearch } from 'react-icons/bi';
import { Button, Col, Row, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from 'react-icons/bs';

import Sidebar from '../../../src/SideBar/SideBar';
import Header from '../DashBoard/Header';
import { BannerHeader } from '../topBar/HeaderBanner/BannerHeader';
import { CategoryTable } from '../utils/student/CategoryTable';
import CustomModal from '../utils/customModal/CustomModal';
import classes from './StudentAttendance.module.css';
import ListGroup from 'react-bootstrap/ListGroup';
import { adminThunk } from '../../redux/pages';

const STUDENT_ATTENDANCE = [
  {
    subject: 'Computer Science',
    attendance: 45,
  },
  {
    subject: 'Computer Application',
    attendance: 75,
  },
  {
    subject: 'Mathematics',
    attendance: 80,
  },
  {
    subject: 'Physics',
    attendance: 33,
  },
  {
    subject: 'Physics-2',
    attendance: 22,
  },
];

const StudentAttendance = () => {
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(new Date());
  const [value, onChange] = useState(new Date());
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const callDispatch = async () => {
    await dispatch(adminThunk.getStudentList());
  };

  useEffect(() => {
    callDispatch();
    return () => {
      console.log('return statement ');
    };
  }, []);

  return (
    <>
      <BannerHeader>
        <p className="headingg">Student-Attendance</p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <p className="sub_heading" style={{ marginTop: '3px' }}>
            Dashboard / Student-Attendance
          </p>

          <div style={{ marginRight: '3rem' }}>
            <span>
              <button className={classes.dateArrowIcon}>
                <BsArrowLeftCircleFill
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '100%',
                    color: '#2d5568',
                    fontSize: '1.5rem',
                    marginRight: '0.75rem',
                  }}
                />
              </button>
              <DatePicker
                todayButton="FilterDate"
                selected={startDate}
                value={startDate}
                onChange={(date) => setStartDate(date)}
                format="dd/MM/yyyy"
                style={{ color: 'white', border: 'none' }}
                clearIcon={null}
              />
              <button className={classes.dateArrowIcon}>
                <BsArrowRightCircleFill
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '100%',
                    color: '#2d5568',
                    fontSize: '1.5rem',
                    marginLeft: '0.75rem',
                  }}
                />
              </button>
            </span>
          </div>
        </div>
      </BannerHeader>

      <div className="Student_Table_Container">
        <div id="table_header_content">
          <h3 style={{ fontWeight: 'bold', marginLeft: '2rem' }}>Attendance</h3>

          <select
            className="form-select form-select-lg mb-0"
            aria-label=".form-select-lg example"
            style={{
              width: '12rem',
              height: '2.5rem',
              borderRadius: '15px',
              fontSize: '1rem',
              marginRight: '15px',
              marginLeft: 'auto',
            }}
          >
            <option selected>Select Course</option>
            <option value="1">One</option>
          </select>
          <select
            className="form-select form-select-lg mb-0"
            aria-label=".form-select-lg example"
            style={{
              width: '12rem',
              height: '2.5rem',
              borderRadius: '15px',
              fontSize: '1rem',
              marginRight: '15px',
            }}
          >
            <option selected>Select Class</option>
            <option value="1">One</option>
          </select>

          <div id="srch_icon_container" style={{ marginRight: '2rem' }}>
            <BiSearch id="srch_icon" />
          </div>
        </div>
        <CategoryTable handleShow={handleShow} profile={false} />
      </div>

      <CustomModal
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
      >
        <Modal.Header
          closeButton
          className="border-0"
          style={{ backgroundColor: '#eaf4ff' }}
        >
          <Modal.Title
            style={{ paddingLeft: '2rem', fontSize: '2rem' }}
            id="contained-modal-title-vcenter"
          >
            Attendance Detail
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#eaf4ff' }}>
          <Col className={classes.topContentContainer}>
            <Row>
              <p>
                <span className={classes.topHead}>Student Name: </span>{' '}
                <strong className={classes.topContent}>Ankit Sharma</strong>
              </p>
            </Row>
            <Row>
              <p>
                <span className={classes.topHead}>Student Id: </span>
                <strong className={classes.topContent}>02255</strong>
              </p>
            </Row>
          </Col>
          <div className={classes.contentContainer}>
            <Row>
              <select
                className="form-select form-select-lg mb-0"
                aria-label=".form-select-lg example"
                style={{
                  width: '12rem',
                  height: '2.5rem',
                  borderRadius: '1rem',
                  fontSize: '1rem',
                  margin: '0rem 1rem',
                }}
              >
                <option selected>Select Semester</option>
                <option value="1">1 Semester</option>
              </select>
              <select
                className="form-select form-select-lg mb-0"
                aria-label=".form-select-lg example"
                style={{
                  width: '12rem',
                  height: '2.5rem',
                  borderRadius: '1rem',
                  fontSize: '1rem',
                  marginRight: '1rem',
                }}
              >
                <option selected>Select Month</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>

              <div className={classes.searchIconContainer}>
                <BiSearch className={classes.searchIcon} />
              </div>
            </Row>
            <Row className={classes.StudentTable}>
              <ListGroup>
                <ListGroup.Item>
                  <div className="container">
                    <div className="row align-items-start">
                      <div
                        className="col"
                        style={{
                          textAlign: 'left',
                          fontWeight: 'bold',
                        }}
                      >
                        Subjects
                      </div>
                      <div
                        className="col"
                        style={{ textAlign: 'right', fontWeight: 'bold' }}
                      >
                        Total Attendance
                      </div>
                    </div>
                  </div>
                </ListGroup.Item>
                {STUDENT_ATTENDANCE.map((data, idx) => {
                  return (
                    <ListGroup.Item key={data.subject + idx}>
                      <div className="container">
                        <div className="row align-items-start">
                          <div className="col" style={{ textAlign: 'left' }}>
                            {data?.subject}
                          </div>
                          <div
                            className="col"
                            style={{
                              display: 'flex',
                              justifyContent: 'flex-end',
                              paddingRight: '5rem',
                            }}
                          >
                            {data?.attendance}%
                          </div>
                        </div>
                      </div>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Row>
          </div>
        </Modal.Body>
      </CustomModal>
    </>
  );
};

export default StudentAttendance;
