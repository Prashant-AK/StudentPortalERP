import React from 'react';
import '../../App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import ResetPasswordImg from '../../assests/ResetPasswordImg.png';
import ReactRoundedImage from 'react-rounded-image';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/');
  };
  return (
    <>
      <div className="container" id="reset_container">
        <div className="row justify-content-center">
          <div className="col" id="resetimg">
            <img src={ResetPasswordImg} id="resetimg"></img>
          </div>

          <div
            className="col"
            id="reset_formcontainer"
            style={{ border: 'solid', borderColor: '#eeeeee' }}
          >
            <ReactRoundedImage
              className="formImg"
              image={ResetPasswordImg}
              roundedColor="#321124"
              imageWidth="120"
              imageHeight="120"
              roundedSize="1"
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
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="ResetInputfields"
                placeholder="Password"
              />
              <label for="floatingPassword">Confirm Password</label>
            </div>

            <button
              type="button"
              className="btn-lg"
              onClick={goToLogin}
              id="ConfirmPassword_btn"
            >
              Confirm Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
