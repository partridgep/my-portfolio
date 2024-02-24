import React from 'react'

import Layout from '../components/Layout'
import ProjectBanner from '../components/ProjectBanner'
import ProjectPresentation from '../components/ProjectPresentation'

import { graphql } from 'gatsby';

export default function MotorCityWashWorks(props) {

    const motorCityWashWorks = {
        name: "Motor City Wash Works",
        blurb: <p className="blurb">My work at Motor City Wash Works was focused entirely on their Cruz Control app, which is sold to car washes across the country to help them manage their business. It must handle everything from chemical monitoring to tracking work orders and configuring purchase orders. I joined in May 2021 and built out the entire frontend from scratch, helping expand the platform alongside the backend team with more functionalities.</p>,
        landingPage: props.data.MCWW_dashboard.childImageSharp.fluid,
        selectionPage: props.data.MCWW_all_WO.childImageSharp.fluid,
        detailPage: props.data.MCWW_active_WO.childImageSharp.fluid,
        loginPage: props.data.MCWW_active_WO_modal.childImageSharp.fluid,
        userPage: props.data.MCWW_chem.childImageSharp.fluid,
        addPage: props.data.MCWW_thresholds.childImageSharp.fluid,
        addPage2: props.data.MCWW_permissions.childImageSharp.fluid,
        technologies: ['Vue.js', 'Tailwind', 'JS', 'HTML']
    };

    return (
        <Layout pageTitle="Motor City Wash Works">
            <ProjectBanner selProject={motorCityWashWorks}/>

            <ProjectPresentation project={motorCityWashWorks} />

        </Layout>
    )
}

export const pageQuery = graphql`
  query {
    MCWW_dashboard: file(relativePath: { eq: "MCWW_dashboard.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    MCWW_active_WO: file(relativePath: { eq: "MCWW_active_WO.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    MCWW_active_WO_modal: file(relativePath: { eq: "MCWW_active_WO_modal.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      MCWW_all_WO: file(relativePath: { eq: "MCWW_all_WO.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      MCWW_chem: file(relativePath: { eq: "MCWW_chem.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      MCWW_dashboard: file(relativePath: { eq: "MCWW_dashboard.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      MCWW_thresholds: file(relativePath: { eq: "MCWW_thresholds.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      MCWW_permissions: file(relativePath: { eq: "MCWW_permissions.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`;