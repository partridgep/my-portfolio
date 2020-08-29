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
    const frameCount = 600 + 400 * projects.length

    function setFrameIndex(idx) {
        //need to find scroll top
        const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
        const scrollFraction = idx / frameCount;
        const scrollTop = maxScrollTop * scrollFraction;
        window.scroll({top: scrollTop, behavior: "smooth"});
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
                {/* <Footer /> */}
            </div>
        </Fragment>
    )
}