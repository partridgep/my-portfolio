import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons'

import styles from './ProjectBlurb.module.scss'

import { Parallax } from 'react-scroll-parallax';
import Fade from 'react-reveal/Fade';

import TechnologiesBanner from '../TechnologiesBanner'

export default function ProjectBlurb({ githubLink, liveLink, blurb, technologies }) {

    return(
        <div className={styles.ProjectBlurb}>

            <Parallax y={[-10, 10]} tagOuter="figure" styleInner={{display: "flex", flexDirection: "column"}}>
                {githubLink && <a href={githubLink} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className={styles.reveal} aria-label="Github"/><p>Access code and README on GitHub</p></a>}
                {/* {liveLink && <a href={liveLink} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWindowMaximize} className={styles.reveal} aria-label="Live Project"/><p>View live project</p></a>} */}
            </Parallax>

            <Parallax y={[0, -20]} styleInner={{display: "flex", flexDirection: "column"}}>
                <section>{blurb}</section>
            </Parallax>

            <Fade>
                <TechnologiesBanner technologies={technologies} />
            </Fade>

        </div>
    )
}