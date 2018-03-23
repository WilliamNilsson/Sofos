import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import placeHolder from '../../assets/images/placeHolder.jpg';
import classes from './Logo.css';

const logo = ( props ) => (
  <div className={classes.Logo} style={{height: props.height}}>
      <img src={placeHolder} alt="Sofos" />
  </div>
    );

export default logo;