import React, {Component} from 'react';
import EducationCard from './EducationCard';

import styles from './index.css';

export default class EducationSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      education: [
        {
          color: "#287B42",
          title: "Launch Academy",
          subtitle: "React, Rails, PostgreSQL",
          details: "Fast, responsive, and tested websites",
        },{
          color: "#3776C7",
          title: "Memorial Sloan Kettering",
          subtitle: "Research Study Assistant",
          details: "Worked with engineers to develop a new database for cancer research",
        },{
          color: "#7B2842",
          title: "Vassar College",
          subtitle: "Neuroscience",
          details: "Asian Studies (minor)",
        }
      ]
    };
  }

  renderEducation = () => {
    return this.state.education.map(info => {
      return <EducationCard key={info.title} info={info} />
    })
  }

  render(){
    return <div>
      { this.renderEducation() }
    </div>
  }
}
// <img src="/images/vassar.png"/>
// color: "#002842",
