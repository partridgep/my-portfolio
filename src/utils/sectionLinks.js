// total # of frames for scrolling animations
const frameCount = 600 + 400
    
//function to set scroll frame index
//corresponding to section user wants to go to
function setFrameIndex(section) {
    const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
    let idx, scrollTop, allProjectsHeight;
    let timeout = 420;
    if (window.innerHeight > 1100) {
        console.log("big window");
        timeout = 500;
    }
    // if going all way back up
    if (!section) {
        idx = 0;
        window.scroll({top: 0, behavior: "smooth"});
    } 
    else {
        idx = 138;
        const scrollFraction = idx / frameCount;
        const allProjects = document.querySelectorAll(`.project`);
        const aboutHeight = document.querySelector(`#about`).scrollHeight;
        const scrollSpace = document.querySelector(`#scrollSpace`);
        let allProjectsArray = [];
        for (let project of allProjects) {
            allProjectsArray.push(project);
            allProjectsHeight = allProjectsArray.map(project => project.scrollHeight).reduce((projectHeight, currentValue) => projectHeight + currentValue);
        }
        // if going to work section
        if (section === "project1") {
            console.log("go to work");
            scrollTop = maxScrollTop * scrollFraction;
        }
        // if not, we'll have to go to work section first
        // to get all the right scroll configurations
        else if (scrollSpace.style.display === "" || scrollSpace.style.display === "block") {
            console.log("go to work first");
            window.scroll({top: maxScrollTop * scrollFraction + 1, behavior: "smooth"});
        }

        if (section === "about") {
            console.log("go to about"); 
            scrollTop = allProjectsHeight + maxScrollTop * scrollFraction;
            console.log('scrollTop')
        }

        else if (section === "contact") {
            scrollTop = aboutHeight + allProjectsHeight + maxScrollTop * scrollFraction;
        }

        // scroll directly to section if the scrollSpace is gone (scroll configurations are correct)
        // or simply going to work section
        if (scrollSpace.style.display === "none" || section === "project1") window.scroll({top: scrollTop, behavior: "smooth"});

        // else wait until scrolled into work section
        // and scroll configurations are correct
        // to scroll to desired sections

        else (setTimeout(function(){ window.scroll({top: scrollTop, behavior: "smooth"}); }, timeout));
    }
}

export default setFrameIndex;