async function setFrameIndex(section, behavior) {
    // console.log("go to ", section)
    let jumpBehavior = "smooth";
    // console.log(jumpBehavior)
    if (!section) {
        window.scroll({top: 0, behavior: jumpBehavior});
    }
    else {
        if (section === "#firstProjectWrapper") {
            window.scroll({top: window.innerHeight, behavior: "smooth"});
        }
        else document.querySelector(section).scrollIntoView({ behavior: jumpBehavior })
    }
}

export default setFrameIndex;