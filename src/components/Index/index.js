import React from "react"

import About from '../About'
import Contact from '../Contact'

import styles from './Index.module.scss'

export default function Index({projectComponents, portrait}) {

    return(
        <div className={`${styles.Index} index`}>
            {projectComponents}
              <About 
                  portrait={portrait}
                  setFrameIndex
              />
              <Contact />
        </div>
    )
}