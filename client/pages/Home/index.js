import React, { Component } from 'react';
import Top from './Top';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import ContactMe from './ContactMe';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';

const fallbackFunc = (callback) => {
  window.setTimeout(callback, 1000/60);
}

const isVisibleInWindow = (windowHeight, rect) => {
  if( 0 > rect.bottom ) return false; // elem is above the viewport
  if( windowHeight < rect.top ) return false; // elem is below the viewport
  return true; // elem is in the viewport
}

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      elementObjects: [],
    };
    this.scrollY = window.scrollY;
  }

  componentDidMount(){
    const scroll = window.requestAnimationFrame || fallbackFunc;
    const loop = () => {
      const newScrollY = window.scrollY;
      if( newScrollY === this.scrollY){
        return scroll(loop); // no scroll, skip loop
      }

      this.scrollY = newScrollY;

      const windowHeight = window.innerHeight;
      this.state.elementObjects.forEach(elemObj => {
        const rect = elemObj.element.getBoundingClientRect();

        if( isVisibleInWindow(windowHeight, rect) ){
          elemObj.onScroll(windowHeight, elemObj.element, rect);
        }
      })
      scroll(loop);
    }

    loop();
  }

  addElements = (elemObjs) => {
    this.setState((prevState) => {
      return { elementObjects: prevState.elementObjects.concat(elemObjs) }
    })
  }

  render(){
    return <>
    <Top />
    <Experience addElements={this.addElements}/>
    <Skills />
    <Projects addElements={this.addElements}/>
    <ContactMe />
    <Footer />
    <ToastContainer />
    </>
  }
}
