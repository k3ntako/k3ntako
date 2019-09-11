import React, {Component} from 'react';
import EducationCard from './EducationCard';

import styles from './index.css';

export default class EducationSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      education: [
        {
          title: "Launch Academy",
          subtitle: "Boston, MA",
          details: [
            "React, Rails, PostgreSQL",
            "Fast, responsive, and tested websites"
          ],
          startDate: "Sept 2018",
          endDate: "Nov 2018",
        },{
          title: "Memorial Sloan Kettering Cancer Center",
          subtitle: "New York, NY - Research Study Assistant",
          details: ["Worked with engineers to develop a new database for cancer research"],
          startDate: "Sept 2017",
          endDate: "June 2018",
        },{
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
    return <div id="aboutMe">
      <Blank />
      { this.renderEducation() }
      <Blank />
    </div>
  }
}

const Blank = () => {
  return <div className={styles.wrapper}>
    <div className="part">
      <div className={styles.blank}>
        <svg viewBox="0 0 125 75">
          <line x1="115" x2="115" y1="0" y2="75" stroke="gray" strokeWidth="3" />
        </svg>
      </div>
    </div>
  </div>
}
