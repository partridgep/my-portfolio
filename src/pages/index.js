import React, { useEffect } from "react"
import { graphql } from 'gatsby';

import Img from 'gatsby-image';
// import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'

import ScrollSpace from '../components/ScrollSpace'
import Layout from '../components/Layout'
import WorkProject from '../components/WorkProject'
import About from '../components/About'
import Contact from '../components/Contact'

import projects from '../content/projects'

export default function Home(props) {

      // for media queries, max window width
      const breakpoint = 832

      // total # of frames we will run through
      const frameCount = 600 + 400 * projects.length
  
      // update header in DOM based on current frame (index)
      function updateHeader(idx) {
  
          if (idx > 100) idx = 100;
  
          // Get unit values for DOM manipulation:
          // a) set up minimum value
          // b) substract value proportional to current frame from max value
          // c) select max from two values
  
          // total height of header
          let totalHeight = Math.max(1, 100 - idx );
          // title height 
          let height = Math.max(115, 200 - idx);
          // title font size
          let fontSize = Math.max(40, 80 - idx / 2);
          // title line height
          let lineHeight = Math.max(30, 60 - idx / 3);
          // title padding
          let padding = Math.max(20, 40 - idx / 2);
          // title width
          let width = Math.max(350, 600 - idx * 3);
          // title left margin
          let margin = Math.max(0, idx / 3.5);
  
          // Now manipulate DOM with defined values above
          const title = document.querySelector("#title");
          const title_container = document.querySelector("#title_container");
          title.style.fontSize = `${fontSize}px`;
          title.style.height = `${height}px`;
          title.style.lineHeight = `${lineHeight}px`;
          title.style.padding = `${padding}px`;
          title.style.width = `${width}px`;
          title_container.style.width = `${width}px`;
          title_container.style.marginLeft = `calc(50% - ${margin}%)`;
  
          const header = document.querySelector("#header");
          header.style.height = `${totalHeight}vh`;
  
          const subtitle = document.querySelector("#subtitle");
          const nav = document.querySelector("nav");
          const buttons = document.querySelectorAll("nav > a > button");
          // fade nav and subtitle out of view
          subtitle.style.opacity = `${Math.max(0, 100 - idx * 5)}%`;
          nav.style.opacity = `${Math.max(0, 100 - idx * 5)}%`;
          // remove from DOM once past certain index 
          if (idx > 30 && idx < 60) {
              subtitle.style.display = "none";
              nav.style.display = "none";
          } else if (idx < 30) {
              subtitle.style.display = "block";
              nav.style.display = "block";
              nav.style.margin = "20px 0 10vh 0";
              nav.style.position = "relative";
              nav.style.top = "0";
              nav.style.right = "0";
              buttons.forEach(button => {
                  button.style.fontSize = "35px";
                  button.style.margin = "0 50px";
              })
          // reintroduce nav buttons to right of header
          } else if (idx > 60) {
              nav.style.display = "flex";
              nav.style.margin = "0";
              nav.style.position = "absolute";
              nav.style.top = "35%";
              nav.style.right = "50px";
              nav.style.opacity = `${(idx - 60) * 5}%`;
              buttons.forEach(button => {
                  button.style.fontSize = "20px";
                  button.style.margin = "0";
              })
          }
      }
  
      // update DOM projects
      function updateProject(frame, id) {
  
          const lowestIdx = 350 * (id - 1);
          const highestIdx = lowestIdx + 350;
          const idx = (frame - 160);
  
          // console.log(`idx: ${idx}`);
          // console.log(`lowestIdx for ${id}: ${lowestIdx}`);
          // console.log(`highestIdx for ${id}: ${highestIdx}`);
          // console.log(`Project idx for ${id}: ${idx}`);
  
          const project = document.querySelector(`#project${id}`);
          const projectText = document.querySelector(`#project_${id}_text`);
          const projectImage = document.querySelector(`#project_${id}_image`);
  
          if (idx < lowestIdx || idx > highestIdx) {
              project.style.display = "none";
          }
  
          else if (idx > lowestIdx) {
              project.style.display = "flex";
              project.style.opacity = `${idx - lowestIdx}%`;
              project.style.overflowY = "hidden";
              const xTranslation = idx - lowestIdx - 200;
              if (xTranslation < 1 ) {
                  projectText.style.transform = `translateX(${xTranslation * -1}px)`;
                  projectImage.style.transform = `translateX(${xTranslation }px)`;
              }
          }
  
          if (idx > highestIdx - 175 && idx <= highestIdx) {
  
              project.style.overflowY = "scroll";
          }
  
          if (idx > highestIdx - 75 && idx <= highestIdx) {
              const opacity = ((highestIdx - idx - lowestIdx) + (350 * (id - 1)));
              project.style.opacity = `${Math.max(0, opacity )}%`;
          }
      }
  
      // update DOM about section 
      function updateAbout(frame) {
  
          const about = document.querySelector("#about");
  
          const lowestIdx = 350 * projects.length;
          const highestIdx = lowestIdx + 350;
          const idx = (frame - 160);
  
          if (idx < lowestIdx || idx > highestIdx) {
              about.style.display = "none";
          }
  
          else if (idx > lowestIdx) {
              about.style.display = "flex";
              about.style.opacity = `${idx - lowestIdx}%`;
              about.style.overflowY = "hidden";
          }
  
          if (idx > highestIdx - 175 && idx <= highestIdx) {
              about.style.overflowY = "scroll";
          }
  
          if (idx > highestIdx - 75 && idx <= highestIdx) {
              const opacity = ((highestIdx - idx - lowestIdx) + (350 * (projects.length)));
              about.style.opacity = `${Math.max(0, opacity )}%`;
          }
      }
  
      function updateContact(frame) {
  
          const contact = document.querySelector('#contact');
  
          const lowestIdx = 350 * (projects.length + 1);
          const idx = (frame - 160);
  
          if (idx < lowestIdx) {
              contact.style.display = "none";
          }
  
          else if (idx > lowestIdx) {
              contact.style.display = "flex";
              contact.style.opacity = `${idx - lowestIdx}%`;
          }
      }
  
      // update DOM header values for mobile
      function updateHeaderMobile(idx) {
  
          if (idx > 100) idx = 100;
  
          // total height of header
          let totalHeight = Math.max(1, 100 - idx );
          // title height 
          let height = Math.max(70, 130 - idx);
          // title font size
          let fontSize = Math.max(20, 40 - idx / 3);
          // title line height
          let lineHeight = Math.max(20, 34 - idx / 3);
          // title padding
          let padding = Math.max(20, 40 - idx / 2);
          // title width
          let width = Math.max(160, 350 - idx * 3);
          // title left margin
          let margin = Math.max(0, idx / 3.2);
  
  
          // Now manipulate DOM with defined values above
          const title = document.querySelector("#title");
          const title_container = document.querySelector("#title_container");
          title.style.fontSize = `${fontSize}px`;
          title.style.height = `${height}px`;
          title.style.lineHeight = `${lineHeight}px`;
          title.style.padding = `${padding}px`;
          title.style.width = `${width}px`;
          title_container.style.width = `${width}px`;
          title_container.style.marginLeft = `calc(50% - ${margin}%)`;
  
          const header = document.querySelector("#header");
          header.style.height = `${totalHeight}vh`;
  
          const subtitle = document.querySelector("#subtitle");
          const nav = document.querySelector("nav");
          const buttons = document.querySelectorAll("nav > a > button");
          // fade nav and subtitle out of view
          subtitle.style.opacity = `${Math.max(0, 100 - idx * 5)}%`;
          nav.style.opacity = `${Math.max(0, 100 - idx * 5)}%`;
          // remove from DOM once past certain index 
          if (idx > 30 && idx < 60) {
              subtitle.style.display = "none";
              nav.style.display = "none";
          } else if (idx < 30) {
              subtitle.style.display = "block";
              nav.style.display = "block";
              nav.style.margin = "20px 0 10vh 0";
              nav.style.position = "relative";
              nav.style.top = "0";
              nav.style.right = "0";
              buttons.forEach(button => {
                  button.style.fontSize = "23px";
                  button.style.margin = "3%";
              })
          // reintroduce nav buttons to right of header
          } else if (idx > 60) {
              nav.style.display = "flex";
              nav.style.alignItems = "flex-end";
              nav.style.flexDirection = "row";
              nav.style.margin = "0";
              nav.style.position = "absolute";
              nav.style.top = "35%";
              nav.style.right = "2%";
              nav.style.opacity = `${(idx - 60) * 5}%`;
              buttons.forEach(button => {
                  button.style.fontSize = "13px";
                  button.style.margin = "0";
              })
          }
      }
  
      function getFrameIndex() {
          // current scroll index
          const scrollTop = window.scrollY;
          // console.log(`scrollTop: ${scrollTop}`);
          // console.log(`scrollHeight: ${document.documentElement.scrollHeight}`);
          // total amount of scroll available
          const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
          // console.log(`maxScrollTop: ${maxScrollTop}`);
          // how much has been scrolled from 0 to 1
          const scrollFraction = scrollTop / maxScrollTop;
          // console.log(`scrollFraction: ${scrollFraction}`);
          // get corresponding frame # based on scroll fraction
          const frameIndex = Math.min(
              frameCount - 1,
              Math.ceil(scrollFraction * frameCount)
          );
          // console.log(`frameIndex: ${frameIndex}`)
          // console.log("_____________");
          // setFrameIndex(frameIndex);
          return frameIndex;
      }
  
      // perform appropriate DOM manipulation
      // based on current scroll frame and window width
      function render() {
  
          let frameIndex = getFrameIndex();
          // console.log(frameIndex);
              
              if (window.innerWidth < breakpoint) {
                  //update header MOBILE VERSION
                  updateHeaderMobile(frameIndex / 2 );
              }
              else {
                  // update header in DOM based on current frame index
                  updateHeader(frameIndex / 2);
              }
              // update project components in DOM
              for (let project of projects) {
                  updateProject(frameIndex, project.id)
              }
              updateAbout(frameIndex);
              updateContact(frameIndex);
      }
  
      // once header is loaded, set up scrolling listener
      useEffect(() => {    
          window.addEventListener('scroll', () => { render() })
          console.log("adding effect");
      }, [])
  
      // once header is loaded, set up resize listener
      useEffect(() => {    
          window.addEventListener('resize', () => { render() })
      }, [])

  const projectComponents = projects.map(project =>
    <div key={project.id}>
      <ScrollSpace />
      <WorkProject 
        name = {project.name}
        id={project.id}
        description={project.description}
        mainScreenshot={project.mainScreenshot}
        secondaryScreenshot={project.secondaryScreenshot}
      />
    </div>
    )

  return (
    <div>
      <Layout>
        {/* <Img fluid={props.data.portrait.childImageSharp.fluid} /> */}
          <div> {projectComponents} </div>
        <ScrollSpace />
        <About portrait={props.data.portrait.childImageSharp.fluid}/>
        <Contact />
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
  }
`;
