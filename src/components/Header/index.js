import React, {useState, useEffect} from 'react'

import { Link } from 'gatsby'

import styles from './Header.module.scss'


export default function Header({ title, size }) {

    const [style, setStyle] = useState({
        totalHeight: 100,
        height: 200,
        fontSize: 80,
        lineHeight: 60,
        padding: 40,
        width: 600,
        autoMargin: null
    })

    useEffect(() => {
        setStyle({
            totalHeight: 100,
            height: 200,
            fontSize: 80,
            lineHeight: 60,
            padding: 40,
            width: 600,
            autoMargin: getAutoMargin()
        });
    }, [])

    function getAutoMargin() {
        if (document.querySelector("#title")) return document.querySelector("#title").getBoundingClientRect().left;
    }

    const frameCount = 200;

    function updateHeader(idx) {

        console.log(idx);

        let minTotalHeight = 1;
        let totalHeight = Math.max(minTotalHeight, 100 - idx );
    
        let minHeight = 115;
        let height = Math.max(minHeight, 200 - idx);
    
        let minFontSize = 40;
        let fontSize = Math.max(minFontSize, 80 - idx / 2);

        let minLineHeight = 30;
        let lineHeight = Math.max(minLineHeight, 60 - idx / 3);

        let minPadding = 20;
        let padding = Math.max(minPadding, 40 - idx / 2);

        let minWidth = 350;
        let width = Math.max(minWidth, 600 - idx * 3);

        
        
        // SOLUTION IN STATE
        // setStyle({height, fontSize, lineHeight, padding, width});
        
        // SOLUTION WITH VANILLA JS
        const title = document.querySelector("#title");
        title.style.fontSize = `${fontSize}px`;
        title.style.height = `${height}px`;
        title.style.lineHeight = `${lineHeight}px`;
        title.style.padding = `${padding}px`;
        title.style.width = `${width}px`;

        // PROBLEM: RETURN TO AUTO MARGINs
        let minMargin = 0;
        let autoMargin = style.autoMargin;
        let margin = Math.max(minMargin, autoMargin - idx * 6);
        title.style.marginLeft = `${margin}px`;

        const header = document.querySelector("#header");
        header.style.height = `${totalHeight}vh`;

        const subtitle = document.querySelector("#subtitle");
        const nav = document.querySelector("nav");
        subtitle.style.opacity = `${Math.max(0, 100 - idx * 5)}%`;
        nav.style.opacity = `${Math.max(0, 100 - idx * 5)}%`;
        if (idx > 30) {
            subtitle.style.display = "none";
            nav.style.display = "none";
        } else {
            subtitle.style.display = "block";
            nav.style.display = "block";
        }

    }

    useEffect(() => {    

        window.addEventListener('scroll', () => {  
            const scrollTop = window.scrollY;
            console.log(`scrollTop: ${scrollTop}`);
            console.log(`scrollHeight: ${document.documentElement.scrollHeight}`);
            const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
            console.log(`maxScrollTop: ${maxScrollTop}`);
            const scrollFraction = scrollTop / maxScrollTop;
            console.log(`scrollFraction: ${scrollFraction}`);
            const frameIndex = Math.min(
              frameCount - 1,
              Math.ceil(scrollFraction * frameCount)
            );
            console.log(`frameIndex: ${frameIndex}`)
            console.log("_____________");
            
            updateHeader(frameIndex / 2);
        })
    })

    return(
        <header id = "header" className={styles.Header} style={{height: `100vh`}}>
                <h1 
                    id = "title"
                    style={{
                        height: style.height,
                        fontSize: style.fontSize,
                        lineHeight: `${style.lineHeight}px`,
                        padding: style.padding,
                        width: style.width
                    }}
                >{title}</h1>
                <h2 id="subtitle" >
                    Full-Stack Software Engineer chasing the <span>endorphin</span> rush that comes from merging the <span>creative</span> and the <span>logical</span> to effectively problem-solve
                </h2>
            <nav>
                <Link to="/#robot-culture"><button>My Work</button></Link>
                <Link to="/#about"><button>About</button></Link>
                <Link to="/#contact"><button>Contact Me</button></Link>
            </nav>
        </header>
    )
}