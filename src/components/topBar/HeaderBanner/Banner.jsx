import React from 'react';
import classes from './Banner.module.css';

function Banner(props) {
  return (
    <header {...props} className={classes.bannerHeader}>
      <div className={classes.bannerContainer}>{props.children}</div>
    </header>
  );
}

export default Banner;
