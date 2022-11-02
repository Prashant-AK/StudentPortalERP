import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReactRoundedImage from 'react-rounded-image';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import classes from './Login.module.css';
import LoginImg from '../../assests/LoginImg.png';
import { loginThunk } from '../../redux/pages';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const check = useSelector((state) => state.loginState);

  const goToForgotPassword = () => {
    // navigate('./DashBoard');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('role is ', role === 'faculty');
    await dispatch(loginThunk.login({ email, password }));

    if (role === 'faculty') {
      navigate('/teacher');
    } else {
      navigate('/DashBoard');
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
            <img src={LoginImg} className={classes.loginImg}></img>
          </Col>

          <Col
            className={classes.loginFormContainer}
            style={{ border: 'solid', borderColor: '#B0CAE5' }}
          >
            <ReactRoundedImage
              className="formImg"
              image={LoginImg}
              roundedColor="#321124"
              imageWidth="100"
              imageHeight="100"
              roundedSize="0"
              borderRadius="70"
            />
            <div id="form_heading">
              <h3>Welcome Back!</h3>
              <h6 style={{ color: 'gray' }}>
                Login to your account to continue
              </h6>
            </div>

            <Form.Group style={{ marginTop: '1rem' }}>
              <select
                name="role"
                onChange={(e) => setRole(e.target.value)}
                value={role}
                className="form-select form-select-md mb-0"
                aria-label=".form-select-lg example"
              >
                <option selected>Select Role</option>
                <option value="admin">Super Admin</option>
                <option value="faculty">Teacher</option>
              </select>
            </Form.Group>
            <div className="form-floating mb-3" style={{ marginTop: '1rem' }}>
              <input
                type="email"
                className={`form-control ${classes.formInputs}`}
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className={`form-control ${classes.formInputs}`}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div style={{ display: 'flex' }}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  style={{}}
                />
                <label
                  className="form-check-label"
                  for="flexCheckDefault"
                  style={{ marginLeft: '5px' }}
                >
                  Keep me logged in
                </label>
              </div>
              <Link
                style={{ marginLeft: '5px' }}
                to="./ForgotPassword"
                id="forgot_password_link"
              >
                Forgot Password?
              </Link>
            </div>
            <div className={classes.loginBtnContainer}>
              <Button
                type="submit"
                className={classes.loginBtn}
                onClick={handleSubmit}
              >
                Log In
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Login;
