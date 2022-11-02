import React from 'react';
import DatePicker from 'react-date-picker';

import classes from './bannerHeader.module.css';

export const BannerHeader = (props) => {
  return (
    <header className={classes.banner_header}>
      <div className={classes.banner_header_container}>{props.children}</div>
    </header>
  );
};
