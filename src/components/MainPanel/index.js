import React from 'react'

import styles from './MainPanel.module.scss'

import ProjectBlurb from '../ProjectBlurb'

export default function MainPanel({ project }) {

    return(
        <div className={styles.MainPanel}>

            <ProjectBlurb
                githubLink = {project.githubLink}
                liveLink = {project.liveLink}
            />
            
        </div>
    )
}