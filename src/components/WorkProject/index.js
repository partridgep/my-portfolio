import React from 'react'

import { Link } from 'gatsby'

import styles from './WorkProject.module.scss'

export default function WorkProject( {project} ) {

    function showHoverImage() {
        // change project image on hover
        console.log('hover');
    }

    return(
        <div id="project" className={styles.WorkProject}>
            <div>
                <h1 id="project_name" >Robot Culture</h1>
                <h2 id="description" >
                A <span>MERN React.js</span> responsive and Web Progressive App to access a <span>cloud-deployed database</span> of robots from pop-culture, with <span>CRUD features</span> for signed-in users and admins.
                </h2>
                <button><Link to="/robot-culture">Learn More</Link></button>
            </div>
                <div className={styles.ProjectImage} >
                    {/* // style={{backgroundImage: "url('https://i.imgur.com/BfmXBS6.jpg')"}}> */}
                    <img src="https://i.imgur.com/BfmXBS6.jpg" alt="main page screenshot" onMouseOver={showHoverImage}/>
                </div>
        </div>
    )
}