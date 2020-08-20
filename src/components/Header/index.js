import React, { useEffect } from 'react'

import styles from './Header.module.scss'

export default function Header({ title, size }) {

    // for media queries, max window width
    const breakpoint = 832

    // total # of frames we will run through
    const frameCount = 200

    // update header in DOM based on current frame (index)
    function updateHeader(idx) {

        // Get unit values for DOM manipulation:
        // a) set up minimum value
        // b) substract value proportional to current frame from max value
        // c) select max from two values

        // total height of header
        let totalHeight = Math.max(1, 100 - idx );
        // title height 
        let height = Math.max(115, 200 - idx);
        // title font size
        let fontSize = Math.max(40, 80 - idx / 2);
        // title line height
        let lineHeight = Math.max(30, 60 - idx / 3);
        // title padding
        let padding = Math.max(20, 40 - idx / 2);
        // title width
        let width = Math.max(350, 600 - idx * 3);
        // title left margin
        let margin = Math.max(0, idx / 3.5);


        // Now manipulate DOM with defined values above
        const title = document.querySelector("#title");
        title.style.fontSize = `${fontSize}px`;
        title.style.height = `${height}px`;
        title.style.lineHeight = `${lineHeight}px`;
        title.style.padding = `${padding}px`;
        title.style.width = `${width}px`;
        title.style.marginLeft = `calc(50% - ${margin}%)`;

        const header = document.querySelector("#header");
        header.style.height = `${totalHeight}vh`;

        const subtitle = document.querySelector("#subtitle");
        const nav = document.querySelector("nav");
        const buttons = document.querySelectorAll("nav > a > button");
        // fade nav and subtitle out of view
        // subtitle.style.opacity = `${Math.max(0, 100 - idx * 5)}%`;
        nav.style.opacity = `${Math.max(0, 100 - idx * 5)}%`;
        // remove from DOM once past certain index 
        if (idx > 30 && idx < 60) {
            subtitle.style.display = "none";
            nav.style.display = "none";
        } else if (idx < 30) {
            subtitle.style.display = "block";
            nav.style.display = "block";
            nav.style.margin = "20px 0 10vh 0";
            nav.style.position = "relative";
            nav.style.top = "0";
            nav.style.right = "0";
            buttons.forEach(button => {
                button.style.fontSize = "35px";
                button.style.margin = "0 50px";
            })
        // reintroduce nav buttons to right of header
        } else if (idx > 60) {
            nav.style.display = "flex";
            nav.style.margin = "0";
            nav.style.position = "absolute";
            nav.style.top = "35%";
            nav.style.right = "50px";
            nav.style.opacity = `${(idx - 60) * 5}%`;
            buttons.forEach(button => {
                button.style.fontSize = "20px";
                button.style.margin = "0";
            })
        }
    }

    // once header is loaded, set up scrolling listener
    useEffect(() => {    

        window.addEventListener('scroll', () => {  
            // current scroll index
            const scrollTop = window.scrollY;
            // console.log(`scrollTop: ${scrollTop}`);
            // console.log(`scrollHeight: ${document.documentElement.scrollHeight}`);
            // total amount of scroll available
            const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
            // console.log(`maxScrollTop: ${maxScrollTop}`);
            // how much has been scrolled from 0 to 1
            const scrollFraction = scrollTop / maxScrollTop;
            // console.log(`scrollFraction: ${scrollFraction}`);
            // get corresponding frame # based on scroll fraction
            const frameIndex = Math.min(
              frameCount - 1,
              Math.ceil(scrollFraction * frameCount)
            );
            // console.log(`frameIndex: ${frameIndex}`)
            // console.log("_____________");
            
            if (window.innerWidth < breakpoint) {
                console.log("small");
                //update header MOBILE VERSION
            }
            else {
                console.log("big");
                // update header in DOM based on current frame index
                updateHeader(frameIndex / 2);
            }
        })
    })

    return(
        <header id = "header" className={styles.Header} style={{height: `100vh`}}>
                <h1 id = "title">{title}</h1>
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