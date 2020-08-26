import React from "react"

import styles from './Header.module.scss'

import projects from '../../content/projects'

export default function Header({ title, size }) {

    // total # of frames for scrolling animations
    const frameCount = 600 + 400 * projects.length

    function setFrameIndex(idx) {
        //need to find scroll top
        const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
        const scrollFraction = idx / frameCount;
        const scrollTop = maxScrollTop * scrollFraction;
        window.scroll({top: scrollTop, behavior: "smooth"});
    }

    return(
        <header id = "header" className={styles.Header}>
                <div id="title_container" onClick={() => setFrameIndex(0)}><h1 id = "title">{title}</h1></div>
                <h2 id="subtitle" >
                    Full-Stack Software Engineer chasing the <span>endorphin</span> rush that comes from merging the <span>creative</span> and the <span>logical</span> to effectively problem-solve
                </h2>
            <nav>
                <a href="/#work" onClick={() => setFrameIndex(360)}><button>My Work</button></a>
                <a href="/#about" onClick={() => setFrameIndex(360 * (projects.length + 1))}><button>About</button></a>
                <a href="/#contact" onClick={() => setFrameIndex(360 * (projects.length + 2))}><button>Contact Me</button></a>
            </nav>
        </header>
    )
}