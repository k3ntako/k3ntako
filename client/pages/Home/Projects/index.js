import React, {Component} from 'react';
import ProjectCard from './ProjectCard';

import Project from '../../../models/Project';
import projectsInfo from './projectsInfo';

export default class ProjectSection extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  renderProjects = () => {
    return projectsInfo.map((project, idx) => {
      return <ProjectCard key={project.name} idx={idx} project={project} />
    });
  }

  render(){
    return <div id="projects">
      { this.renderProjects() }
    </div>
  }
}
