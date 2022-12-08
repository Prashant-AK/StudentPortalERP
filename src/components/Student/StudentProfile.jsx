import React, { useState, useEffect } from 'react';
import { Button, Col, Row, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { BannerHeader } from '../topBar/HeaderBanner/BannerHeader';
import CustomModal from '../utils/customModal/CustomModal';
import { CategoryTable } from '../utils/student/CategoryTable';
import { adminThunk } from '../../redux/pages';
import classes from './StudentProfile.module.css';

export const StudentProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [studentProfile, setStudentProfile] = useState({});

  const handleClose = () => {
    setStudentProfile({});
    setShow(false);
  };
  const handleShow = (profileData) => {
    setStudentProfile(profileData);
    setShow(true);
  };

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
        <p className="headingg">Student Profile</p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <p className="sub_heading">Dashboard / Student-Profile</p>
          </div>
          <div style={{ marginTop: '-3rem', marginRight: '3rem' }}>
            <Button
              style={{
                backgroundColor: '#27285C',
                color: '#fff',
              }}
              onClick={() => navigate('/create-student-profile')}
            >
              Create Profile
            </Button>
          </div>
        </div>
      </BannerHeader>

      <div className="DailyAttendance_mainContainer">
        <div className="Student_Table_Container">
          <div id="table_header_content">
            <h3 style={{ fontWeight: 'bold', marginLeft: '2rem' }}>Profile</h3>

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
              <option value="1">B Tech</option>
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
              <option selected>Select class</option>
              <option value="1">One</option>
            </select>

            <div id="srch_icon_container" style={{ marginRight: '2rem' }}>
              <BiSearch id="srch_icon" />
            </div>
          </div>
          <CategoryTable profile={true} handleShow={handleShow} />
        </div>
      </div>
      <CustomModal
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title
            style={{ paddingLeft: '2rem', fontSize: '2rem' }}
            id="contained-modal-title-vcenter"
          >
            Student Info
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Col className={classes.topContentContainer}>
              <Row>
                <p>
                  <span className={classes.topHead}>Student Name: </span>{' '}
                  <strong className={classes.topContent}>
                    {studentProfile?.student_name}
                  </strong>
                </p>
              </Row>
              <Row>
                <p>
                  <span className={classes.topHead}>Student Id: </span>
                  <strong className={classes.topContent}>
                    {studentProfile?.student_id}
                  </strong>
                </p>
              </Row>
              <Row>
                <p>
                  <span className={classes.topHead}>Course:</span>
                  <strong className={classes.topContent}>
                    {studentProfile?.student_course}
                  </strong>
                </p>
              </Row>
              <Row>
                <p>
                  <span className={classes.topHead}>Semester:</span>
                  <strong className={classes.topContent}>
                    {studentProfile?.student_semester}
                  </strong>
                </p>
              </Row>
              <Row>
                <p>
                  <span className={classes.topHead}>Class:</span>
                  <strong className={classes.topContent}>
                    {studentProfile?.student_class}
                  </strong>
                </p>
              </Row>
            </Col>
            <hr className={classes.horizontalLine} />

            <div className={classes.contentContainer}>
              <h5 className={classes.heading}>Personal Information</h5>
              <Row>
                <Col>
                  <span className={classes.topHead}>Contact Number</span>
                </Col>
                <Col>
                  <p className={classes.topContent}>
                    +91 {studentProfile?.student_contact_number}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className={classes.topHead}>Email Address</span>
                </Col>
                <Col>
                  <p className={classes.topContent}>
                    {studentProfile?.student_email}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className={classes.topHead}>Home Address</span>
                </Col>
                <Col>
                  <p className={classes.topContent}>
                    {studentProfile?.student_home_address}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className={classes.topHead}>City</span>
                </Col>
                <Col>
                  <p className={classes.topContent}>
                    {studentProfile?.student_city}
                  </p>
                </Col>
              </Row>
            </div>
            <div className={classes.contentContainer}>
              <h5 className={classes.heading}>Parents Information</h5>
              <Row>
                <Col>
                  <span className={classes.topHead}>Father's Name</span>
                </Col>
                <Col>
                  <p className={classes.topContent}>
                    {studentProfile?.father_name}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className={classes.topHead}>Email Address</span>
                </Col>
                <Col>
                  <p className={classes.topContent}>
                    {studentProfile?.father_email}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className={classes.topHead}>Contact Number</span>
                </Col>
                <Col>
                  <p className={classes.topContent}>
                    {studentProfile?.father_contact_number}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className={classes.topHead}>City</span>
                </Col>
                <Col>
                  <p className={classes.topContent}>
                    {studentProfile?.father_city}
                  </p>
                </Col>
              </Row>
            </div>
            <div className={classes.modalFooter}>
              <div>
                <Button
                  className={classes.modalButton}
                  onClick={() => {
                    // dispatch(adminThunk.getStudentDetails(studentProfile._id));
                    navigate(`/create-student-profile/${studentProfile._id}`, {
                      state: studentProfile,
                    });
                  }}
                >
                  Edit
                </Button>
              </div>

              <div>
                <Button className={classes.modalButton} onClick={handleClose}>
                  Close
                </Button>
              </div>
            </div>
            {/* <div>
            <Button onClick={() => navigate('/create-student-profile')}>
              Edit
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </div> */}
          </div>
        </Modal.Body>
      </CustomModal>
    </>
  );
};
