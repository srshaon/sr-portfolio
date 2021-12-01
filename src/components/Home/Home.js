import './Home.css';

import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';

import Skill from '../Skill/Skill';
import Projects from '../Projects/Projects';
const Home = () => {
    return (
        <div >

            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Projects></Projects>


        </div>
    );
};

export default Home;