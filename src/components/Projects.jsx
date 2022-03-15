import React from 'react';
import ContentBreak from './ContentBreak.jsx';
import Slides from './Slides.jsx';

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
                <Slides slides={testContent} />
            </div>
        </div>
    );
}

export default Projects
