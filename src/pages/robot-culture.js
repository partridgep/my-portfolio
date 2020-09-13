import React from 'react'

import Layout from '../components/Layout'
import ProjectBanner from '../components/ProjectBanner'
import ProjectPresentation from '../components/ProjectPresentation'
import Fade from 'react-reveal/Fade';

import { graphql } from 'gatsby';

export default function RobotCulture(props) {

    const robotCulture = {
        name: "Robot Culture",
        githubLink: "https://github.com/partridgep/robot-culture",
        liveLink: "https://robot-culture.herokuapp.com/",
        blurb: <p><span>Why Robots? </span>I wanted to create the kind of fun, nerdy resource I would love to discover and spend hours exploring. This project was a fantastic opportunity to delve into all of React's functionalities, and create a robust Single-Page App. Robots, with their many properties, made for the ideal practice for accessing, modifying, and adding models in a database.</p>,
        landingPage: props.data.RobotCulture_Presentation_LandingPage.childImageSharp.fluid,
        selectionPage: props.data.RobotCulture_Presentation_SelectionPage.childImageSharp.fluid,
        detailPage: props.data.RobotCulture_Presentation_DetailPage.childImageSharp.fluid,
        loginPage: props.data.RobotCulture_Presentation_LoginPage.childImageSharp.fluid,
        userPage: props.data.RobotCulture_Presentation_UserPage.childImageSharp.fluid,
        addPage: props.data.RobotCulture_Presentation_AddPage.childImageSharp.fluid,
        addPage2: props.data.RobotCulture_Presentation_AddPage2.childImageSharp.fluid,
        technologies: ['REACT', 'JS', 'CSS', 'MongoDB', 'Express', 'Node.js']
    };

    return (
        <Layout pageTitle="Robot Culture">
            <ProjectBanner selProject={robotCulture}/>

            <ProjectPresentation project={robotCulture} />

            <Fade>
              <div className="project-functionalities">
                <h2>Functionalities</h2>
                <ul>
                  <li>Full CRUD Features</li>
                  <li>Authentification via JWTs</li>
                  <li>Admin Privileges</li>
                  <li>Guided, Multi-Step Creation Form</li>
                  <li>Form Autocompletion using API data</li>
                </ul>
              </div>
            </Fade>

        </Layout>
    )
}

export const pageQuery = graphql`
  query {
    RobotCulture_Presentation_LandingPage: file(relativePath: { eq: "RobotCulture_Presentation_LandingPage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    RobotCulture_Presentation_SelectionPage: file(relativePath: { eq: "RobotCulture_Presentation_SelectionPage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    RobotCulture_Presentation_DetailPage: file(relativePath: { eq: "RobotCulture_Presentation_DetailPage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    RobotCulture_Presentation_LoginPage: file(relativePath: { eq: "RobotCulture_Presentation_LoginPage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    RobotCulture_Presentation_UserPage: file(relativePath: { eq: "RobotCulture_Presentation_UserPage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    RobotCulture_Presentation_AddPage: file(relativePath: { eq: "RobotCulture_Presentation_AddPage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    RobotCulture_Presentation_AddPage2: file(relativePath: { eq: "RobotCulture_Presentation_AddPage2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`;