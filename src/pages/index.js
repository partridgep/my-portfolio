import React, { useEffect } from "react"
import { graphql } from 'gatsby';

import setFrameIndex from '../utils/sectionLinks'

import ScrollSpace from '../components/ScrollSpace'
import Layout from '../components/Layout'
import WorkProject from '../components/WorkProject'
import Index from '../components/Index'

import projects from '../content/projects'

export default function Home(props) {
    
    // for media queries, max window width
    const breakpoint = 832

    // total # of frames we will run through
    const frameCount = 1000 + 400 * projects.length
  
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
        const buttons = document.querySelectorAll("nav > button");
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
            nav.style.height = "max-content";
            buttons.forEach(button => {
                button.style.fontSize = "35px";
                button.style.margin = "0 50px";
                button.style.width = "max-content";
                button.style.padding = "1px 6px";

            })
        // reintroduce nav buttons to right of header
        } else if (idx > 60) {
            nav.style.display = "block";
            nav.style.margin = "0";
            nav.style.position = "absolute";
            nav.style.top = "25%";
            nav.style.right = "50px";
            nav.style.opacity = `${(idx - 60) * 5}%`;
            buttons.forEach(button => {
                button.style.fontSize = "20px";
                button.style.margin = "0";
                button.style.padding = "15px";
            })
        }
    }

    let indexTop;

    // fade in rest of page based on index
    function fadeInPage(frame) {

      const lowestIdx = 0;
      const highestIdx = 350;
      const idx = (frame - 160);

      // console.log(`idx: ${idx}`);
      // console.log(`lowestIdx for ${id}: ${lowestIdx}`);
      // console.log(`highestIdx for ${id}: ${highestIdx}`);
      // console.log(`Project idx for ${id}: ${idx}`);

      const project = document.querySelector(`#project1`);
      const projectText = document.querySelector(`#project_1_text`);
      const projectImage = document.querySelector(`#project_1_image`);
      const allProjects = document.querySelectorAll(`.project`);
      const index = document.querySelector(`.index`);
      const scrollSpace = document.querySelector(`#scrollSpace`);

      const indexHeight = index.scrollHeight;
      const projectHeight = project.scrollHeight;
      const workButton = document.querySelectorAll("nav > button")[0];

      // console.log(`indexHeight: ${indexHeight}`);
  
      scrollSpace.style.height = `calc(${indexHeight}px + ${projectHeight}px`;

      // console.log(`scrollSpaceHeight: ${scrollSpace.scrollHeight}`)
  
      if (idx < lowestIdx) {
        project.style.opacity = "0";
        index.style.position = "fixed";
        index.style.zIndex = -1;
        for (let projectDiv of allProjects) {
          projectDiv.style.opacity = "0";
        }
        workButton.style.color = "#00627a";
      }
      
      else if (idx > lowestIdx) {
        project.style.display = "flex";
        project.style.opacity = `${idx - lowestIdx}%`;
        const xTranslation = idx - lowestIdx - 200;
        if (xTranslation < 1 ) {
          projectText.style.transform = `translateX(${xTranslation * -1}px)`;
          projectImage.style.transform = `translateX(${xTranslation }px)`;
        }
        workButton.style.color = "#023e4d";
      }

      if (idx < highestIdx - 150 && idx > highestIdx - 160) {
        indexTop = window.scrollY;
        console.log(indexTop);
      }

      if (idx > highestIdx - 150 ) {
        scrollSpace.style.display = "none";
        index.style.position = "relative";
        index.style.zIndex = 1;
        index.style.paddingTop = window.innerWidth < breakpoint ? "70px" : "115px";
        index.style.top = `${indexTop}px`;
        for (let projectDiv of allProjects) {
          projectDiv.style.opacity = "1";
        }
      }

      if (idx < highestIdx - 150) {
        index.style.paddingTop = 0;
        project.style.display = "flex";
        index.style.position = "fixed";
        index.style.zIndex = 1;
        index.style.paddingTop = 0;
        index.style.top = `${window.innerWidth < breakpoint ? 70 : 115}px`;
        scrollSpace.style.display = "block";
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
        const buttons = document.querySelectorAll("nav > button");
        // fade nav and subtitle out of view
        subtitle.style.opacity = `${Math.max(0, 100 - idx * 5)}%`;
        nav.style.opacity = `${Math.max(0, 100 - idx * 5)}%`;
        // remove from DOM once past certain index 
        if (idx > 30 && idx < 60) {
            subtitle.style.display = "none";
            nav.style.display = "none";
        } else if (idx < 30) {
            header.style.zIndex = "50";
            subtitle.style.display = "block";
            nav.style.display = "block";
            nav.style.margin = "20px 0 23vh 0";
            nav.style.position = "relative";
            nav.style.flexDirection = "column";
            nav.style.alignItems = "center";
            nav.style.top = "0";
            nav.style.right = "0";
            nav.style.height = "max-content";
            buttons.forEach(button => {
                button.style.fontSize = "20px";
                button.style.margin = "5% 0";
                button.style.zIndex = "0";
                button.style.width = "100%";
            })
        // reintroduce nav buttons to right of header
        } else if (idx > 60) {
            nav.style.display = "flex";
            nav.style.flexDirection = "row";
            nav.style.height = "100%";
            nav.style.margin = "0";
            nav.style.position = "absolute";
            nav.style.top = "0";
            nav.style.right = "2%";
            nav.style.opacity = `${(idx - 60) * 5}%`;
            buttons.forEach(button => {
                button.style.fontSize = "13px";
                button.style.margin = "0";
                button.style.width = "max-content";
            })
        }
    }

    function highlightSectionInNav() {
      const scrollTop = window.scrollY;
      const project1Height = document.querySelector(`#project1`).scrollHeight;
      const aboutHeight = document.querySelector(`#about`).scrollHeight;
      const allProjects = document.querySelectorAll(`.project`);
      let allProjectsHeight, allProjectsArray = [];
      for (let project of allProjects) {
          allProjectsArray.push(project);
          allProjectsHeight = allProjectsArray.map(project => project.scrollHeight).reduce((projectHeight, currentValue) => projectHeight + currentValue);
      }
      const buttons = document.querySelectorAll("nav > button");
      const workButton = buttons[0];
      const aboutButton = buttons[1];
      const contactButton = buttons[2];
      if (scrollTop < project1Height) {
        aboutButton.style.color = "#00627a";
        contactButton.style.color = "#00627a";
      }
      else if (scrollTop < allProjectsHeight) {
        aboutButton.style.color = "#00627a";
      }
      else if (scrollTop < allProjectsHeight + aboutHeight) {
        aboutButton.style.color = "#023e4d";
        workButton.style.color = "#00627a";
        contactButton.style.color = "#00627a";
      }
      else {
        contactButton.style.color = "#023e4d";
        aboutButton.style.color = "#00627a";
        workButton.style.color = "#00627a";
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
        // fade in rest of indexPage
        fadeInPage(frameIndex);
        highlightSectionInNav();
    }

    function checkSection() {
      if (props.location.state && props.location.state.section) {
        console.log("there is location state");
        setFrameIndex(props.location.state.section);
        console.log(window.history.state)
        document.querySelector("#title").style.animation = "none";
        // window.history.state.section = null;
        // window.history.state.key = null;
      }
    }

    function setScrollSpaceheight() {
      const project = document.querySelector(`#project1`);
      const index = document.querySelector(`.index`);
      const indexHeight = index.scrollHeight;
      const projectHeight = project.scrollHeight;
      const scrollSpace = document.querySelector(`#scrollSpace`);
      scrollSpace.style.height = `calc(${indexHeight}px + ${projectHeight}px`;
    }
  
    // once header is loaded, set up scrolling listener
    useEffect(() => {
        // make sure we always begin at start of page on refresh    
        window.scrollTo(0, 0);

        // set scrolling space equal to height of all sections
        setScrollSpaceheight();
        
        // set up event scrolling listener for animations
        window.addEventListener('scroll', render)

        // check if coming from previous page, telling us to go to a section
        checkSection();

        // on page leave, remove event listener
        return function cleanUp() {
          window.removeEventListener('scroll', render)
        }

    }, [])

    // once header is loaded, set up resize listener
    useEffect(() => {    
        window.addEventListener('resize', render)

        // on page leave, remove event listener
        return function cleanUp() {
          window.removeEventListener('resize', render)
        }

    }, [])

  const projectComponents = projects.map(project =>
    <div key={project.id} >
        <WorkProject 
          name = {project.name}
          id={project.id}
          description={project.description}
          mainScreenshot={props.data[`project${project.id}_image1`].childImageSharp.fluid}
          secondaryScreenshot={props.data[`project${project.id}_image2`].childImageSharp.fluid}
        />
    </div>
    )

  return (
    <div>
      <Layout>
        <ScrollSpace />
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
  }
`;
