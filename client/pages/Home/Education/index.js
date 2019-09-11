import React, {Component} from 'react';
import EducationCard from './EducationCard';

import styles from './index.css';

export default class EducationSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      education: [
        {
          color: "#fff",
          title: "Launch Academy",
          subtitle: "Boston, MA",
          details: [
            "React, Rails, PostgreSQL",
            "Fast, responsive, and tested websites"
          ],
          startDate: "Sept 2018",
          endDate: "Nov 2018",
        },{
          color: "#fff",
          title: "Memorial Sloan Kettering Cancer Center",
          subtitle: "New York, NY - Research Study Assistant",
          details: ["Worked with engineers to develop a new database for cancer research"],
          startDate: "Sept 2017",
          endDate: "June 2018",
        },{
          color: "#fff",
          title: "Vassar College",
          subtitle: "Poughkeepsie, NY",
          details: ["B.A. Neuroscience and Behavior; Asian Studies (Minor)"],
          startDate: "Aug 2013",
          endDate: "May 2017",
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
