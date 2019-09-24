import React, { useState } from 'react';

import styles from './index.css';

export default (props) => {
  return <div id={"footer"} className={styles.wrapper}>
    <div className={`part ${styles.innerWrapper}`}>

      <a href="mailto:kentarokaneki@gmail.coms">
        <i className="fas fa-envelope fa-3x"></i>
        Email
      </a>
      
      <a href="https://github.com/k3ntako" target="_blank">
        <i className="fab fa-github fa-3x"></i>
        Github
      </a>

      <a href="https://linkedin.com/in/kentaro-kaneki/" target="_blank">
        <i className="fab fa-linkedin fa-3x"></i>
        LinkedIn
      </a>

    </div>
  </div>
}
