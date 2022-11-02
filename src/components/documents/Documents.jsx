import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import {
  Button,
  Table,
  Dropdown,
  DropdownButton,
  Modal,
  Row,
  Col,
  FloatingLabel,
  Form,
  Image,
} from 'react-bootstrap';

import { BannerHeader } from '../topBar/HeaderBanner/BannerHeader';

import { head, content } from './table';
import CustomModal from '../utils/customModal/CustomModal';

import classes from './Document.module.css';

function Documents() {
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <BannerHeader>
        <p className="headingg">Documents</p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <p className="sub_heading">Dashboard / Document</p>
          </div>
          <div style={{ marginTop: '-3rem', marginRight: '3rem' }}>
            <Button
              style={{
                backgroundColor: '#27285C',
                color: '#fff',
              }}
              onClick={() =>
                navigate(
                  `${
                    location.pathname === '/teacher/documents'
                      ? '/teacher/upload-document'
                      : '/upload-document'
                  }`
                )
              }
            >
              Upload Document
            </Button>
          </div>
        </div>
      </BannerHeader>
      <div className="DailyAttendance_mainContainer">
        <div className="Student_Table_Container">
          <div id="table_header_content">
            <h3 style={{ fontWeight: 'bold', marginLeft: '2rem' }}>Document</h3>
          </div>
          <div className="table_container">
            <div
              id="Student_table"
              style={{
                backgroundColor: 'white',
                // overflowY: 'scroll',
                // height: '100vh',
              }}
            >
              <Table>
                <thead style={{ borderTop: '1px solid black' }}>
                  <tr>
                    {head.map(({ colName }, index) => (
                      <th key={index + colName} style={{ textAlign: 'center' }}>
                        {colName}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content.map((element, index) => (
                    <tr key={index}>
                      <td style={{ textAlign: 'center' }}>{index + 1}</td>
                      <td align="center">
                        <Image width="200" src={element?.image} thumbnail />
                      </td>
                      <td width="20%" style={{ textAlign: 'center' }}>
                        {element?.title}
                      </td>
                      <td width="40%">{element?.description}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>

      <CustomModal
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
      >
        <Modal.Header closeButton className="border-0">
          {/* <Modal.Title
            style={{
              paddingLeft: '2rem',
              color: '#006489',
              fontSize: '1.75rem',
            }}
            id="contained-modal-title-vcenter"
          >
            Contact Enquiry
          </Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div className={classes.container}>
            <h2
              style={{
                paddingLeft: '2rem',
                color: '#006489',
                fontSize: '1.75rem',
                paddingBottom: '2rem',
              }}
            >
              Contact Enquiry
            </h2>
            <Col className={classes.topContentContainer}>
              <Row>
                <p>
                  <span className={classes.topHead}>Student Name: </span>{' '}
                  <strong className={classes.topContent}>Ankit Sharma</strong>
                </p>
              </Row>
              <Row>
                <p>
                  <span className={classes.topHead}>Contact Number: </span>
                  <strong className={classes.topContent}>9876543210</strong>
                </p>
              </Row>
              <Row>
                <p>
                  <span className={classes.topHead}>Email Address:</span>
                  <strong className={classes.topContent}>
                    ankita@gmail.com
                  </strong>
                </p>
              </Row>
            </Col>
            <form className={classes.modalForm}>
              <p className={classes.topHead}>Enter Message</p>
              <FloatingLabel controlId="floatingTextarea2" label="Reply">
                <Form.Control
                  as="textarea"
                  placeholder="Reply"
                  style={{
                    marginTop: '-0.5rem',
                    height: '100px',
                    boxShadow: '5px 5px  10px  #F3F3F3',
                    borderRadius: '0.5rem',
                  }}
                />
              </FloatingLabel>
              <div className={classes.modalFooter}>
                <div>
                  <Button className={classes.modalButton}>Send Reply</Button>
                </div>

                <div>
                  <Button className={classes.modalButton} onClick={handleClose}>
                    Cancel
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
      </CustomModal>
    </>
  );
}

export default Documents;
