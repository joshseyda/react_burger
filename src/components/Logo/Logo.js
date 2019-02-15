import React from 'react';
import favicon from '../../assets/images/favicon.ico';
import styles from './Logo.module.css';

const logo = (props) => (
  <div className={styles.Logo} style={{height: props.height}}>
    <img src={favicon} alt="MyLogo"/>
  </div>
);

export default logo;