import React, { useState, useRef } from 'react';
import { Button, Nav, Overlay, Card, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsCheckCircleFill, BsChevronDown } from 'react-icons/bs';

import logout from '../../assests/logout.png';
import notification from '../../assests/notification.png';
import { loginThunk } from '../../redux/pages';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const handleLogout = async () => {
    await dispatch(loginThunk.logout());
    navigate('/');
  };

  return (
    <div id="top_header">
      <div className="d-flex justify-content-end" id="header-icons">
        <div>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search by Roll no."
            aria-label="Search"
            id="search-bar"
          />
        </div>

        <Button
          ref={target}
          onClick={() => setShow(!show)}
          className="notification_icon_button"
        >
          <img src={notification} id="logout-icon" />
        </Button>
        <Overlay target={target.current} show={show} placement="bottom">
          {({ placement, arrowProps, show: _show, popper, ...props }) => (
            <div {...props} className="notification_panel">
              <Nav className="notification_panel_header">
                {' '}
                <div>
                  <h5> Notification (3)</h5>
                </div>
                <div>
                  <Button className="notification_icon_button">
                    Clear All
                  </Button>
                </div>
              </Nav>
              <div className="notification_panel_body">
                <div
                  className="notification_panel_card"
                  style={{ backgroundColor: '#e8f6ff' }}
                >
                  <div style={{ display: 'flex', margin: '0rem 1.5rem' }}>
                    <BsCheckCircleFill
                      style={{
                        color: '#01766F',
                        backgroundColor: 'transparent',
                        width: '30px',
                        height: '50px',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flex: 1,
                      flexDirection: 'column',
                      marginTop: '0.5rem',
                    }}
                  >
                    <h6 style={{ fontSize: '20px', fontWeight: 400 }}>
                      Lorem Ipsum
                    </h6>
                    <p style={{ fontSize: '13px' }}>
                      {' '}
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <p
                      style={{
                        fontSize: '13px',
                        fontWeight: 300,
                      }}
                    >
                      Read More
                    </p>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      marginTop: '0.75rem',
                      paddingRight: '2rem',
                    }}
                  >
                    <h6
                      style={{
                        fontSize: '15px',
                        fontWeight: 300,
                        color: '#01766F',
                      }}
                    >
                      3 min ago
                    </h6>
                  </div>
                </div>
                <div
                  style={{ backgroundColor: '#fff', height: ' 11vh' }}
                  className="notification_panel_card"
                >
                  <div style={{ display: 'flex', margin: '0rem 1.5rem' }}>
                    <BsCheckCircleFill
                      style={{
                        color: '#01766F',
                        backgroundColor: 'transparent',
                        width: '30px',
                        height: '50px',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flex: 1,
                      flexDirection: 'column',
                      marginTop: '0.5rem',
                    }}
                  >
                    <h6 style={{ fontSize: '20px', fontWeight: 400 }}>
                      Lorem Ipsum
                    </h6>
                    <p style={{ fontSize: '13px' }}>
                      {' '}
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      marginTop: '0.75rem',
                      paddingRight: '2rem',
                    }}
                  >
                    <h6
                      style={{
                        fontSize: '15px',
                        fontWeight: 300,
                        color: '#01766F',
                      }}
                    >
                      3 min ago
                    </h6>
                  </div>
                </div>
                <div className="notification_panel_card">
                  <div style={{ display: 'flex', margin: '0rem 1.5rem' }}>
                    <BsCheckCircleFill
                      style={{
                        color: '#01766F',
                        backgroundColor: 'transparent',
                        width: '30px',
                        height: '50px',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flex: 1,
                      flexDirection: 'column',
                      marginTop: '0.5rem',
                    }}
                  >
                    <h6 style={{ fontSize: '20px', fontWeight: 400 }}>
                      Lorem Ipsum
                    </h6>
                    <p style={{ fontSize: '13px' }}>
                      {' '}
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <p
                      style={{
                        fontSize: '13px',
                        fontWeight: 300,
                      }}
                    >
                      Read More
                    </p>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      marginTop: '0.75rem',
                      paddingRight: '2rem',
                    }}
                  >
                    <h6
                      style={{
                        fontSize: '15px',
                        fontWeight: 300,
                        color: '#01766F',
                      }}
                    >
                      3 min ago
                    </h6>
                  </div>
                </div>
              </div>
              <Nav
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '0.75rem',
                }}
              >
                <Button
                  className="notification_icon_button"
                  style={{ color: '#000000' }}
                >
                  See All <BsChevronDown />
                </Button>
              </Nav>
            </div>
          )}
        </Overlay>

        <Button onClick={handleLogout} className="notification_icon_button">
          <img src={logout} id="logout-icon" />
        </Button>
      </div>
    </div>
  );
};

export default Header;
