import React, { useEffect } from "react"
import { graphql } from 'gatsby';


import Fade from 'react-reveal/Fade';
import setFrameIndex from '../utils/sectionLinks'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Layout from '../components/Layout'
import FirstProject from '../components/FirstProject'
import WorkProject from '../components/WorkProject'
import Index from '../components/Index'

import projects from '../content/projects'

gsap.registerPlugin(ScrollTrigger);

export default function Home(props) {

  // check if coming from previous page, telling us to go to a section
  function checkSection() {
    if (props.location.state && props.location.state.section) {
      // console.log("there is location state", props.location.state.section);
      setFrameIndex(props.location.state.section, "instant");
      document.querySelector("#title").style.animation = "none";
      window.history.replaceState(null, "");
    }
  }

  useEffect(() => {

    // refresh scroll triggers so they don't get messed up when navigating from one of the project pages
    ScrollTrigger.refresh()
    // make sure we always begin at start of page on refresh    
    window.scrollTo(0, 0);

    checkSection()

  }, [])

  const projectComponents = projects.map(project =>
    project.id > 1 &&
      <Fade key={project.id}>
        <WorkProject
          name = {project.name}
          id={project.id}
          description={project.description}
          mainScreenshot={props.data[`project${project.id}_image1`].childImageSharp.fluid}
          secondaryScreenshot={props.data[`project${project.id}_image2`].childImageSharp.fluid}
        />
      </Fade>
    )

  return (
    <div>
      <Layout>
        <FirstProject
          project={projects[0]}
          mainScreenshot={props.data.project1_image1.childImageSharp.fluid}
          secondaryScreenshot={props.data.project1_image2.childImageSharp.fluid}
        />
        <Index
          projectComponents = {projectComponents}
          portrait={props.data.portrait.childImageSharp.fluid}
        />
      </Layout>
    </div>
  )
};

export const pageQuery = graphql`
  query {
    portrait: file(relativePath: { eq: "PP_Portrait.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    project1_image1: file(relativePath: { eq: "project1_image1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      project1_image2: file(relativePath: { eq: "project1_image2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      project2_image1: file(relativePath: { eq: "project2_image1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      project2_image2: file(relativePath: { eq: "project2_image2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      project3_image1: file(relativePath: { eq: "project3_image1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      project3_image2: file(relativePath: { eq: "project3_image2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      project4_image1: file(relativePath: { eq: "project4_image1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      project4_image2: file(relativePath: { eq: "project4_image2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`;
