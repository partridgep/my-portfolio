import React from "react"
import {Link} from "gatsby"

import { navigate } from "@reach/router";

import setFrameIndex from '../../utils/sectionLinks'

import styles from './Header.module.scss'

export default function Header({ title, size}) {

    return(
        <header id = "header" className={`${styles.Header} ${styles[size]}`}>
            {size === "big" ?
                <div id="title_container" onClick={() => setFrameIndex(0)}><h1 id = "title">{title}</h1></div>
                :
                <Link to="/" id="title_container" onClick={() => setFrameIndex(0)}><h1 id = "title">{title}</h1></Link>
            }
                <h2 id="subtitle" >
                    Full-Stack Software Engineer chasing the <span>endorphin</span> rush that comes from merging the <span>creative</span> and the <span>logical</span> to effectively problem-solve
                </h2>
            {size === "big" ?
            <nav>
                <button onClick={() => setFrameIndex("project1")}>My Work</button>
                <button onClick={() => setFrameIndex("about")}>About</button>
                <button onClick={() => setFrameIndex("contact")}>Contact Me</button>
            </nav>
            :
            <nav>
                {/* <Link to="/" state={{ section: "project1" }} ><button>My Work</button></Link> */}
                {/* <Link to="/" state={{ section: "about" }} ><button>About</button></Link> */}
                {/* <Link to="/" state={{ section: "contact" }} ><button>Contact Me</button></Link> */}
                <button onClick={() => {navigate("/", {state: {section: null}}); window.history.state.section = "project1"}}>My Work</button>
                <button onClick={() => {navigate("/", {state: {section: null}}); window.history.state.section = "about"}}>About</button>
                <button onClick={() => {navigate("/", {state: {section: null}}); window.history.state.section = "about"}}>Contact Me</button>
            </nav>
        }
        </header>
    )
}