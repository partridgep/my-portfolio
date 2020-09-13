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
                <Img style={{
                    animationDelay: project.userPage ? "-20s" : "-19.5s"
                    }} fluid={project.selectionPage} className={styles.screenshots} />
                <Img style={{
                    position: "absolute",
                    animationDelay: project.userPage ? "-17s" : "-16s"
                    }} fluid={project.detailPage} className={styles.screenshots} />
                <Img style={{
                    position: "absolute",
                    animationDelay: project.userPage ? "-14s" : "-12.5s"
                    }} fluid={project.loginPage} className={styles.screenshots}/>
                {project.userPage && 
                <Img style={{
                    position: "absolute",
                    animationDelay: "-11s"
                    }} fluid={project.userPage} className={styles.screenshots} />
                }
                <Img style={{
                    position: "absolute",
                    animationDelay: project.userPage ? "-8s" : "-10s"
                    }} fluid={project.addPage} className={styles.screenshots} />
                <Img style={{
                    position: "absolute",
                    animationDelay: project.userPage ? "-5s" : "-5s"
                    }} fluid={project.addPage2} className={styles.screenshots} />
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