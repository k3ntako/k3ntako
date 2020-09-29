import React from "react";
import IconButton from "./IconButton";

import styles from "./Projects.css";
import VimeoPlayer from "./VimeoPlayer";

const linkTypes = [
  {
    key: "githubURL",
    name: "Github",
    icon: "fab fa-github",
  },
  {
    key: "demoURL",
    name: "Demo",
    icon: "fas fa-external-link-alt",
  },
  {
    key: "videoURL",
    name: "Video",
    icon: "fas fa-external-link-alt",
  },
];

export default (props) => {
  const { project } = props;

  const links = [];

  for (const linkType of linkTypes) {
    const url = project[linkType.key];
    if (url) {
      links.push(
        <IconButton
          key={linkType.key}
          text={linkType.name}
          icon={linkType.icon}
          link={url}
        />
      );
    }
  }

  let vimeo;
  if (project.vimeoVideoURL) {
    vimeo = <VimeoPlayer url={project.vimeoVideoURL} />;
  }

  const id = project.name.toLowerCase().split(" ").join("-");

  return (
    <div className={styles.card} id={id}>
      <div className="part">
        <h2 className={styles.title}>{project.name}</h2>
        {project.description}
        <div className={styles.buttons}>{links}</div>
        {vimeo}
      </div>
    </div>
  );
};
