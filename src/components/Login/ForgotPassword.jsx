import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import ForgotPasswordImg from '../../assests/ForgotPasswordImg.png';
import ReactRoundedImage from 'react-rounded-image';
import '../../App.css';

import classes from './Login.module.css';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const goToOTP = () => {
    navigate('/OTP');
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
              {/* <img src={ForgotPasswordImg} id="Forgotimg"/> */}
              <img src={ForgotPasswordImg} width="100%" alt="Login" />
            </div>
          </Col>

          <Col
            className={classes.loginFormContainer}
            style={{ border: 'solid', borderColor: '#B0CAE5' }}
          >
            <ReactRoundedImage
              className="formImg"
              image={ForgotPasswordImg}
              roundedColor="#321124"
              imageWidth="120"
              imageHeight="120"
              roundedSize="0"
              borderRadius="70"
            />
            <div id="form_heading">
              <h3>Forgot Password ?</h3>
              <h6 style={{ color: 'gray' }}>
                Enter your email address to reset your password{' '}
              </h6>
            </div>

            <form>
              <div className="form-floating mb-3">
                <select
                  className="form-select"
                  id="ForgotInputfields"
                  aria-label="Floating label select example"
                  style={{ paddingTop: '1px' }}
                >
                  <option selected>teacher</option>
                  <option value="1">student</option>
                </select>
              </div>

              <div className="form-floating mb-3">
                <input
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  id="ForgotInputfields"
                  placeholder="name@example.com"
                  value={email}
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div className={classes.loginBtnContainer}>
                <Button
                  // className={classes.loginBtn}
                  onClick={goToOTP}
                  id="sendotp_btn"
                >
                  Send OTP
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default ForgotPassword;
