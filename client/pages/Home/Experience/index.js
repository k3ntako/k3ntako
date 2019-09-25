import React, {Component} from 'react';
import ExperienceCard from './ExperienceCard';

import styles from './index.css';

export default class ExperienceSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      experience: [
        {
          title: "Launch Academy",
          subtitle: "Boston, MA",
          details: [
            "Web development bootcamp taught using React, Rails, PostgreSQL",
            "Built fast, responsive, and tested websites",
          ],
          startDate: "Sep 2018",
          endDate: "Nov 2018",
        },{
          title: "Memorial Sloan Kettering Cancer Center",
          subtitle: "New York, NY - Research Study Assistant",
          details: ["Worked with engineers to develop a new database for cancer research"],
          startDate: "Sep 2017",
          endDate: "Jun 2018",
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

  componentDidMount(){
    const cardElements = document.querySelectorAll("." + styles.title);
    const cardElementObjects = [];
    cardElements.forEach(card =>{
      cardElementObjects.push({
        element: card,
        onScroll: this.onScroll,
      })
    })
    this.props.addElements(cardElementObjects);
  }

  onScroll = (windowHeight, elem, rect) => {
    const offset = windowHeight - rect.top;
    const offsetPercentage = offset/windowHeight * 100;
    const translateX = offsetPercentage > 30 ? 0 : 30 - offsetPercentage;
    elem.style.transform = `translateX(${translateX}vW)`;
  }

  renderExperience = () => {
    return this.state.experience.map(info => {
      return <ExperienceCard key={info.title} info={info} />
    })
  }

  render(){
    return <div id="experience">
      <Blank />
      { this.renderExperience() }
      <Blank />
    </div>
  }
}

const Blank = () => {
  return <div className={styles.wrapper}>
    <div className="part">
      <div className={`${styles.middle} ${styles.blank}`}>
        <svg>
          <line x1="50%" x2="50%" y1="0%" y2="100%" stroke="gray" strokeWidth="3" />
        </svg>
      </div>
    </div>
  </div>
}
