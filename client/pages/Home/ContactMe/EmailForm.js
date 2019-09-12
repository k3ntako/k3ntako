import React, { Component } from 'react';
import Button from '../../../components/Form/Button';
import Input from '../../../components/Form/Input';
import Textarea from '../../../components/Form/Textarea';

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

import styles from './index.css';

export default class EmailForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
    this.onNameChange = this.onChange.bind(this, "name");
    this.onEmailChange = this.onChange.bind(this, "email");
    this.onSubjectChange = this.onChange.bind(this, "subject");
    this.onMessageChange = this.onChange.bind(this, "message");
  }

  onChange(stateField, e){
    this.setState({
      [stateField]: e.target.value
    })
  }

  validate = () => {
    const { name, email, message } = this.state;
    return !!name.trim() && !!message.trim() && email && email.match(EMAIL_REGEX);
  }

  submit = () => {

  }

  render(){
    return <div className={styles.form}>
      <Input type="text" placeholder="Your name (required)" onChange={this.onNameChange} />
      <Input type="email" placeholder="Your email (required)" onChange={this.onEmailChange} />
      <Input type="text" placeholder="Subject" onChange={this.onSubjectChange} />
      <Textarea placeholder="Message (required)" onChange={this.onMessageChange} />
      <div className={styles.buttonWrapper}>
        <Button text="Submit" onClick={this.submit} disabled={!this.validate()}/>
      </div>
    </div>
  }
}
