import React from 'react';
import './about.css';
import ProjectsSummary from '../Components/ProjectsSummary';

function About() {
  return (
    <div className='about-section app-content'>

          <div className='about-banner'>
            <div className='about-text-container'>
            <h1 className='sara-name'>Sara Donaldson</h1>
            <h2 className='subheading-about'>Full Stack Developer</h2>
            <h3 className='about-description'>with skills in React, JavaScript, HTML, CSS, Node, Express and mySQL.</h3>
            </div>
            </div>
            
            <ProjectsSummary/>



    </div>
  )
}

export default About