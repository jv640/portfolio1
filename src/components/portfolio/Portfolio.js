import React from 'react';
import { SectionContainer } from '../SectionContainer/SectionContainer';
import { SideNav } from '../sideNav/SideNav';
import './portfolio.css';

export const Portfolio = ({ 
    handleSectionClick,
    selectedSection,
    selectedHeading, 
    selectedQuote,
    about,
    skills,
    projects }) => {
    return (
        <div className = "portfolio-container">
            <div className = "sidenav-container">
                <SideNav 
                    handleSectionClick = {handleSectionClick}/>
            </div>
            <div className = "main-section-container">
                <SectionContainer
                    selectedSection={selectedSection}
					selectedHeading={selectedHeading}
					selectedQuote={selectedQuote}
					about={about}
					skills={skills}
					projects={projects} />
                <a href="https://github.com/jv640" >Visit Github</a>
        <a href="https://www.linkedin.com/in/jatin-verma-509170159/" >Visit LinkedIn</a>
            </div>

        </div>
    )
}
