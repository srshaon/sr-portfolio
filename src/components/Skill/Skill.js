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
                <div className="skill-details-div">
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
        </div>
    );
};

export default Skill;