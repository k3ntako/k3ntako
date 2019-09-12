import React, {Component} from 'react';
import AboutMeCard from './AboutMeCard';

// import Person from '../../../models/Person';
import styles from './index.css';

export default class AboutMeSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      isSticky: false,
      windowHeight: 0,
      navOffsetTop: 0,
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

  renderEducation = () => {
    return this.state.me.education.map(info => {
      return <AboutMeCard key={info.name} info={info} />
    })
  }

  render(){
    const stickyClassName = this.state.isSticky ? styles.sticky : "";

    return <div className={styles.wrapper}>
      <div className={styles.inner}>
        <h1>Kentaro Kaneki</h1>
        <span>Full-stack developer</span>
        <span>Brooklyn, NY</span>
      </div>
      <div id={styles.nav} className={stickyClassName}>
        <a href="#aboutMe">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contactMe">Contact Me</a>
      </div>
    </div>
  }
}
