import React from 'react'

import styles from './Header.module.scss'

export default function Header({ title, size }) {

    

    return(
        <header id = "header" className={styles.Header}>
                <div id="title_container"><h1 id = "title">{title}</h1></div>
                <h2 id="subtitle" >
                    Full-Stack Software Engineer chasing the <span>endorphin</span> rush that comes from merging the <span>creative</span> and the <span>logical</span> to effectively problem-solve
                </h2>
            <nav>
                <a href="/#work"><button>My Work</button></a>
                <a href="/#about"><button>About</button></a>
                <a href="/#contact"><button>Contact Me</button></a>
            </nav>
        </header>
    )
}