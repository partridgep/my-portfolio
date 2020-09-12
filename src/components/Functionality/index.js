import React from 'react'

import Fade from 'react-reveal/Fade';

import styles from './Functionality.module.scss'

export default function Functionality({title}) {

    return(
        <Fade>
            <div className={styles.Functionality}>
                <h1>{title}</h1>
            </div> 
        </Fade>
    )
}