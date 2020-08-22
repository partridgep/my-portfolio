import React from "react"

import ScrollSpace from '../components/ScrollSpace'
import Layout from '../components/Layout'
import WorkProject from '../components/WorkProject'
import About from '../components/About'
import Contact from '../components/Contact'

import projects from '../content/projects'

export default function Home() {

  const projectComponents = projects.map(project =>
    <div>
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
        {projectComponents}
      </Layout>
      <About />
      <Contact />
    </div>
  )
}
