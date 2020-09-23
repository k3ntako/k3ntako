import React, { Component } from "react";
import ExperienceCard from "./ExperienceCard";
import experiencesInfo from "./experiencesInfo";

import styles from "./index.css";

export default class ExperienceSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const cardElements = document.querySelectorAll("." + styles.title);
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
    const translateX = offsetPercentage > 30 ? 0 : 30 - offsetPercentage;
    elem.style.transform = `translateX(${translateX}vW)`;
  };

  renderExperience = () => {
    return experiencesInfo.map((info) => {
      return <ExperienceCard key={info.title} info={info} />;
    });
  };

  render() {
    return (
      <div id="experience">
        <Blank />
        {this.renderExperience()}
        <Blank />
      </div>
    );
  }
}

const Blank = () => {
  return (
    <div className={styles.wrapper}>
      <div className="part">
        <div className={`${styles.middle} ${styles.blank}`}>
          <svg>
            <line
              x1="50%"
              x2="50%"
              y1="0%"
              y2="100%"
              stroke="gray"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
