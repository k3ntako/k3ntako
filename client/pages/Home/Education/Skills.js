import React, { useState } from 'react';
import SVG from 'react-inlinesvg';
const skillTexts = require('./skillTexts');


import styles from './Skills.css';

const iconsTop = [
  { src: "/icons/javascript.svg", text: "Javascript" },
  { src: "/icons/ruby.svg", text: "Ruby" },
  { img: "/icons/database.png", text: "Database" },
]

const iconsBottom = [
  { img: "/icons/swift.png", text: "Swift" },
  { src: "/icons/python.svg", text: "Python" },
  { src: "/icons/r.svg", text: "R" },
]

export default (props) => {
  const [ selected, setSelected ] = useState("Javascript");

  return <div className={styles.wrapper}>
    <div className={`${styles.skills} part`}>
      <div className={styles.left}>
        {
          iconsTop.map(info => <Icon info={info} onClick={setSelected} selected={selected}/>)
        }
        <h5>Exposure to</h5>
        {
          iconsBottom.map(info => <Icon info={info} onClick={setSelected} selected={selected}/>)
        }
      </div>
      <div className={styles.right}>
        { skillTexts[selected] }
      </div>
    </div>
  </div>
}


const Icon = (props) => {
  const info = props.info;
  const icon = info.src ? <SVG src={info.src} /> : <img src={info.img} className={styles.image}/>
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
