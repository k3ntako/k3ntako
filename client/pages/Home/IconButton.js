import React from 'react';
import styles from './ProjectCard.css';

export default (props) => {
  return <a href={props.link} target="_blank" className={styles.button}>
    <span className={styles.text}>{props.text}</span>
    <i className={props.icon}></i>
  </a>
}
