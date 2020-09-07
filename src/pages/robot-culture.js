import React from 'react'
import Layout from '../components/Layout'
import ProjectBanner from '../components/ProjectBanner'
import ProjectPresentation from '../components/ProjectPresentation'

// import Img from 'gatsby-image';

import { graphql } from 'gatsby';

export default function RobotCulture(props) {

    const robotCulture = {
        name: "Robot Culture",
        githubLink: "https://github.com/partridgep/robot-culture",
        liveLink: "https://robot-culture.herokuapp.com/",
        landingPage: props.data.RobotCulture_Presentation_LandingPage.childImageSharp.fluid,
        selectionPage: props.data.RobotCulture_Presentation_SelectionPage.childImageSharp.fluid,

    };

    return (
        <Layout pageTitle="Robot Culture">
            <ProjectBanner selProject={robotCulture}/>

            <ProjectPresentation project={robotCulture} 
            />

            {/* <Img 
                fluid={props.data.RobotCulture_Presentation_LandingPage.childImageSharp.fluid} 
            /> */}

            {/* photo of project desktop + mobile
            links to:
                GitHub
                Live Project
            Icons of technologies
            Section of functionalities */}
        </Layout>
    )
}

export const pageQuery = graphql`
  query {
    RobotCulture_Presentation_LandingPage: file(relativePath: { eq: "RobotCulture_Presentation_LandingPage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    RobotCulture_Presentation_SelectionPage: file(relativePath: { eq: "RobotCulture_Presentation_SelectionPage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`;