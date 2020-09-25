import React from 'react'
import './sidenav.css'
export const SideNav = ( { handleSectionClick }) => {
    return(
        <div className="sidenav">
            <img
                src ="https://avatars3.githubusercontent.com/u/42065404?s=460&u=80bf15fcc05c5ad162785c4e579ebd1a17550b63&v=4"
                className = "avatar"
                alt = "avatar" />
                <h2 className = "main-name">Jatin Verma</h2>
                <p className = "subtitle">"A person who code"</p>
                <div className = "sections-list">
                    <p className = "section-list-element" onClick={ () => handleSectionClick("about") }>About Me</p>
                    <p className = "section-list-element" onClick={ () => handleSectionClick("skills") }>Skills</p>
                    <p className = "section-list-element" onClick={ () => handleSectionClick("projects") }>Projects</p>
                </div>
        </div>
    )
};
