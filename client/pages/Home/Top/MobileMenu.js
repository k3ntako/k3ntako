import React, { Component } from 'react';
import ExternalLinkIcons from './ExternalLinkIcons';

import styles from './MobileMenu.css';

export default class MobileMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
    };
    this.body = document.getElementsByTagName('body')[0];
    this.links = props.navLinksInfo.map(info => <a key={info.href} href={info.href} onClick={this.closeMenu}>{info.text}</a> );
  }

  openMenu = () => {
    this.body.className += " navMenuOpen";
    this.setState({ isOpen: true });
  }

  closeMenu = () => {
    this.body.className = this.body.className.replace(" navMenuOpen", "");
    this.setState({ isOpen: false });
  }

  render(){
    const { isOpen } = this.state;
    const { navLinks } = this.props;
    const openClassName = isOpen ? styles.navMenuOpen : "";

    return <div className={styles.mobileMenu}>
      <a onClick={this.openMenu}>
        <i className="fas fa-bars"></i>
      </a>
      <div className={`${styles.menu} ${openClassName}`}>
        <a className={styles.closeButton} onClick={this.closeMenu}>
          <i className="fas fa-times"></i>
        </a>
        { this.links }
        <div className={styles.mobileExternalLinks}>
          <ExternalLinkIcons />
        </div>
      </div>
    </div>
  }
}
