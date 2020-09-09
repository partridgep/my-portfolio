import React from 'react'
import Img from 'gatsby-image';

import styles from './MainPanel.module.scss'

import ProjectBlurb from '../ProjectBlurb'



export default function MainPanel({ project }) {

    return(
        <div className={styles.MainPanel}>

            <h1>{project.name}</h1>

            <div className={styles.screenshotWrapper}>
                <Img style={{position: "absolute"}} fluid={project.landingPage} className={styles.screenshots} />
                <Img fluid={project.selectionPage} className={styles.screenshots} />
                <Img style={{position: "absolute"}} fluid={project.detailPage} className={styles.screenshots} />
                <Img style={{position: "absolute"}} fluid={project.loginPage} className={styles.screenshots}/>
                <Img style={{position: "absolute"}} fluid={project.userPage} className={styles.screenshots} />
                <Img style={{position: "absolute"}} fluid={project.addPage} className={styles.screenshots} />
                <Img style={{position: "absolute"}} fluid={project.addPage2} className={styles.screenshots} />
            </div>

            <ProjectBlurb
                githubLink = {project.githubLink}
                liveLink = {project.liveLink}
                blurb = {project.blurb}
                technologies = {project.technologies}
            />


        </div>
    )
}