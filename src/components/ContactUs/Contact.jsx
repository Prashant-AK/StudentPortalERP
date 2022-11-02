import React from 'react';

import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';

export const Contact = () => {
  return (
    <>
      {/* contact-icon-jsx-begins */}
      <div className="container" id="contact_container">
        <div className="row">
          <div>
            <div id="contact_heading_container">
              <FaPhoneAlt id="phoniconn" />
              <p id="heading"> Contact Us! </p>
            </div>
            <div className="underline"></div>
          </div>

          {/* contact-form-begins */}
          <div className="col" id="contact_form">
            <label for="Name" id="lables">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              aria-label="First name"
              id="Cont_form_inputs"
            />
            <label for="email" id="lables">
              Email ID
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Email ID"
              aria-label="First name"
              id="Cont_form_inputs"
            />
            <label for="message" id="lables">
              Message
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Message"
              aria-label="First name"
              id="cont_mssg_inputs"
            />
            <button id="submit_btn">Submit</button>
          </div>

          {/* contact-rightside-card-begins */}
          <div className="col">
            <div
              className="card"
              id="contact_card"
              style={{ width: '350px', height: '320px' }}
            >
              <div className="card-body">
                <h5 className="card-title" id="contact_card_title">
                  Contact Info
                </h5>
                <div id="underline"></div>
                <div id="contact_card_text">
                  <a href="mailto:" style={{ color: 'white' }}>
                    <p id="card-text">
                      {' '}
                      <FaEnvelope id="mailicon" />
                      admin@gmail.com
                    </p>
                  </a>
                  <a href="tel:+6494461709" style={{ color: 'white' }}>
                    <p id="card-text">
                      <FaPhoneAlt id="phonicon" style={{ color: 'white' }} />
                      9876543210
                    </p>
                  </a>
                  <p id="card-text">
                    <FaClock id="clockicon" />
                    09:00am-15:00pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact-icon-jsx Ends */}
    </>
  );
};
