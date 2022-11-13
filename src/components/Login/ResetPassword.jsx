import React, { useState } from 'react';
import '../../App.css';
import { Row, Col, Button, Form } from 'react-bootstrap';
import ResetPasswordImg from '../../assests/ResetPasswordImg.png';
import ReactRoundedImage from 'react-rounded-image';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import classes from './Login.module.css';

const DashBoard = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const goToLogin = () => {
    navigate('/');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === password2) {
      console.log(password);
    }
  };
  return (
    <>
      <div className={classes.mainContainer}>
        <Row>
          <Col
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div className={classes.loginImg}>
              <img src={ResetPasswordImg} width="100%" alt="Login" />
            </div>
          </Col>
          <Col
            className={classes.loginFormContainer}
            style={{ border: 'solid', borderColor: '#B0CAE5' }}
          >
            <ReactRoundedImage
              className="formImg"
              image={ResetPasswordImg}
              roundedColor="#321124"
              imageWidth="100"
              imageHeight="100"
              roundedSize="0"
              borderRadius="70"
            />
            <div id="form_heading">
              <h3>Reset Password </h3>
              <h6 style={{ color: 'gray' }}>
                Enter your password and login into your account
              </h6>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="ResetInputfields"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="ResetInputfields"
                placeholder="Password"
                onChange={(e) => setPassword2(e.target.value)}
              />
              <label for="floatingPassword">Confirm Password</label>
            </div>

            <button
              type="submit"
              className="btn-lg"
              onClick={goToLogin}
              id="ConfirmPassword_btn"
            >
              Confirm Password
            </button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DashBoard;
