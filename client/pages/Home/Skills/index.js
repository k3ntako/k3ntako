import React, { useState } from 'react';
import Icon from './Icon';

const skillTexts = require('./skillTexts');
import styles from './index.css';

const iconsTop = [
  { src: "/icons/javascript.svg", text: "Javascript" },
  { src: "/icons/ruby.svg", text: "Ruby" },
  { img: "/icons/database.png", text: "Database" },
  { img: "/icons/code.png", text: "Other" },
]

const iconsBottom = [
  { img: "/icons/swift.png", text: "Swift" },
  { src: "/icons/python.svg", text: "Python" },
  { src: "/icons/r.svg", text: "R" },
]

export default (props) => {
  const [ selected, setSelected ] = useState("Javascript");

  return <div id="skills">
    <div className={styles.wrapper}>
      <div className={`${styles.skills} part`}>
        <div className={styles.left}>
          {
            iconsTop.map(info => <Icon key={info.text} info={info} onClick={setSelected} selected={selected}/>)
          }
          <h5>Exposure to</h5>
          {
            iconsBottom.map(info => <Icon key={info.text} info={info} onClick={setSelected} selected={selected}/>)
          }
        </div>
        <div className={styles.right}>
          { skillTexts[selected] }
        </div>
      </div>
    </div>
  </div>
}
