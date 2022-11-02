import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import classes from './CustomModal.module.css';

function CustomModal(props) {
  const { handleClose } = props;
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        keyboard={false}
        backdrop="static"
        onHide={handleClose}
      >
        {props.children}
      </Modal>
    </>
  );
}

export default CustomModal;
