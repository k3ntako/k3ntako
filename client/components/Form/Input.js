import React, { Component } from 'react';
import styles from './index.css';

export default class Input extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    const { className, onChange, placeholder, type, value } = this.props;
    return <input
      className={`${styles.all} ${styles.input} ${className || ""}`}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value} />
  }
}
