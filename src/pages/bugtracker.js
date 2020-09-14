import React from 'react'

import Layout from '../components/Layout'
import ProjectBanner from '../components/ProjectBanner'
import ProjectPresentation from '../components/ProjectPresentation'
import Fade from 'react-reveal/Fade';

import { graphql } from 'gatsby';

export default function BugTracker(props) {

    const bugTracker = {
        name: "BugTracker",
        githubLink: "https://github.com/partridgep/bugtracker",
        liveLink: "https://bugtracker-pp.herokuapp.com/",
        blurb: <p><span>Why Bugs? </span>Writing code in an organized fashion is a necessity, and doubly so when working in teams. I wanted to build a tool that would be useful to people I would collaborate with on a day-to-day basis. The ease and simplicity of Django was something that pleasantly suprised me, allowing me to get the app running in a short span of time.</p>,
        landingPage: props.data.BugTracker_Presentation_LoginPage.childImageSharp.fluid,
        selectionPage: props.data.BugTracker_Presentation_LandingPage.childImageSharp.fluid,
        detailPage: props.data.BugTracker_Presentation_DetailPage.childImageSharp.fluid,
        loginPage: props.data.BugTracker_Presentation_DetailPage2.childImageSharp.fluid,
        userPage: null,
        addPage: props.data.BugTracker_Presentation_AddPage.childImageSharp.fluid,
        addPage2: props.data.BugTracker_Presentation_AddPage2.childImageSharp.fluid,
        technologies: ['Django', 'Python', 'CSS', 'PostgreSQL', 'AWS']
    };

    return (
        <Layout pageTitle="BugTracker">
            <ProjectBanner selProject={bugTracker}/>

            <ProjectPresentation project={bugTracker} />

            <Fade>
              <div className="project-functionalities">
                <h2>Functionalities</h2>
                <ul>
                  <li>Full CRUD Features</li>
                  <li>Django Authentification</li>
                  <li>Photo Upload via AWS S3</li>
                  <li>Automatic Email Invites</li>
                </ul>
              </div>
            </Fade>

        </Layout>
    )
}

export const pageQuery = graphql`
  query {
    BugTracker_Presentation_LoginPage: file(relativePath: { eq: "BugTracker_Presentation_LoginPage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    BugTracker_Presentation_LandingPage: file(relativePath: { eq: "BugTracker_Presentation_LandingPage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      BugTracker_Presentation_DetailPage: file(relativePath: { eq: "BugTracker_Presentation_DetailPage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      BugTracker_Presentation_DetailPage2: file(relativePath: { eq: "BugTracker_Presentation_DetailPage2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      BugTracker_Presentation_AddPage: file(relativePath: { eq: "BugTracker_Presentation_AddPage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      BugTracker_Presentation_AddPage2: file(relativePath: { eq: "BugTracker_Presentation_AddPage2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`;