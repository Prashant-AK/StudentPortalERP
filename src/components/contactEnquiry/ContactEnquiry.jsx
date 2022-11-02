import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
} from 'react-bootstrap';

import { BannerHeader } from '../topBar/HeaderBanner/BannerHeader';

import { head, content } from './table';
import CustomModal from '../utils/customModal/CustomModal';

import classes from './ContactEnquiry.module.css';

function ContactEnquiry() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <BannerHeader>
        <p className="headingg">Contact Inquiry</p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <p className="sub_heading">Dashboard / Contact</p>
          </div>
        </div>
      </BannerHeader>
      <div className="DailyAttendance_mainContainer">
        <div className="Student_Table_Container">
          <div id="table_header_content">
            <h3 style={{ fontWeight: 'bold', marginLeft: '2rem' }}>
              Contact Enquiry
            </h3>
          </div>
          <div className="table_container">
            <div id="Student_table" style={{ backgroundColor: 'white' }}>
              <Table>
                <thead style={{ borderTop: '1px solid black' }}>
                  <tr>
                    {head.map(({ colName }, index) => (
                      <th key={index + colName}>{colName}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content.map((element, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{element?.studentName}</td>
                      <td>{element?.contactNo}</td>
                      <td>{element?.email}</td>
                      <td>{element?.description}</td>
                      <td>
                        <DropdownButton
                          key="down"
                          drop="down"
                          variant="secondary"
                          title="..."
                        >
                          <Dropdown.Item eventKey="1" onClick={handleShow}>
                            Reply
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="2">Remove</Dropdown.Item>
                        </DropdownButton>
                      </td>
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

export default ContactEnquiry;
