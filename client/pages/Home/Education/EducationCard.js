import React from 'react';

import styles from './index.css';

const renderDetails = ( details ) => {
  return details.map((line, idx) => {
    const br = idx !== 0 && <br />;
    return <span key={line} className={styles.detail}>{ line }</span>
  });
}

export default (props) => {
  const info = props.info;

  return <div className={styles.wrapper} style={{ backgroundColor: info.color}}>
    <div className={`${styles.education} part`}>
      <div className={styles.left}>
        <span>{info.startDate}</span>
        <span>to</span>
        <span>{info.endDate}</span>
      </div>
      <div className={styles.middle}>
        <svg viewBox="0 0 80 150">
          <line x1="40" x2="40" y1="0" y2="150" stroke="gray" strokeWidth="3" />
          <circle cx="40" cy="75" r="5" fill="#fff" stroke="#34495e" strokeWidth="4" />
        </svg>
      </div>
      <div className={styles.right}>
        <h3>{ info.title }</h3>
        <span className={styles.subtitle}>{ info.subtitle }</span>
        { renderDetails(info.details) }
      </div>
    </div>
  </div>
}
// <img src="/images/vassar.png"/>
