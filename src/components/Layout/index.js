import React, { Fragment } from 'react'

import {useStaticQuery, graphql} from 'gatsby'

import Header from '../Header'
import Head from '../Head'

import '../../styles/reset.scss'
import styles from './Layout.module.scss'
require("typeface-alata")
require("typeface-amatic-sc")

export default function Layout({ pageTitle, children }) {

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
                    />
                <main>
                    {children}
                </main>
                {/* <Footer /> */}
            </div>
        </Fragment>
    )
}