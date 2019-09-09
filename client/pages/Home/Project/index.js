import React, {Component} from 'react';
import ProjectCard from './ProjectCard';

import Project from '../../../models/Project';
import styles from './index.css';

export default class ProjectSection extends Component {
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
      <div className={styles.heading}>
        <h1 className="part">Projects</h1>
      </div>
      { this.renderProjects() }
    </div>
  }
}
