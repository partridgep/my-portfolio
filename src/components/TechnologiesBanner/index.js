import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJsSquare, faCss3Alt, faNode, faPython, faAws, faHtml5 } from '@fortawesome/free-brands-svg-icons'
import MongoIcon from "../../assets/mongodb.svg";
import ExpressIcon from "../../assets/express.svg";
import DjangoIcon from "../../assets/django.svg";
import PostgreSQLIcon from "../../assets/postgresql.svg";
import JqueryIcon from "../../assets/jquery.svg";

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
        else if (tech === "MongoDB") {
            return <MongoIcon className={styles.icon} style={{fill: "white", height: "45px"}} />
        }
        else if (tech === "Express") {
            return <ExpressIcon  className={styles.icon} style={{fill: "white", height: "45px"}} />
        }
        else if (tech === "Python") {
            return <FontAwesomeIcon icon={ faPython } className={styles.icon} aria-label="React"/>
        }
        else if (tech === "AWS") {
            return <FontAwesomeIcon icon={ faAws } className={styles.icon} aria-label="React"/>
        }
        else if (tech === "Django") {
            return <DjangoIcon viewBox="0 0 70 70" style={{fill: "white", height: "45px", width: "45px"}} />
        }
        else if (tech === "PostgreSQL") {
            return <PostgreSQLIcon  className={styles.icon} style={{fill: "white", height: "45px"}} />
        }
        else if (tech === "HTML") {
            return <FontAwesomeIcon icon={ faHtml5 } className={styles.icon} aria-label="React"/>
        }
        else if (tech === "jQuery") {
            return <JqueryIcon className={styles.icon} style={{fill: "white", height: "45px", width: "45px"}} />
        }
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