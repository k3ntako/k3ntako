import React, { useState } from "react";

import Button from "../../../components/Form/Button";
import Input from "../../../components/Form/Input";
import Textarea from "../../../components/Form/Textarea";

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

import styles from "./index.css";

export default ({ submit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const validate = () => {
    return (
      !!name.trim() && !!message.trim() && email && email.match(EMAIL_REGEX)
    );
  };

  const onClick = async () => {
    if (!validate()) {
      return;
    }

    const successful = await submit(name, email, subject, message);

    if (successful) {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <div className={styles.form}>
      <Input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Subject (optional)"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <Textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className={styles.buttonWrapper}>
        <Button text="Submit" onClick={onClick} disabled={!validate()} />
      </div>
    </div>
  );
};
