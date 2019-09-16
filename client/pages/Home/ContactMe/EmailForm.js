import React, { Component } from 'react';
import { toast } from 'react-toastify';
import Button from '../../../components/Form/Button';
import Input from '../../../components/Form/Input';
import Textarea from '../../../components/Form/Textarea';

import Email from '../../../models/Email';


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
    if( !this.validate() ){
      toast("We were unable to send your message.");
      return;
    }
    const { name, email, subject, message } = this.state;

    Email.send({
      name, email, subject, message
    }).then(response => {
      this.setState({
        name: "",
        email: "",
        subject: "",
        message: "",
        }, this.successToastify);
    });
  }

  successToastify(){
    toast.success("Sent! Thank you for your email!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }

  errorToastify( message ){
    const error = message || "Unable to send your message."
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }

  render(){
    const { name, email, subject, message } = this.state;
    return <div className={styles.form}>
      <Input type="text" placeholder="Your name" value={name} onChange={this.onNameChange} />
      <Input type="email" placeholder="Your email" value={email} onChange={this.onEmailChange} />
      <Input type="text" placeholder="Subject (optional)" value={subject} onChange={this.onSubjectChange} />
      <Textarea placeholder="Message" value={message} onChange={this.onMessageChange} />
      <div className={styles.buttonWrapper}>
        <Button text="Submit" onClick={this.submit} disabled={!this.validate()}/>
      </div>
    </div>
  }
}
