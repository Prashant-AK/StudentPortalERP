import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import logout from '../../assests/logout.png';
import notification from '../../assests/notification.png';
import { loginThunk } from '../../redux/pages';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        <img src={notification} id="notification-icon" />
        <Button
          style={{ background: 'transparent', border: 'none' }}
          onClick={handleLogout}
        >
          <img src={logout} id="logout-icon" />
        </Button>
      </div>
    </div>
  );
};

export default Header;
