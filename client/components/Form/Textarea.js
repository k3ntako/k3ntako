import React, { Component } from 'react';
import styles from './index.css';

export default class Textarea extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    const { className, onChange, placeholder, value } = this.props;
    return <textarea
      className={`${styles.all} ${styles.textarea} ${className|| ""}`}
      onChange={onChange}
      placeholder={placeholder}
      value={value} />
  }
}
