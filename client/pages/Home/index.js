import React from 'react';
import Top from './Top';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import ContactMe from './ContactMe';
import { ToastContainer, toast } from 'react-toastify';

export default (props) => {
  return <>
    <Top />
    <Education />
    <Skills />
    <Projects />
    <ContactMe />
    <ToastContainer />
  </>
}
