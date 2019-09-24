import React, { useState } from 'react';
import EmailForm from './EmailForm';

import styles from './index.css';

export default (props) => {
  return <div id={"contactMe"} className={styles.wrapper}>
    <div className={`part ${styles.innerWrapper}`}>
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
