import React from 'react'
import Layout from '../components/Layout'
import ProjectBanner from '../components/ProjectBanner'
import ProjectPresentation from '../components/ProjectPresentation'

export default function RobotCulture() {

    const robotCulture = {
        name: "Robot Culture",
        githubLink: "https://github.com/partridgep/robot-culture",
        liveLink: "https://robot-culture.herokuapp.com/"
    };

    return (
        <Layout pageTitle="Robot Culture">
            <ProjectBanner selProject={robotCulture}/>

            <ProjectPresentation project={robotCulture} />

            {/* photo of project desktop + mobile
            links to:
                GitHub
                Live Project
            Icons of technologies
            Section of functionalities */}
        </Layout>
    )
}