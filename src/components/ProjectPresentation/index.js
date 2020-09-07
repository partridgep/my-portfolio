import React from 'react'

import styles from './ProjectPresentation.module.scss'
import MainPanel from '../MainPanel'

export default function ProjectPresentation({ project }) {

    return(
        <div className={styles.ProjectPresentation}>

            <MainPanel project={project} />

        </div>
    )
}