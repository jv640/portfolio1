import React from 'react';
import { About } from '../About/About';
import { Skills } from '../Skills/Skills';
import { Projects } from '../Projects/Projects';

import './sectionContainer.css'

export const SectionContainer = ({
    selectedHeading, 
    selectedQuote,
    selectedSection,
    about,
    skills,
    projects }) => {
    return(
        <div className = "section-container">
            <div className = "section-heading-container">
                <h1 className = "main-heading">{selectedHeading}</h1>
                <p className = "main-quote">{selectedQuote}</p>
            </div>
            <div className = "section-container">
                {
                    {
                        about: <About bio={about.bio} />,
                        skills: <Skills skills={skills} />,
                        projects: <Projects projects={projects} />
                    }[selectedSection]
                }
            </div>
            <a href="https://www.github.com/jv640" style={{paddingRight:'1 rem'}}>
                <img src="./../../../public/github.png" alt = "Github Link" /></a>
               
            
            <a href="https://www.linkedin.com/in/jatin-verma-509170159/" style={{paddingRight:'1 rem'}}>
            <img src="./../../../public/linkedin.png" alt = "LinkedIn Link" /></a>
        </div>
    )
}
