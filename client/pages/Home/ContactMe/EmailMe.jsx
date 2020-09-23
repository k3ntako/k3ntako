import React from "react";
import { toast } from "react-toastify";

import Email from "../../../models/Email";
import EmailForm from "./EmailForm";

export default () => {
  const submit = async (name, email, subject, message) => {
    const response = await Email.send({
      name,
      email,
      subject,
      message,
    });

    if (response.okay) {
      successToastify();
      return true;
    }

    errorToastify("Sorry, the message was not sent.");
    return false;
  };

  const successToastify = () => {
    toast.success("Sent! Thank you for your email!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const errorToastify = (message = "Unable to send your message.") => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return <EmailForm submit={submit} />;
};
