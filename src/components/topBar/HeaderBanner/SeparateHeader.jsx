import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import DatePicker from 'react-date-picker';
import classes from './SeparateHeader.module.css';
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from 'react-icons/bs';

export const SeparateHeader = () => {
  const [startDate, setStartDate] = useState(new Date());
  console.log('startDate is ', startDate);
  return (
    <header className={classes.Header}>
      <div className={classes.HeaderContainer}>
        <p className={classes.HeaderHeading}>Daily Attendance</p>
        <p className={classes.HeaderSubHeading}>Dashboard / Daily Attendance</p>
        <div style={{ display: 'flex' }}>
          <select
            className="form-select form-select-lg mb-0"
            aria-label=".form-select-lg example"
            style={{
              width: '12rem',
              height: '2.5rem',
              borderRadius: '15px',
              fontSize: '1rem',
              marginRight: '15px',
            }}
          >
            <option selected>Select Course</option>
            <option value="1">One</option>
          </select>
          <select
            className="form-select form-select-lg mb-0"
            aria-label=".form-select-lg example"
            style={{
              width: '12rem',
              height: '2.5rem',
              borderRadius: '15px',
              fontSize: '1rem',
              marginRight: '15px',
            }}
          >
            <option selected>Select Class</option>
            <option value="1">One</option>
          </select>

          <div className={classes.HeaderSearchIcon}>
            <BiSearch style={{ marginLeft: '1rem' }} />
          </div>
          <div className={classes.HeaderDatePicker}>
            <span>
              <button className={classes.dateArrowIcon}>
                <BsArrowLeftCircleFill
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '100%',
                    color: '#2d5568',
                    fontSize: '1.5rem',
                    marginRight: '0.75rem',
                  }}
                />
              </button>
              <DatePicker
                todayButton="FilterDate"
                selected={startDate}
                value={startDate}
                onChange={(date) => setStartDate(date)}
                format="dd/MM/yyyy"
                style={{ color: 'white', border: 'none' }}
                clearIcon={null}
                suffixIcon={<></>}
              />
              <button className={classes.dateArrowIcon}>
                <BsArrowRightCircleFill
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '100%',
                    color: '#2d5568',
                    fontSize: '1.5rem',
                    marginLeft: '0.75rem',
                  }}
                />
              </button>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
