import React from 'react'

import styles from './ProjectPresentation.module.scss'
import MainPanel from '../MainPanel'

export default function ProjectPresentation({ project }) {

    return(
        <div className={styles.ProjectPresentation}>
            <h1>{project.name}</h1>

            <MainPanel project={project} />

        </div>
    )
}