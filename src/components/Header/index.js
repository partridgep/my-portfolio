import React from "react"
import {Link} from "gatsby"

import { navigate } from "@reach/router";

import setFrameIndex from '../../utils/sectionLinks'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


import styles from './Header.module.scss'

export default function Header({ title, size}) {
    
    useGSAP(() => {

        gsap.to("#header",
            {
                height: "2%",
                scrollTrigger: {
                    trigger: "#project1",
                    scrub: true,
                    start: "bottom 97%",
                    // markers: true
                }
            },
        );

        gsap.to("#subtitle", {
            opacity: 0,
            display: "none",
            scrollTrigger: {
                trigger: "#project1",
                scrub: true,
                start: "bottom 97%",
                end: "+=10%",
                // markers: true
            }
        });
        gsap.to(".mainNav", 
            {
                opacity: 0,
                scrollTrigger: {
                    trigger: "#project1",
                    scrub: true,
                    start: "bottom 97%",
                    end: "+=9%",
                    // markers: true
                }
            },
        );
        gsap.to(".reappearNav", 
            {
                opacity: 1,
                scrollTrigger: {
                    trigger: "#project1",
                    scrub: true,
                    start: "bottom 70%",
                    end: "+=12%",
                    // markers: true
                },
            },
        );

        let mm = gsap.matchMedia();

        mm.add("(min-width: 800px)", () => {

            gsap.fromTo("#title_container_big",
                {
                    marginLeft: `50%`,
                    scrollTrigger: {
                        trigger: "#project1",
                        scrub: true,
                        start: "bottom 97%",
                        toggleActions: "restart pause reverse pause"
                    },
                },
                {
                    scale: 0.5,
                    yPercent: -18.5,
                    marginLeft: `21%`,
                    scrollTrigger: {
                        trigger: "#project1",
                        scrub: true,
                        start: "bottom 97%",
                        toggleActions: "restart pause reverse pause"
                    }
                });

            return () => { // optional
                // custom cleanup code here (runs when it STOPS matching)
            };
        });
        
      
      },);

    return(
        <header id = "header" className={`${styles.Header} ${styles[size]}`}>
            {size === "big" ?
                <div id="title_container_big" onClick={() => setFrameIndex()}><h1 id = "title">{title}</h1></div>
                :
                <Link to="/" id="title_container" className={`${styles.linkHome}`}><h1 id = "title">{title}</h1></Link>
            }
            <h2 id="subtitle" >
                Full-Stack Software Engineer chasing the <span>endorphin</span> rush that comes from merging the <span>creative</span> and the <span>logical</span> to effectively problem-solve
            </h2>
            {size === "big" ?
                <nav className={`${styles.mainNav} mainNav`} >
                    <button onClick={() => setFrameIndex("#firstProjectWrapper")}>My Work</button>
                    <button onClick={() => setFrameIndex("#about")}>About</button>
                    <button onClick={() => setFrameIndex("#contact")}>Contact Me</button>
                </nav>
                :
                <nav>
                    <Link to="/" state={{ section: "#firstProjectWrapper" }} ><button>My Work</button></Link>
                    <Link to="/" state={{ section: "#about" }} ><button>About</button></Link>
                    <Link to="/" state={{ section: "#contact" }} ><button>Contact Me</button></Link>
                    {/* <button onClick={() => {navigate("/", {state: {section: null}}); window.history.state.section = "#firstProjectWrapper"}}>My Work</button>
                    <button onClick={() => {navigate("/", {state: {section: null}}); window.history.state.section = "#about"}}>About</button>
                    <button onClick={() => {navigate("/", {state: {section: null}}); window.history.state.section = "#contact"}}>Contact Me</button> */}
                </nav>
            }
            {size === "big" &&
                <nav className={`${styles.reappearNav} reappearNav`}>
                    <button onClick={() => setFrameIndex("#firstProjectWrapper")}>My Work</button>
                    <button onClick={() => setFrameIndex("#about")}>About</button>
                    <button onClick={() => setFrameIndex("#contact")}>Contact Me</button>
                </nav>
            }
        </header>
    )
}