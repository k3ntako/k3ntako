import React, { Component } from 'react';
import styles from './index.css';

export default class Input extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    const { className, onClick, text, disabled } = this.props;
    const onClickFunc = disabled ? () => {} : onClick;
    const disabledClassName = disabled ? styles.disabled : "";

    return <button
      className={`${styles.all} ${styles.button} ${styles.className || ""} ${disabledClassName}`}
      onClick={onClickFunc}>
      { text }
    </button>
  }
}
