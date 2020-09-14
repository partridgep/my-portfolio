import React from 'react'

import Layout from '../components/Layout'
import ProjectBanner from '../components/ProjectBanner'
import ProjectPresentation from '../components/ProjectPresentation'
import Fade from 'react-reveal/Fade';

import { graphql } from 'gatsby';

export default function QRMS(props) {

    const qrms = {
        name: "Quarantine Movie Release Schedule",
        githubLink: "https://github.com/partridgep/partridgep.github.io",
        liveLink: "https://partridgep.github.io/",
        blurb: <p><span>Why Movies? </span>I come from a documentary film background, so I wanted to create a sort of tribute to the lost movie release year of 2020, as well as document all the shifts and changes of the schedule visually. Pulling that data from APIs and representing it on the page via DOM manipulation provided an excellent challenge before jumping into non-static websites.</p>,
        landingPage: props.data.QMRS_Presentation_LandingPage.childImageSharp.fluid,
        selectionPage: props.data.QMRS_Presentation_DetailPage.childImageSharp.fluid,
        detailPage: props.data.QMRS_Presentation_DelayedPage.childImageSharp.fluid,
        loginPage: props.data.QMRS_Presentation_FAQPage.childImageSharp.fluid,
        userPage: props.data.QMRS_Presentation_FAQPage2.childImageSharp.fluid,
        addPage: props.data.QMRS_Presentation_UserPage.childImageSharp.fluid,
        addPage2: props.data.QMRS_Presentation_SearchPage.childImageSharp.fluid,
        technologies: ['HTML', 'JS', 'jQuery', 'CSS',]
    };

    return (
        <Layout pageTitle="Ice Cream Selector">
            <ProjectBanner selProject={qrms}/>

            <ProjectPresentation project={qrms} />

            <Fade>
              <div className="project-functionalities">
                <h2>Functionalities</h2>
                <ul>
                  <li>Asynchronously pulls data from two movie database APIs</li>
                  <li>Updating and sorting of movies by release date</li>
                  <li>DOM manipulation of movie objects via jQuery</li>
                  <li>Utilization of browser local storage to remember user's tracked movies</li>
                </ul>
              </div>
            </Fade>

        </Layout>
    )
}

export const pageQuery = graphql`
  query {
    QMRS_Presentation_LandingPage: file(relativePath: { eq: "QMRS_Presentation_OriginalPage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    QMRS_Presentation_DetailPage: file(relativePath: { eq: "QMRS_Presentation_DetailPage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    QMRS_Presentation_DelayedPage: file(relativePath: { eq: "QMRS_Presentation_DelayedPage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    QMRS_Presentation_FAQPage: file(relativePath: { eq: "QMRS_Presentation_FAQPage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    QMRS_Presentation_FAQPage2: file(relativePath: { eq: "QMRS_Presentation_FAQPage2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    QMRS_Presentation_UserPage: file(relativePath: { eq: "QMRS_Presentation_UserPage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    QMRS_Presentation_SearchPage: file(relativePath: { eq: "QMRS_Presentation_SearchPage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`;