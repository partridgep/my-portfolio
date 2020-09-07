import React from 'react'
import {Link} from "gatsby"

import projects from '../../content/projects'

import styles from './ProjectBanner.module.scss'

export default function ProjectBanner({ selProject }) {

    const getLink = (projectName) => "/"+projectName.toLowerCase().replace(/\s/g, "-");

    return(
        <div className={styles.ProjectBanner}>
            <ul>
                {projects.map((project, index) => 
                <li key={index}><Link to={getLink(project.name)}
                style={{ color : getLink(project.name) === getLink(selProject.name) ? "black" : "rgb(85, 85, 85)" }} 
                >{project.name}</Link></li>) 
                 }
            </ul>
        </div>
    )
}