import React from 'react';
import Carousel from 'react-elastic-carousel';
import ContentBreak from './ContentBreak.jsx';
import Slides from './Slides.jsx';
import Project from './Project.jsx';


function Projects() {
    const testContent = [
        "test text 1",
        "test text 2",
        "test text 3",
        "test text 4",
        "test text 5"
    ]

    return (
        <div className="container">
            <ContentBreak content={"Featured Projects"} />
            <div id="projectContainer">
                <Carousel>
                    <Project></Project>
                    <Project></Project>
                </Carousel>
            </div>
        </div>
    );
}

export default Projects
