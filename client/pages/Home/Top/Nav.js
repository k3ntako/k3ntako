import React, {Component} from 'react';

import styles from './index.css';

export default class Top extends Component {
  constructor(props){
    super(props);
    this.state = {
      isSticky: false,
      windowHeight: 0,
      navOffsetTop: 0,
    };
    this.navBar = null;
  }

  componentDidMount(){
    this.navBar = document.getElementById(styles.nav);

    const windowHeight = window.innerHeight;
    const navOffsetTop = windowHeight - this.navBar.offsetHeight;

    this.setState({ navOffsetTop, windowHeight },
      () => {
        window.addEventListener('scroll', this.onScroll);
        window.addEventListener('resize', this.onResize);
      });
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onResize);
  }

  onScroll = () => {
    const isSticky = window.pageYOffset >= this.state.navOffsetTop;
    if( this.state.isSticky !== isSticky ){
      this.setState({ isSticky });
    }
  }

  onResize = () => {
    const windowHeight = window.innerHeight;
    const navOffsetTop = windowHeight - this.navBar.offsetHeight;
    const isSticky = window.pageYOffset >= this.state.navOffsetTop;
    if( this.state.windowHeight !== windowHeight ){
      this.setState({
        windowHeight,
        navOffsetTop,
        isSticky,
      });
    }
  }

  scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  }

  render(){
    const stickyClassName = this.state.isSticky ? styles.sticky : "";
    const hiddenClassName = this.state.isSticky ? "" : styles.hidden;

    return <div id={styles.nav} className={stickyClassName}>
      <div className={`${styles.websiteTitle} ${hiddenClassName}`}>
        <a onClick={this.scrollToTop}>
          Kentaro Kaneki
        </a>
      </div>
      <div className={styles.pageLinks}>
        <a href="#aboutMe">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contactMe">Contact Me</a>
      </div>
      <div className={styles.externalLinks}>
        <a href="https://github.com/k3ntako" target="_blank">
          <i className="fab fa-github fa-lg"></i>
        </a>
        <a href="https://linkedin.com/in/kentaro-kaneki/" target="_blank">
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
      </div>
    </div>
  }
}
