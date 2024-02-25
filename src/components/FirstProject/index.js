import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import WorkProject from '../WorkProject'

import styles from '../FirstProject/FirstProject.module.scss' 


export default function FirstProject({project, mainScreenshot, secondaryScreenshot}) {

    useGSAP(() => {

        gsap.to("#firstProjectWrapper", {
            scrollTrigger: {
                trigger: "#firstProjectWrapper",
                start: "bottom 60%",
                snap: (_, self) => {
                    if (self.direction) {
                      return 1;
                    }
                  },
                // markers: true
            },
        });
        gsap.to("#firstProjectWrapper", {
            opacity: 1,
            scrollTrigger: {
                trigger: "#firstProjectWrapper",
                scrub: true,
                start: "bottom 50%",
                // markers: true
            }
        });
        gsap.to("#project_1_text", {
            translateX: 0, 
            scrollTrigger: {
                trigger: "#firstProjectWrapper",
                scrub: 1.5,
                start: "bottom 50%",
            }
        });
        gsap.to("#project_1_image", {
            translateX: 0, 
            scrollTrigger: {
                trigger: "#firstProjectWrapper",
                scrub: 1.5,
                start: "bottom 50%",
            }
        });
        
      },);

    return(
        <section>
            <div id="firstProjectWrapper" className={`${styles.firstProjectWrapper}`}>
              <WorkProject 
                key="1"
                name = {project.name}
                id={project.id}
                description={project.description}
                mainScreenshot={mainScreenshot}
                secondaryScreenshot={secondaryScreenshot}
              />
            </div>
            <div id="postFirstBuffer" className={`${styles.postFirstBuffer}`}/>
          </section>
    )
}