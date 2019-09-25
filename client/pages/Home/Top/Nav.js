import React, { Component } from 'react';
import MobileMenu from './MobileMenu';
import ExternalLinkIcons from './ExternalLinkIcons';

import styles from './Nav.css';

const NAV_LINKS_INFO = [
  { href: "#experience", text: "Experience" },
  { href: "#skills", text: "Skills" },
  { href: "#projects", text: "Projects" },
  { href: "#contactMe", text: "Contact Me" },
];

const NAV_LINKS = NAV_LINKS_INFO.map(info => <a key={info.href} href={info.href}>{info.text}</a> );

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
        <a className={styles.fullname} onClick={this.scrollToTop}>
          Kentaro Kaneki
        </a>
        <a className={styles.firstname} onClick={this.scrollToTop}>
          Kentaro
        </a>
      </div>
      <div className={styles.pageLinks}>
        { NAV_LINKS }
      </div>
      <div className={styles.externalLinks}>
        <ExternalLinkIcons />
      </div>
      <MobileMenu navLinksInfo={ NAV_LINKS_INFO }/>
    </div>
  }
}
