import React, {Component} from 'react';
import ProjectCard from './ProjectCard';

import Project from '../../models/Project';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects: [],
    };
  }

  componentDidMount = () => {
    Project.all().then(projects => {
      this.setState({ projects });
    });
  }

  renderProjects = () => {
    return this.state.projects.map((project, idx) => {
      return <ProjectCard key={project.id} idx={idx} project={project} />
    });
  }

  render(){
    return <div className="page">
      <h1>Kentaro's Projects</h1>
      { this.renderProjects() }
    </div>
  }
}
