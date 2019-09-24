import React from 'react';
import IconButton from './IconButton';

import styles from './ProjectCard.css';


export default (props) => {
  const { idx, project } = props;

  return <div className={styles.card}>
    <div className="part">
      <h2 className={styles.title}>{ project.name }</h2>
      { project.description }
      <div className={styles.buttons}>
        <IconButton text="Github" icon="fab fa-github" link={project.githubURL} />
        <IconButton text="Demo" icon="fas fa-external-link-alt" link={project.demoURL} />
      </div>
    </div>
  </div>
}
