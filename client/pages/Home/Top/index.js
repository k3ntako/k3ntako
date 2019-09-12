import React from 'react';
import Nav from './Nav';

import styles from './index.css';

export default () => {
  return <div className={styles.wrapper}>
    <div className={styles.inner}>
      <h1>Kentaro Kaneki</h1>
      <span>Full-stack developer</span>
      <span>Brooklyn, NY</span>
    </div>
    <Nav />
  </div>
}
