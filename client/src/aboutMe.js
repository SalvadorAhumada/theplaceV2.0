import React from 'react';
import './aboutMe.css';
import { Animated } from "react-animated-css";

function AboutMe() {
    return (
    <Animated animationin="fadeIn" animationInDelay={800} isvisible="true">
        <a href="https://salvadorahumada.github.io/" target="_blank" rel="noopener noreferrer">About the author</a>
    </Animated>
  );
}

export default AboutMe;
