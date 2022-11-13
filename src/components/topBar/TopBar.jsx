import React, { useState, useRef } from 'react';
import { Button, Overlay } from 'react-bootstrap';
import logout from '../../assests/logout.png';
import notification from '../../assests/notification.png';
import { BiSearch } from 'react-icons/bi';
export const TopBar = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
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
            <div
              {...props}
              style={{
                position: 'absolute',
                backgroundColor: 'rgba(255, 100, 100, 0.85)',
                padding: '2px 10px',
                color: 'white',
                borderRadius: 3,
                ...props.style,
              }}
            >
              Simple tooltip
            </div>
          )}
        </Overlay>

        <Button
          // onClick={handleLogout}
          className="notification_icon_button"
        >
          <img src={logout} id="logout-icon" />
        </Button>
      </div>
    </div>
  );
};
