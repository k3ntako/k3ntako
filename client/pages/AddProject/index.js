import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import Project from '../../models/Project';

class AddProject extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      description: "",
      githubURL: "",
      demoURL: "",
      videoURL: "",
      // startDate: "",
      // endDate: "",
      // technologies: "",
    };

    this.onNameChange = this.onChange.bind(this, "name");
    this.onDescriptionChange = this.onChange.bind(this, "description");
    this.onGithubURLChange = this.onChange.bind(this, "githubURL");
    this.onDemoURLChange = this.onChange.bind(this, "demoURL");
  }

  onChange(stateField, e){
    this.setState({
      [stateField]: e.target.value
    })
  }

  submit = () => {
    const { name, description, githubURL, demoURL, videoURL, startDate, endDate, technologies } = this.state;
    Project.create({
      name, description, githubURL, demoURL, videoURL, startDate, endDate, technologies
    })
  }

  render(){
    const { name, description, githubURL, demoURL } = this.state;
    return <div>
      <div>
        <label>Name</label>
        <input type="text" onChange={this.onNameChange} />
      </div>

      <div>
        <label>Description</label>
        <textarea onChange={this.onDescriptionChange} />
      </div>

      <div>
        <label>Github URL</label>
        <input type="text" onChange={this.onGithubURLChange} />
      </div>

      <div>
        <label>Demo URL</label>
        <input type="text" onChange={this.onDemoURLChange} />
      </div>

      <div>
        <label>Video URL</label>
        <input type="text" onChange={this.onDemoURLChange} />
      </div>

      <button onClick={this.submit}>Submit</button>
    </div>
  }
}

export default withRouter(AddProject);
