import React from 'react'

import Layout from '../components/Layout'
import ProjectBanner from '../components/ProjectBanner'
import ProjectPresentation from '../components/ProjectPresentation'
import Fade from 'react-reveal/Fade';

import { graphql } from 'gatsby';

export default function IceCreamSelector(props) {

    const iceCreamSelector = {
        name: "Ice Cream Selector",
        githubLink: "https://github.com/partridgep/ice-cream-project",
        liveLink: "https://seir-ice-creams.herokuapp.com/",
        blurb: <p><span>Why Ice Cream? </span>Ice cream is delicious, but most importantly, the abundance of choice out there means that there was an opportunity to create a comprehensive rating/review system for related ice cream models in a database.</p>,
        landingPage: props.data.IceCream_Presentation_LandingPage.childImageSharp.fluid,
        selectionPage: props.data.IceCream_Presentation_FlavorPage.childImageSharp.fluid,
        detailPage: props.data.IceCream_Presentation_DetailPage.childImageSharp.fluid,
        loginPage: props.data.IceCream_Presentation_BrandPage.childImageSharp.fluid,
        userPage: props.data.IceCream_Presentation_UserPage.childImageSharp.fluid,
        addPage: props.data.IceCream_Presentation_AddPage.childImageSharp.fluid,
        addPage2: props.data.IceCream_Presentation_AddPage2.childImageSharp.fluid,
        technologies: ['Express', 'MongoDB', 'Node.js', 'JS', 'CSS',]
    };

    return (
        <Layout pageTitle="Ice Cream Selector">
            <ProjectBanner selProject={iceCreamSelector}/>

            <ProjectPresentation project={iceCreamSelector} />

            <Fade>
              <div className="project-functionalities">
                <h2>Functionalities</h2>
                <ul>
                  <li>Full CRUD Features</li>
                  <li>Authentification via OAuth</li>
                  <li>Swiping Mechanism on mobile</li>
                </ul>
              </div>
            </Fade>

        </Layout>
    )
}

export const pageQuery = graphql`
  query {
    IceCream_Presentation_LandingPage: file(relativePath: { eq: "IceCream_Presentation_LandingPage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    IceCream_Presentation_FlavorPage: file(relativePath: { eq: "IceCream_Presentation_FlavorPage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    IceCream_Presentation_DetailPage: file(relativePath: { eq: "IceCream_Presentation_DetailPage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    IceCream_Presentation_BrandPage: file(relativePath: { eq: "IceCream_Presentation_BrandPage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    IceCream_Presentation_UserPage: file(relativePath: { eq: "IceCream_Presentation_UserPage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    IceCream_Presentation_AddPage: file(relativePath: { eq: "IceCream_Presentation_AddPage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    IceCream_Presentation_AddPage2: file(relativePath: { eq: "IceCream_Presentation_AddPage2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`;