import React, { useState } from 'react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Project from './Project.jsx';

function Slides({ slides }) {
    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(1);

    const nextSlide = () => {
        setIndex1(index1 === slides.length - 1 ? 0 : index1 + 1);
        setIndex2(index2 === slides.length - 1 ? 0 : index2 + 1);
    }

    const prevSlide = () => {
        setIndex1(index1 === 0 ? slides.length - 1 : index1 - 1);
        setIndex2(index2 === 0 ? slides.length - 1 : index2 - 1);
    }

    return (
        <>
            <FaChevronLeft onClick={nextSlide} />
            <Project content={slides[index1]} />
            <Project content={slides[index2]} />
            <FaChevronRight onClick={prevSlide} />
        </>
    );
}

export default Slides;
