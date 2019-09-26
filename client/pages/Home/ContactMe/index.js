import React, { useState } from 'react';
import EmailForm from './EmailForm';

import styles from './index.css';

export default (props) => {
  return <div className={styles.wrapper}>
    <div id={"contactMe"} className={`part ${styles.innerWrapper}`}>
      <h2>Contact Me</h2>
      <p>
        kentarokaneki@gmail.com
      </p>
      <div>
        <EmailForm />
      </div>
    </div>
  </div>
}
