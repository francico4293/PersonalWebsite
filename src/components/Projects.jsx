import React from 'react';
import ContentBreak from './ContentBreak.jsx';
import Project from './Project.jsx';

function Projects() {
    return (
        <div className="container">
            <ContentBreak content={"Featured Projects"} />
            <Project />
        </div>
    );
}

export default Projects
