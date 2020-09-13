import React from 'react'
import pdf from '../../files/Paul Partridge Resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';

import styles from './Contact.module.scss'

export default function Contact() {
    return(
        <div className={styles.Contact} id="contact">
            <div>
                <a href="mailto:paul.partridg@me.com"><FontAwesomeIcon icon={faEnvelope} aria-label="Email"/><p>Email me at paul.partridg@me.com</p></a>
                <a href="https://www.linkedin.com/in/partridgepaul/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} aria-label="LinkedIn"/><p>Connect with me on Linkedin</p></a>
                <a href="https://github.com/partridgep" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} aria-label="Github"/><p>View my profile on GitHub</p></a>
                <a href={pdf} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFileAlt} aria-label="Resume"/><p>See my resume</p></a>
            </div>
        </div>
    )
}