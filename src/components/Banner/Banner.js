import './Banner.css';
import TypeAnimation from 'react-type-animation';
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Banner = () => {
    return (
        <div style={{ height: '100vh' }} className="banner">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div id="title">
                <span>
                    Welcome To My Portfolio! I'm
                </span>
                {/* <br />
                <span>
                    I'm
                </span> */}
                <TypeAnimation

                    cursor={true}
                    sequence={[
                        'Shohanur Rahman Shaon',
                        5000,
                        'A Junior Web Developer',
                        5000,
                        'A Front-End Developer',
                        5000,
                        'A JS Developer',
                        5000,
                        'A React Developer',
                        5000,
                    ]}
                    wrapper="div"
                    repeat={Infinity}
                />
                <br />
                <div >
                    <HashLink to='/home#contact'>
                        <button style={{ border: '2px solid gold' }} className="banner-btn glow-on-hover"><i className="fas fa-envelope"> Contact Me!</i></button>
                    </HashLink>
                    <a href="https://drive.google.com/file/d/1vc5YqITbia9coBYtHyG8hijs6S3lqrvB/view?usp=sharing" target="blank">
                        <button style={{ border: '2px solid gold' }} className="banner-btn glow-on-hover"><i className="fas fa-cloud-download-alt"> Get Resume</i></button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;

//<i class="fas fa-envelope-open-text"></i>