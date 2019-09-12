import React from 'react';
import AboutMe from './AboutMe';
import Education from './Education';
import Skills from './Skills';
import Projects from './Project';
import ContactMe from './ContactMe';
import { ToastContainer, toast } from 'react-toastify';

export default (props) => {
  return <div>
    <AboutMe />
    <Education />
    <Skills />
    <Projects />
    <ContactMe />
    <ToastContainer />
  </div>
}
