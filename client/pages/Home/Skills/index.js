import React, { useState } from 'react';
import Icon from './Icon';
import IconMenu from './IconMenu';

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
  const [ isIconMenuOpen, setIsIconMenuOpen] = useState(false);

  const onMenuClick = ( selected ) => {
    if( !isIconMenuOpen ){
      setIsIconMenuOpen(true);
    }else{
      setSelected( selected );
      setIsIconMenuOpen(false);
    }
  }

  const allIcons = iconsTop.concat(iconsBottom);
  let iconMenu = [];
  for( let i = 0; i < allIcons.length; i++ ){
    const info = allIcons[i];
    const menuItem = <IconMenu
      key={info.text}
      isIconMenuOpen={isIconMenuOpen}
      info={info}
      onClick={onMenuClick}
      selected={selected} />

    if( selected === info.text ){
      iconMenu.unshift(menuItem)
    }else{
      iconMenu.push(menuItem);
    }
  }

  return <div id="skills">
    <div className={styles.wrapper}>
      <div className={`${styles.skills} part`}>
        <div className={styles.left}>
          {
            iconsTop.map(info => <Icon key={info.text} info={info} onClick={setSelected} selected={selected}/>)
          }
          <h5>Exposure to</h5>
          {
            iconsBottom.map((info, idx) => <Icon key={info.text} info={info} onClick={setSelected} selected={selected}/>)
          }
        </div>
        <div className={styles.right}>
          <div className={styles.outerOuterIconMenuWrapper}>
            <div className={styles.outerIconMenuWrapper}>
              { iconMenu }
            </div>
          </div>
          { skillTexts[selected] }
        </div>
      </div>
    </div>
  </div>
}
