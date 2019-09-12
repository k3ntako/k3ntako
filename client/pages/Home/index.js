import React from 'react';
import AboutMe from './AboutMe';
import Education from './Education';
import Skills from './Skills';
import Projects from './Project';
import ContactMe from './ContactMe';

export default (props) => {
  return <div>
    <AboutMe />
    <Education />
    <Skills />
    <Projects />
    <ContactMe />
  </div>
}
