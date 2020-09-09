import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJsSquare, faCss3Alt, faNode } from '@fortawesome/free-brands-svg-icons'
import DevIcon from "devicon-react-svg";

import styles from './TechnologiesBanner.module.scss'

export default function TechnologiesBanner({ technologies }) {

    function getIcon(tech) {
        if (tech === "REACT") {
            return <FontAwesomeIcon icon={ faReact } className={styles.icon} aria-label="React"/>
        }
        else if (tech === "JS") {
            return <FontAwesomeIcon icon={ faJsSquare } className={styles.icon} aria-label="React"/>
        }
        else if (tech === "CSS") {
            return <FontAwesomeIcon icon={ faCss3Alt } className={styles.icon} aria-label="React"/>
        }
        else if (tech === "Node.js") {
            return <FontAwesomeIcon icon={ faNode } className={styles.icon} aria-label="React"/>
        }
        // else if (tech === "MongoDB") {
        //     return <DevIcon icon="mongodb" style={{fill: "white", height: "45px",}} />
        // }
    }

    return(
            <div className={styles.TechnologiesBanner}>
                <h2>Technologies Used</h2>
                <section className={styles.TechIcons}>
                    {technologies.map((tech, index) => 
                        <div key={index}>{getIcon(tech)}<p>{tech}</p></div>    
                    )}
                </section>
            </div>
    )
}