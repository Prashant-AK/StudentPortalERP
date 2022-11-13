import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import OTPimg from '../../assests/OTPimg.png';
import ReactRoundedImage from 'react-rounded-image';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import OTPInput, { ResendOTP } from 'otp-input-react';

import '../../App.css';
import classes from './Login.module.css';

const OTP = () => {
  const [OTP, setOTP] = useState('');

  const navigate = useNavigate();
  const goToResetPassword = () => {
    navigate('/ResetPassword');
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
              <img src={OTPimg} width="100%" alt="Login" />
            </div>
          </Col>

          <Col
            className={classes.loginFormContainer}
            style={{ border: 'solid', borderColor: '#B0CAE5' }}
          >
            <ReactRoundedImage
              image={OTPimg}
              roundedColor="#321124"
              imageWidth="100"
              imageHeight="100"
              roundedSize="0"
              borderRadius="70"
            />

            <div id="form_heading">
              <h3>OTP Verification</h3>
              <h6 style={{ color: 'gray' }}>
                Enter the OTP sent to your email address<br></br>
                teachers@gmail.com to reset your password
              </h6>
            </div>

            <div id="OTP_inputfields">
              <OTPInput
                value={OTP}
                onChange={setOTP}
                autoFocus
                OTPLength={4}
                otpType="number"
                disabled={false}
                secure
              />
            </div>
            <Link to="/" id="resendOtp_link">
              resend OTP
            </Link>
            {/* <ResendOTP handelResendClick={() => console.log("Resend clicked")} /> */}
            <br />
            <div className={classes.loginBtnContainer}>
              <Button onClick={goToResetPassword} id="ConfirmOTPbtn">
                Confirm OTP
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default OTP;
