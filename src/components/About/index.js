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
                    <p>Hello there, I'm Paul Partridge, and I love the process of assembling pieces of a larger puzzle for others to interact with.</p>
                    <p>I first put that passion into practice within the documentary film industry. At the start of the pandemic, I dedicated myself to learning software engineering, and enrolled in General Assembly's six-month immersive class.</p>
                    <p>If you would've seen me then, I would have been furiously typing on my keyboard, looking up how to add more and more complexities to my projects. Since then, I have worked for both large and small teams at Peapod Digital Labs and Motor City Wash Works, eager to keep learning by doing, regularly contributing enhancements to in-demand platforms.</p>
                    <p>When I'm not pushing new code to GitHub, you can find me taking long walks and desperately trying to turn my two corgis into influencer dogs on Instagram <a href="https://www.instagram.com/worldofmeatball/" target="_blank" rel="noreferrer">@worldofmeatball</a>.</p>
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'center', flexShrink: '0'}}>
                  <Img fluid={data.portrait.childImageSharp.fluid} className={styles.portrait}/>
              </div>
        </div>
    )
}





