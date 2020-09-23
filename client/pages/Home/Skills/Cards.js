import React, { Component } from "react";
import Icon from "./Icon";

const skillTexts = require("./skillTexts");
import styles from "./Cards.css";

const skillTextKeys = Object.keys(skillTexts);

export default class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
    };
    this.startX = 0;
    this.startY = 0;
  }

  componentDidMount() {
    const card = document.getElementById(styles.card);
    card.addEventListener("touchmove", this.onTouchMove, { passive: false });
  }

  componentWillUnmount() {
    const card = document.getElementById(styles.card);
    card.removeEventListener("touchmove", this.onTouchMove);
  }

  onTouchStart = (e) => {
    this.startX = e.changedTouches[0].pageX;
    this.startY = e.changedTouches[0].clientY;
  };

  onTouchEnd = (e) => {
    const endX = e.changedTouches[0].pageX;
    const endY = e.changedTouches[0].clientY;
    const deltaX = this.startX - endX;
    const deltaY = this.startY - endY;
    const movedRight = deltaX > 0;

    if (Math.abs(deltaX) < 30 || Math.abs(deltaY) > 100) {
      return null;
    }

    const pageChange = movedRight ? this.next() : this.back();
  };

  onTouchMove = (e) => {
    const minValue = 10;
    const change = this.startY - e.changedTouches[0].clientY;

    if (e.cancelable && Math.abs(change) < minValue) {
      e.preventDefault();
      e.returnValue = false;
      return false;
    }
  };

  setPage = (newPage) => {
    this.setState({ page: newPage });
  };

  back = () => {
    const newPage = this.state.page - 1;
    if (newPage < 0) {
      this.setPage(0);
    } else {
      this.setPage(newPage);
    }
  };

  next = () => {
    const newPage = this.state.page + 1;
    if (skillTextKeys.length <= newPage) {
      this.setPage(skillTextKeys.length - 1);
    } else {
      this.setPage(newPage);
    }
  };

  render() {
    const pagination = skillTextKeys.map((key, idx) => {
      const cardNumWithArrows = skillTextKeys.length + 2;
      const cx =
        (100 / cardNumWithArrows) * (idx + 2) - 100 / cardNumWithArrows / 2;
      const color = idx === this.state.page ? "#fff" : "#aaa";
      return (
        <circle
          key={key}
          cx={cx + "%"}
          cy="50%"
          r="10"
          stroke="#34495e"
          strokeWidth="7"
          fill={color}
          onClick={() => this.setPage(idx)}
        />
      );
    });

    const disableFirst = this.state.page <= 0 ? styles.hidden : "";
    const disableLast =
      this.state.page >= skillTextKeys.length - 1 ? styles.hidden : "";

    return (
      <div
        id={styles.card}
        onTouchStart={this.onTouchStart}
        onTouchEnd={this.onTouchEnd}
      >
        {skillTexts[skillTextKeys[this.state.page]]}
        <div className={styles.pagination}>
          <a onClick={this.back} className={`${styles.back} ${disableFirst}`}>
            <i className="fas fa-chevron-left"></i>
          </a>
          <svg>{pagination}</svg>
          <a onClick={this.next} className={`${styles.next} ${disableLast}`}>
            <i className="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
    );
  }
}
