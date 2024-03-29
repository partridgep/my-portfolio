import React from 'react'
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import styles from './WorkProject.module.scss'

// import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

export default function WorkProject( {name, id, description, mainScreenshot, secondaryScreenshot} ) {

    const link = name.toLowerCase().replace(/\s/g, "-");

    return(
        <div id={`project${id}`} key={id} className={`${styles.WorkProject} project`}>
            <div id={`project_${id}_text`}>
                <h1>{name}</h1>
                {description}
                <Link to={link}>Learn More</Link>
            </div>
                <div id={`project_${id}_image`} className={styles.ProjectImages}>
                    <Img 
                        fluid={mainScreenshot} 
                        className={styles.image} 
                    />
                    <Img 
                        fluid={secondaryScreenshot} 
                        className={styles.image} 
                    />
                </div>
        </div>
    )
}