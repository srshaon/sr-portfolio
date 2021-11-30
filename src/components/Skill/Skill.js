import './Skill.css';

import React from 'react';

const Skill = () => {
    return (
        <div id="skill" className="skill-container">
            <h6>My Wide Range of Skills Are:</h6>
            <div>
                <h5 className="orange-text gray-background" style={{ textAlign: 'center' }}>Comfortable With</h5>
                <div className="skill-details-div">
                    <div className="skill-set-div">
                        <h6 style={{ textAlign: 'center' }} >html5</h6>
                        <img className="img-fluid" src="https://i.ibb.co/j54q6m8/internet-html5-html-web-wallpaper-preview.png" alt="" />
                    </div>
                    <div className="skill-set-div">
                        <h6 style={{ textAlign: 'center' }} >CSS3</h6>
                        <img className="img-fluid" src="https://i.ibb.co/Zm5FvyN/rsz-2ezgifcom-gif-maker.jpg" alt="" />
                    </div>
                    <div className="skill-set-div">
                        <h6 style={{ textAlign: 'center' }} >Bootstrap 5</h6>
                        <img className="img-fluid h-100" src="https://i.ibb.co/K6xXVgH/rsz-1ezgifcom-gif-maker-1.jpg" alt="" />
                    </div>
                    <div className="skill-set-div">
                        <span style={{ textAlign: 'center' }} >html5</span>
                        <img className="img-fluid" src="https://i.ibb.co/NxN4BRf/download-2.png" alt="" />
                    </div>
                    <div className="skill-set-div">
                        <span style={{ textAlign: 'center' }} >html5</span>
                        <img className="img-fluid " src="https://i.ibb.co/NxN4BRf/download-2.png" alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skill;