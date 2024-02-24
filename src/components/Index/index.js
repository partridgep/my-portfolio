import React from "react"

import About from '../About'
import Contact from '../Contact'

import styles from './Index.module.scss'

import Fade from 'react-reveal/Fade';

export default function Index({projectComponents, portrait}) {

    return(
        <div className={`${styles.Index} index`}>
            <div>
              {projectComponents}
            </div>
            <Fade>
              <About 
                  portrait={portrait}
                  setSection
              />
            </Fade>
            <Fade>
              <Contact />
            </Fade>
        </div>
    )
}