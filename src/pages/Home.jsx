import React from 'react';
import Nav from '../components/Nav.jsx';
import Intro from '../components/Intro.jsx';
import About from '../components/About.jsx';
import Projects from '../components/Projects.jsx';

function Home() {
    return (
        <>
            <Nav />
            <Intro />
            <About />
            <Projects />
        </>
    );
}

export default Home;
