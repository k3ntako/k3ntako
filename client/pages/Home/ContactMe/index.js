import React, { useState } from "react";
import EmailMe from "./EmailMe";

import styles from "./index.css";

export default (props) => {
  return (
    <div className={styles.wrapper}>
      <div id={"contactMe"} className={`part ${styles.innerWrapper}`}>
        <h2>Contact Me</h2>
        <p>kentarokaneki@gmail.com</p>
        <div>
          <EmailMe />
        </div>
      </div>
    </div>
  );
};
