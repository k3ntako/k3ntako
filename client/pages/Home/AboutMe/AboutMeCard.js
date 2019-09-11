import React from 'react';

import styles from './AboutMeCard.css';

export default (props) => {
  const info = props.info;

  return <div className={styles.cardWrapper}>
    <div className={`part ${styles.card}`}>
      <div className={styles.header}>
        <h3 className={styles.title}>{info.name}</h3>
        <div>
          {
            info.minorDetails.map((minorDetail, idx) => {
              return <span key={idx} className={styles.datumRight}>{ minorDetail }</span>
            })
          }
        </div>
      </div>
      {
        info.details.map((detail, idx) => <span key={idx}>{ detail }</span>)
      }
    </div>
  </div>
}
