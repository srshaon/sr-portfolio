import './Banner.css';
import TypeAnimation from 'react-type-animation';
import React from 'react';

const Banner = () => {
    return (
        <div className="banner">
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
                    <button className="banner-btn glow-on-hover"><i className="fas fa-envelope"> Contact Me!</i></button>
                    <button className="banner-btn glow-on-hover"><i className="fas fa-cloud-download-alt"> Get Resume</i></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;

//<i class="fas fa-envelope-open-text"></i>