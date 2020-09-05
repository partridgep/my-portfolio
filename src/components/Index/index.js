import React from "react"
import {Link} from "gatsby"

import ScrollSpace from '../ScrollSpace/'
import About from '../About'
import Contact from '../Contact'

import styles from './Index.module.scss'

// import projects from '../../content/projects'

export default function Index({projectComponents, portrait}) {

    return(
        <div className={`${styles.Index} index`}>
            {projectComponents}
              {/* <ScrollSpace /> */}
              <About 
                  portrait={portrait}
                  setFrameIndex
              />
              <Contact />
        </div>
    )
}