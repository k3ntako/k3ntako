import React, {Component} from 'react';
import ProjectCard from './ProjectCard';

import styles from './ProjectCard.css';
import Project from '../../../models/Project';
import projectsInfo from './projectsInfo';

const fallbackFunc = (callback) => {
  window.setTimeout(callback, 1000/60);
}

const isVisibleInWindow = (windowHeight, rect) => {
  if( 0 > rect.bottom ) return false; // elem is above the viewport
  if( windowHeight < rect.top ) return false; // elem is below the viewport
  return true; // elem is in the viewport
}

export default class ProjectSection extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.scrollY = window.scrollY;
  }

  componentDidMount(){
    const scroll = window.requestAnimationFrame || fallbackFunc;
    const cardElements = document.querySelectorAll("." + styles.card);
    const loop = () => {
      const newScrollY = window.scrollY;
      if( newScrollY === this.scrollY){
        return scroll(loop); // no scroll, skip loop
      }

      this.scrollY = newScrollY;

      const windowHeight = window.innerHeight;
      cardElements.forEach(card => {
        const rect = card.getBoundingClientRect();

        if( isVisibleInWindow(windowHeight, rect) ){
          const offset = windowHeight - rect.top;
          const offsetPercentage = offset/windowHeight * 100;
          const translateY = offsetPercentage > 50 ? 0 : 40 - offsetPercentage;
          // card.style.transform = `translateY(${translateY}%)`; // old method, shakes at the bottom
          card.style.paddingTop = `${translateY}vh`;
        }
      })
      scroll(loop);
    }

    loop();
  }

  renderProjects = () => {
    return projectsInfo.map((project, idx) => {
      return <ProjectCard key={project.name} idx={idx} project={project} />
    });
  }

  render(){
    return <div id="projects" className={styles.projects}>
      { this.renderProjects() }
    </div>
  }
}
