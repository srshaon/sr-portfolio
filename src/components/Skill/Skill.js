import './Skill.css';

import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Skill = () => {
    return (
        <div style={{ overflow: 'hidden' }} id="skill" className="skill-container">
            <h6>My Wide Range of Skills Are:</h6>
            {/* //animate__bounce animate__backInUp  animate__backInUp animate__zoomIn animate__slideInDown animate__flip*/}
            <div>

                <h5 className="orange-text gray-background" style={{ textAlign: 'center' }}>Comfortable With</h5>

                <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" className="skill-details-div">

                    <div className="skill-set-div">
                        <h6 style={{ textAlign: 'center' }} >HTML 5</h6>
                        <img className="img-fluid h-100" src="https://i.ibb.co/j54q6m8/internet-html5-html-web-wallpaper-preview.png" alt="" />
                    </div>

                    <div className="skill-set-div">
                        <h6 style={{ textAlign: 'center' }} >CSS 3</h6>
                        <img className="img-fluid h-100" src="https://i.ibb.co/Zm5FvyN/rsz-2ezgifcom-gif-maker.jpg" alt="" />
                    </div>
                    <div className="skill-set-div">
                        <h6 style={{ textAlign: 'center' }} >Bootstrap 5</h6>
                        <img className="img-fluid h-100" src="https://i.ibb.co/K6xXVgH/rsz-1ezgifcom-gif-maker-1.jpg" alt="" />
                    </div>
                    <div className="skill-set-div">
                        <h6 style={{ textAlign: 'center' }} >Javascript</h6>
                        <img className="img-fluid h-100" src="https://i.ibb.co/k0W2T95/rsz-ezgifcom-gif-maker-3.jpg" alt="" />
                    </div>
                    <div className="skill-set-div">
                        <h6 style={{ textAlign: 'center' }} >React JS</h6>
                        <img className="img-fluid h-100" src="https://i.ibb.co/9wQBcQm/rsz-ezgifcom-gif-maker-5.jpg" alt="" />
                    </div>

                </div>

                <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" className="skill-details-div">
                    <div className="skill-set-div">
                        <h6 style={{ textAlign: 'center' }} >React Router</h6>
                        <img className="img-fluid h-100" src="https://i.ibb.co/GWs5nJC/rsz-1ezgifcom-gif-maker-6.jpg" alt="" />
                    </div>
                    <div className="skill-set-div">
                        <h6 style={{ textAlign: 'center' }} >React Hooks</h6>
                        <img className="img-fluid" src="https://i.ibb.co/3TmyGNF/rsz-react-hooks-best-practices-lead.jpg" alt="" />
                    </div>
                    <div className="skill-set-div">
                        <h6 style={{ textAlign: 'center' }} >Mongo DB</h6>
                        <img className="img-fluid h-100" src="https://i.ibb.co/Lp3w4z2/rsz-f5932bc2.jpg" alt="" />
                    </div>
                    <div className="skill-set-div">
                        <h6 style={{ textAlign: 'center' }} >REST API</h6>
                        <img className="img-fluid h-100" src="https://i.ibb.co/MDBsKYK/rsz-png-transparent-application-programming-interface-representational-state-transfer-web-api-comput.jpg" alt="" />
                    </div>
                    <div className="skill-set-div">
                        <h6 style={{ textAlign: 'center' }} >C #</h6>
                        <img className="img-fluid h-100" src="https://i.ibb.co/9rmP1kN/rsz-c-sharp-black-logo-programming-language-grid-metal-background-c-sharp-artwork.jpg" alt="" />
                    </div>

                </div>
            </div>
            <div >
                <h5 className="orange-text gray-background" style={{ textAlign: 'center' }}>Familiar With</h5>
                <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" className="skill-details-div">
                    <div className="skill-set-div">
                        <h6 style={{ textAlign: 'center' }} >Node JS</h6>
                        <img className="img-fluid h-100" src="https://i.ibb.co/HxMyQJH/rsz-icon-tag-node-js-16b5599d3c86c2b8617a80711a8abc8bc30947ca399ae4151ce1f8ca33e257cc.jpg" alt="" />
                    </div>
                    <div className="skill-set-div">
                        <h6 style={{ textAlign: 'center' }} >Express JS</h6>
                        <img className="img-fluid h-100" src="https://i.ibb.co/GnyQ6dP/rsz-getting-started-with-expressjs-banner-96ecb31ec64b6504.jpg" alt="" />
                    </div>
                    <div className="skill-set-div">
                        <h6 style={{ textAlign: 'center' }} >Tailwind CSS</h6>
                        <img className="img-fluid h-100" src="https://i.ibb.co/cbsddLh/download-4.png" alt="" />
                    </div>
                    <div className="skill-set-div">
                        <h6 style={{ textAlign: 'center' }} >React Bootstrap</h6>
                        <img className="img-fluid h-100" src="https://i.ibb.co/hXz6f2N/rsz-1-5jv5yagqu3zl5endb8dtba.jpg" alt="" />
                    </div>
                    <div className="skill-set-div">
                        <h6 style={{ textAlign: 'center' }} >MSSQL Server</h6>
                        <img className="img-fluid h-100" src="https://i.ibb.co/qxQhBGG/rsz-1images.jpg" alt="" />
                    </div>
                    <div className="skill-set-div">
                        <h6 style={{ textAlign: 'center' }} >React Hook Form</h6>
                        <img className="img-fluid h-100" src="https://i.ibb.co/YhT6XzV/rsz-download-5.jpg" alt="" />
                    </div>
                    <div className="skill-set-div">
                        <h6 style={{ textAlign: 'center' }} >JSON</h6>
                        <img className="img-fluid" src="https://i.ibb.co/0YV34Cd/rsz-download-6.jpg" alt="" />
                    </div>

                </div>
                {/* <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" className="skill-details-div">
                    <div className="skill-set-div">
                        <h6 style={{ textAlign: 'center' }} >React Hook Form</h6>
                        <img className="img-fluid h-100" src="https://i.ibb.co/YhT6XzV/rsz-download-5.jpg" alt="" />
                    </div>
                    <div className="skill-set-div">
                        <h6 style={{ textAlign: 'center' }} >JSON</h6>
                        <img className="img-fluid" src="https://i.ibb.co/0YV34Cd/rsz-download-6.jpg" alt="" />
                    </div>


                </div> */}
            </div>
            <div>
                <h5 className="orange-text gray-background" style={{ textAlign: 'center' }}>Tools</h5>
                <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" className="skill-details-div">
                    <div className="skill-set-div">
                        <h6 style={{ textAlign: 'center' }} >VS Code</h6>
                        <img className="img-fluid h-100" src="https://i.ibb.co/KmD2LGL/rsz-opengraph-blog.jpg" alt="" />
                    </div>
                    <div className="skill-set-div">
                        <h6 style={{ textAlign: 'center' }} >Firebase</h6>
                        <img className="img-fluid h-100" src="https://i.ibb.co/jr9hzZP/rsz-social.jpg" alt="" />
                    </div>
                    <div className="skill-set-div">
                        <h6 style={{ textAlign: 'center' }} >Netlify</h6>
                        <img className="img-fluid h-100" src="https://i.ibb.co/tPfKqLd/rsz-netlify-logo.jpg" alt="" />
                    </div>
                    <div className="skill-set-div">
                        <h6 style={{ textAlign: 'center' }} >Heroku</h6>
                        <img className="img-fluid h-100" src="https://i.ibb.co/5nSCkWF/rsz-download.jpg" alt="" />
                    </div>
                    <div className="skill-set-div">
                        <h6 style={{ textAlign: 'center' }} >Git</h6>
                        <img className="img-fluid h-100" src="https://i.ibb.co/V3vTVs6/rsz-git-iconsvg.jpg" alt="" />
                    </div>
                    <div className="skill-set-div">
                        <h6 style={{ textAlign: 'center' }} >Github</h6>
                        <img className="img-fluid h-100" src="https://i.ibb.co/3MzqWmS/rsz-octocat.jpg" alt="" />
                    </div>
                    <div className="skill-set-div">
                        <h6 style={{ textAlign: 'center' }} >Visual Studio</h6>
                        <img className="img-fluid" src="https://i.ibb.co/FhdQD63/rsz-ff0007b52b67bbc5f86b88769e9c1b67.jpg" alt="" />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" className="skill-details-div">
                    {/* <div className="skill-set-div">
                        <h6 style={{ textAlign: 'center' }} >Github</h6>
                        <img className="img-fluid h-100" src="https://i.ibb.co/3MzqWmS/rsz-octocat.jpg" alt="" />
                    </div>
                    <div className="skill-set-div">
                        <h6 style={{ textAlign: 'center' }} >Visual Studio</h6>
                        <img className="img-fluid" src="https://i.ibb.co/FhdQD63/rsz-ff0007b52b67bbc5f86b88769e9c1b67.jpg" alt="" />
                    </div> */}


                </div>
            </div>
        </div>
    );
};

export default Skill;