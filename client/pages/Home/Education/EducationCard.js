import React from 'react';

import styles from './index.css';

const renderDetails = ( details ) => {
  const detailsArr = details.split(/[\r\n]+/);
  return detailsArr.map((line, idx) => {
    const br = idx !== 0 && <br />;
    return <>
      { br }
      <span className={styles.minor}>{ line }</span>
    </>
  });
}

export default (props) => {
  const info = props.info;

  return <div className={styles.wrapper} style={{ backgroundColor: info.color}}>
    <div className={`${styles.education} part`}>
      <div className={styles.left}>
        <span>{ info.title }</span>
      </div>
      <div className={styles.right}>
        <h2>{ info.subtitle }</h2>
        { renderDetails(info.details) }
      </div>
    </div>
  </div>
}
// <img src="/images/vassar.png"/>
