import React from "react"
import {Link} from "gatsby"

import setSection from '../../utils/sectionLinks'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


import styles from './Header.module.scss'

export default function Header({ title, size}) {
    
    useGSAP(() => {

        if (size === "small") return

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

        let mm = gsap.matchMedia();

        mm.add("(max-width: 831px)", () => {

            gsap.to("#title_container_big", {
                scale: 0.5,
                yPercent: -22,
                xPercent: -0,
                x: "-30vw",
                scrollTrigger: {
                    trigger: "#project1",
                    scrub: true,
                    start: "bottom 97%",
                    toggleActions: "restart pause reverse pause",
                }
            });
            gsap.to("#subtitle", {
                opacity: 0,
                display: "none",
                scrollTrigger: {
                    trigger: "#project1",
                    scrub: true,
                    start: "bottom 90%",
                    end: "+=10%",
                    // markers: true
                }
            });
            gsap.to(".mainNav", 
            {
                display: "none",
                opacity: 0,
                scrollTrigger: {
                    trigger: "#project1",
                    scrub: true,
                    start: "bottom 90%",
                    end: "+=9%",
                    // markers: true
                }
            },
        );
            gsap.to(".reappearNav", {
                opacity: 1,
                display: "block",
                scrollTrigger: {
                    trigger: "#project1",
                    scrub: true,
                    start: "bottom 30%",
                    end: "+=12%",
                },
            });
        });
        mm.add("(min-width: 832px)", () => {
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
            gsap.to(".mainNav", {
                display: "none",
                opacity: 0,
                scrollTrigger: {
                    trigger: "#project1",
                    scrub: true,
                    start: "bottom 97%",
                    end: "+=9%",
                    // markers: true
                }
            });
            gsap.to(".reappearNav", {
                opacity: 1,
                display: "block",
                scrollTrigger: {
                    trigger: "#project1",
                    scrub: true,
                    start: "bottom 70%",
                    end: "+=12%",
                    // markers: true
                },
            });
        });
        mm.add("(min-width: 832px) and (max-width: 1199px)", () => {

            gsap.to("#title_container_big", {
                scale: 0.5,
                yPercent: -18.5,
                xPercent: 0,
                x: "-33vw",
                scrollTrigger: {
                    trigger: "#project1",
                    scrub: true,
                    start: "bottom 97%",
                    toggleActions: "restart pause reverse pause"
                }
            });
        });
        mm.add("(min-width: 1200px) and (max-width: 2499px)", () => {

            gsap.to("#title_container_big",
                {
                    scale: 0.5,
                    yPercent: -18.5,
                    xPercent: 0,
                    x: "-36vw",
                    scrollTrigger: {
                        trigger: "#project1",
                        scrub: true,
                        start: "bottom 97%",
                        toggleActions: "restart pause reverse pause"
                    }
                });
        });
        mm.add("(min-width: 2500px)", () => {

            gsap.to("#title_container_big",
                {
                    scale: 0.5,
                    yPercent: -18.5,
                    xPercent: 0,
                    x: "-38vw",
                    scrollTrigger: {
                        trigger: "#project1",
                        scrub: true,
                        start: "bottom 97%",
                        toggleActions: "restart pause reverse pause"
                    }
                });
        });
        
      
      },);

    return(
        <header id = "header" className={`${styles.Header} ${styles[size]}`}>
            {size === "big" ?
                <button className={styles.title_container_big}  id="title_container_big" onClick={() => setSection()}><h1 id = "title">{title}</h1></button>
                :
                <Link to="/" id="title_container" className={`${styles.linkHome}`}><h1 id = "title">{title}</h1></Link>
            }
            <h2 id="subtitle" >
                Full-Stack Software Engineer chasing the <span>endorphin</span> rush that comes from merging the <span>creative</span> and the <span>logical</span> to effectively problem-solve
            </h2>
            {size === "big" ?
                <nav className={`${styles.mainNav} mainNav`} >
                    <button onClick={() => setSection("#firstProjectWrapper")}>My Work</button>
                    <button onClick={() => setSection("#about")}>About</button>
                    <button onClick={() => setSection("#contact")}>Contact Me</button>
                </nav>
                :
                <nav>
                    <Link to="/" state={{ section: "#firstProjectWrapper" }} ><button>My Work</button></Link>
                    <Link to="/" state={{ section: "#about" }} ><button>About</button></Link>
                    <Link to="/" state={{ section: "#contact" }} ><button>Contact Me</button></Link>
                </nav>
            }
            {size === "big" &&
                <nav className={`${styles.reappearNav} reappearNav`}>
                    <button onClick={() => setSection("#firstProjectWrapper")}>My Work</button>
                    <button onClick={() => setSection("#about")}>About</button>
                    <button onClick={() => setSection("#contact")}>Contact Me</button>
                </nav>
            }
        </header>
    )
}