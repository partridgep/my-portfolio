import React from 'react'

import { Link } from 'gatsby'

import styles from './WorkProject.module.scss'

export default function WorkProject( {name, id, description, mainScreenshot, secondaryScreenshot} ) {

    const link = name.toLowerCase().replace(/\s/g, "-")

    return(
        <div id={`project${id}`} key={id} className={styles.WorkProject}>
            <div>
                <h1 id={`project_name${id}`}>{name}</h1>
                {description}
                <button><Link to={link}>Learn More</Link></button>
            </div>
                <div className={styles.ProjectImage} >
                    <img src={mainScreenshot} alt="main page screenshot" />
                    <img src={secondaryScreenshot} alt="secondary page screenshot"/>
                </div>
        </div>
    )
}