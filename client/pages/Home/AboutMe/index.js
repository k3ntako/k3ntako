import React, {Component} from 'react';
import AboutMeCard from './AboutMeCard';

// import Person from '../../../models/Person';
import styles from './index.css';

export default class AboutMeSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      me: {
        firstname: "Kentaro",
        lastname: "Kaneki",
        githubURL: "https://github.com/k3ntako",
        linkedInURL: "https://linkedin.com/in/kentaro-kaneki/",
        education: [
          {
            name: "Launch Academy",
            details: [ "" ],
            minorDetails: [ "Boston, MA", "September 2018 to November 2018"],
          },{
            name: "Vassar College",
            details: ["B.A. Neuroscience and Behavior; Asian Studies (Minor)"],
            minorDetails: [ "Poughkeepsie, NY", "August 2013 to May 2017"],
          },
        ]
      },
    };
  }

  renderEducation = () => {
    return this.state.me.education.map(info => {
      return <AboutMeCard info={info} />
    })
  }

  render(){
    return <div className={styles.wrapper}>
      <div className={styles.inner}>
        <h1>Kentaro Kaneki</h1>
        <span>Full-stack developer</span>
        <span>Brooklyn, NY</span>
      </div>
      <div className={styles.nav}>
        <a href="#aboutMe">About Me</a>
        <a href="#projects">Projects</a>
      </div>
    </div>
  }
}
