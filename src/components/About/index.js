import React from 'react'
import Img from 'gatsby-image';
import { graphql, useStaticQuery} from 'gatsby'

import styles from './About.module.scss'

export default function About({portrait}) {

    const data = useStaticQuery(graphql`
    query {
        portrait: file(relativePath: { eq: "PP_Portrait.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)

    return (
        <div className={styles.About} id="about">
              <div style={{height: 'max-content'}} className={styles.textWrapper}>
                <div className={styles.text} >
                    <h1>About Me</h1>
                    <p>Hello there, I'm Paul Partridge, and I love the process of assembling pieces of a puzzle to develop a larger project for others to interact with.</p>
                    <p>I initially put that passion into practice working within the documentary film industry, but after a couple of years, I felt the need to scratch the itch I had ever since I took an <i>Intro to Programming</i> course in college. I dedicated myself to learning software engineering, and enrolled in General Assembly's six-month immersive class.</p>
                    <p>If you would've seen me then, I would have been furiously typing on my keyboard, looking up how to add more and more complexities to my projects. Since, I have been fortunate to join the team at Peapod Digital Labs, and keep learning by doing, contributing enhancements to a widely-used platform.</p>
                    <p>When I'm not pushing new code to GitHub, you can find me taking long walks and desperately trying to turn my dog into an influencer on Instagram <a href="https://www.instagram.com/worldofmeatball/" target="_blank" rel="noreferrer">@worldofmeatball</a>.</p>
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'center', flexShrink: '0'}}>
                  <Img fluid={data.portrait.childImageSharp.fluid} className={styles.portrait}/>
              </div>
        </div>
    )
}





