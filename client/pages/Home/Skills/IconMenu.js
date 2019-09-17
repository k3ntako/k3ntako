import React from 'react';
import SVG from 'react-inlinesvg';

import styles from './Icon.css';

export default (props) => {
  const info = props.info;
  const icon = info.src ? <SVG src={info.src} /> : <img src={info.img} />

  const isSelected = info.text === props.selected;
  const activeClass = isSelected || props.isIconMenuOpen ? styles.activeIconMenu : "";

  return <div className={`${styles.iconMenuWrapper} ${activeClass}`} onClick={() => props.onClick(info.text)}>
    <div className={styles.icon}>
      { icon }
    </div>
    <div className={styles.menuText}>
      <h4>{ info.text }</h4>
    </div>
    {isSelected && <div className={styles.downArrow}>
      <i className="fas fa-chevron-down"></i>
    </div>}
  </div>
}
