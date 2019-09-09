import React from 'react';
import IconButton from './IconButton';

import styles from './ProjectCard.css';

//shades of Apple six-colors logo colors
const COLORS = [
  styles.blue,
  styles.purple,
  styles.red,
  styles.orange,
  styles.yellow,
  styles.green,
]

export default (props) => {
  const { idx, project } = props;

  return <div className={`${styles.card} ${COLORS[idx%6]}`}>
    <h2 className={styles.title}>{ project.name }</h2>
    <p>{ project.description }</p>
    <div className={styles.buttons}>
      <IconButton text="Github" icon="fab fa-github" link={project.githubURL} />
      <IconButton text="Demo" icon="fas fa-external-link-alt" link={project.demoURL} />
    </div>
  </div>
}
