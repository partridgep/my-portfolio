import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.Footer}>
            <section>
                <a href="https://github.com/partridgep" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} aria-label="Github"/></a>
                <a href="https://www.linkedin.com/in/partridgepaul/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} aria-label="LinkedIn"/></a>
            </section>
        </footer>
    )
}