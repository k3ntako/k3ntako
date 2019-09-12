import React from 'react';
import SVG from 'react-inlinesvg';

import styles from './Icon.css';

export default (props) => {
  const info = props.info;
  const icon = info.src ? <SVG src={info.src} /> : <img src={info.img} />
  const activeClass = info.text === props.selected ? styles.active : "";

  return <div className={`${styles.iconWrapper} ${activeClass}`} onClick={() => props.onClick(info.text)}>
    <div className={styles.icon}>
      { icon }
    </div>
    <div className={styles.text}>
      { info.text }
    </div>
  </div>
}
