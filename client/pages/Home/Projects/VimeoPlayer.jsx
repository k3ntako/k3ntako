import React from "react";
import styles from "./Projects.css";

export default ({ url }) => {
  return (
    <iframe
      className={styles.vimeo}
      src={url}
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
    ></iframe>
  );
};
