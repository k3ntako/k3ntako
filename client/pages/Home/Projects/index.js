import React, { Component } from "react";
import ProjectCard from "./ProjectCard";

import styles from "./Projects.css";
import projectsInfo from "./projectsInfo";

export default class ProjectSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const cardElements = document.querySelectorAll("." + styles.card);
    const cardElementObjects = [];
    cardElements.forEach((card) => {
      cardElementObjects.push({
        element: card,
        onScroll: this.onScroll,
      });
    });
    this.props.addElements(cardElementObjects);
  }

  onScroll = (windowHeight, elem, rect) => {
    const offset = windowHeight - rect.top;
    const offsetPercentage = (offset / windowHeight) * 100;
    const translateY = offsetPercentage > 50 ? 0 : 50 - offsetPercentage;
    elem.style.paddingTop = `${translateY}vh`;
  };

  renderProjects = () => {
    return projectsInfo.map((project) => {
      return <ProjectCard key={project.name} project={project} />;
    });
  };

  render() {
    return (
      <div id="projects" className={styles.projects}>
        {this.renderProjects()}
      </div>
    );
  }
}
