import React from 'react'
import Img from 'gatsby-image';
import { Link, graphql, useStaticQuery} from 'gatsby'

import styles from './WorkProject.module.scss'

export default function WorkProject( {name, id, description, mainScreenshot, secondaryScreenshot} ) {

    const link = name.toLowerCase().replace(/\s/g, "-")

    const data = useStaticQuery(graphql`
    query {
        project_mainImage: file(relativePath: { eq: "project1_image1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        project_secondaryImage: file(relativePath: { eq: "project1_image2.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
      }
    `)

    return(
        <div id={`project${id}`} key={id} className={styles.WorkProject}>
            <div id={`project_${id}_text`}>
                <h1>{name}</h1>
                {description}
                <button><Link to={link}>Learn More</Link></button>
            </div>
            <div  id={`project_${id}_image`} className={styles.ProjectImages}>
                <Img 
                    fluid={data.project_mainImage.childImageSharp.fluid} 
                    className={styles.image}  
                />
                <Img 
                    fluid={data.project_secondaryImage.childImageSharp.fluid} 
                    className={styles.image} 
                />
            </div>
                {/* <div  id={`project_${id}_image`} className={styles.ProjectImages}>
                    <img src={mainScreenshot} alt="main page screenshot" />  
                    <img src={secondaryScreenshot} alt="secondary page screenshot"/>
                </div> */}
        </div>
    )
}