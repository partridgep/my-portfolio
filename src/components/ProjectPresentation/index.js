import React from 'react'

import styles from './ProjectPresentation.module.scss'
import MainPanel from '../MainPanel'

import { ParallaxProvider } from 'react-scroll-parallax';

export default function ProjectPresentation({ project }) {

    return(
        <ParallaxProvider>
            <div className={styles.ProjectPresentation}>

                <MainPanel project={project} />

            </div>
        </ParallaxProvider>
    )
}