import React, { Fragment } from 'react'

import {useStaticQuery, graphql} from 'gatsby'

import Header from '../Header'
import Head from '../Head'

import projects from '../../content/projects'

import '../../styles/reset.scss'
import styles from './Layout.module.scss'
require("typeface-alata")
require("typeface-amatic-sc")

export default function Layout({ pageTitle, children }) {

    // total # of frames for scrolling animations
    const frameCount = 600 + 400

    function setFrameIndex(section) {
        const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
        let idx, scrollTop, allProjectsHeight;
        idx = 163.5;
        if (!section) {
            idx = 0;
            window.scroll({top: 0, behavior: "smooth"});
        } 
        else {
            idx = 163.5;
            const scrollFraction = idx / frameCount;
            const allProjects = document.querySelectorAll(`.project`);
            const aboutHeight = document.querySelector(`#about`).scrollHeight;
            let allProjectsArray = [];
            for (let project of allProjects) {
                allProjectsArray.push(project);
                allProjectsHeight = allProjectsArray.map(project => project.scrollHeight).reduce((projectHeight, currentValue) => projectHeight + currentValue);
            }
            if (section === "project1") {
                scrollTop = maxScrollTop * scrollFraction;
            }
            if (section === "about") {
                scrollTop = allProjectsHeight + maxScrollTop * scrollFraction;
            }
            else if (section === "contact") {
                scrollTop = aboutHeight + allProjectsHeight + maxScrollTop * scrollFraction;
            }
            console.log(`idx: ${idx}`);
            window.scroll({top: scrollTop, behavior: "smooth"});
        }
    }

    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    author
                    title
                    keywords
                }
            }
        }
    `)

    return (
        <Fragment>
            <Head 
                title={data.site.siteMetadata.title}
                pageTitle={pageTitle}
                keywords={data.site.siteMetadata.keywords}      
            />
            <div className={styles.Layout}>
                <Header 
                    title={data.site.siteMetadata.title} 
                    size={!pageTitle ? "big" : "small"}
                    frameCount={frameCount}
                    setFrameIndex={setFrameIndex}
                    />
                <main>
                    {children}
                </main>
            </div>
        </Fragment>
    )
}