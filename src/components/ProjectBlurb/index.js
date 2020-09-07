import React from 'react'

import styles from './ProjectBlurb.module.scss'

export default function ProjectBlurb({ githubLink, liveLink }) {

    return(
        <div className={styles.ProjectBlurb}>
            <a href={githubLink} >Access code and README on GitHub</a>
            <a href={liveLink} >View live project</a>
        </div>
    )
}