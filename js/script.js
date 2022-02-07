//query selectors
const sections = document.querySelectorAll('h1');
const navLinks = document.querySelectorAll('.nav-links');


// helper functions
const activeSectionHandler = (currentSectionID) => {
    navLinks.forEach(link => {

        let isTarget = link.dataset.section === currentSectionID;
        if(isTarget) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
        console.log({currentSectionID, isTarget, link})
    })
}

// intersection observer
const sectionWatcherCallback = (intersections, sectionWatcher) => {
    intersections.forEach(section => {
        if(!section.isIntersecting){return};
        activeSectionHandler(section.target.parentElement.id);
    })
}

const sectionWatcherOptions = {
    treshold: 0.6
}

const sectionWatcher = new IntersectionObserver(sectionWatcherCallback, sectionWatcherOptions)

sections.forEach(section => {
    sectionWatcher.observe(section);
})