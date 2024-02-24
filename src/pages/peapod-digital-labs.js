import React from 'react'

import Layout from '../components/Layout'
import ProjectBanner from '../components/ProjectBanner'
import ProjectPresentation from '../components/ProjectPresentation'

import { graphql } from 'gatsby';

export default function Priosm(props) {

    const prism = {
        name: "Peapod Digital Labs",
        blurb: <p className="blurb">My work at Peapod Digital Labs focused on their Prism app, an omnichannel platform for <a href="https://www.aholddelhaize.com/en/home/" target="_blank" rel="noreferrer">Ahold Delhaize</a>'s US-based grocery store chains: <a href="https://stopandshop.com" target="_blank" rel="noreferrer">Stop & Shop</a>, <a href="https://martinsfoods.com/" target="_blank" rel="noreferrer">Martin's</a>, <a href="https://giantfood.com/" target="_blank" rel="noreferrer">Giant Food</a>, and <a href="https://giantfoodstores.com/" target="_blank" rel="noreferrer">Giant Food Stores</a>. I joined the Cart & Checkout team in January 2021 and quickly integrated into their scrum workflow, contributing front-end solutions to improve user navigation and site reliability.</p>,
        landingPage: props.data.Prism_STSH_CartPage.childImageSharp.fluid,
        selectionPage: props.data.Prism_STSH_OrderSummaryPage.childImageSharp.fluid,
        detailPage: props.data.Prism_GNTL_CartPage.childImageSharp.fluid,
        loginPage: props.data.Prism_GNTL_OrderSummaryPage.childImageSharp.fluid,
        userPage: null,
        addPage: props.data.Prism_MRTN_CartPage.childImageSharp.fluid,
        addPage2: props.data.Prism_MRTN_OrderSummaryPage.childImageSharp.fluid,
        technologies: ['Vue.js', 'Tailwind', 'JS', 'HTML']
    };

    return (
        <Layout pageTitle="Peapod Digital Labs">
            <ProjectBanner selProject={prism}/>

            <ProjectPresentation project={prism} />

        </Layout>
    )
}

export const pageQuery = graphql`
  query {
    Prism_STSH_CartPage: file(relativePath: { eq: "Prism_STSH_CartPage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Prism_STSH_OrderSummaryPage: file(relativePath: { eq: "Prism_STSH_OrderSummaryPage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Prism_GNTL_CartPage: file(relativePath: { eq: "Prism_GNTL_CartPage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Prism_GNTL_OrderSummaryPage: file(relativePath: { eq: "Prism_GNTL_OrderSummaryPage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Prism_MRTN_CartPage: file(relativePath: { eq: "Prism_MRTN_CartPage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Prism_MRTN_OrderSummaryPage: file(relativePath: { eq: "Prism_MRTN_OrderSummaryPage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`;