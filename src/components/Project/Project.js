import './Project.css';

import React from 'react';

const Project = (props) => {
    console.log(props.project)
    const { name, img1, img2, img3, img4, techologies, livelink, gitrepo, features } = props.project;
    return (
        <div>
            <div className="ab">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={img1} className="img-fluid d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={img2} className="img-fluid d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={img3} className="img-fluid d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={img4} className="img-fluid d-block w-100" alt="..." />
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <h6 >Project Name: <span className="orange-text">{name}</span> </h6>
                <h6> <span className="orange-text">Technologies Used: </span> {techologies} etc. </h6>
                <span>
                    <a style={{ fontSize: '20px', textDecoration: 'none', marginRight: '5px' }} className="orange-text" target="blank"
                        href={livelink}>Live-Link
                    </a>
                </span>
                <span style={{ color: 'white', fontSize: '20px', textDecoration: 'none', marginRight: '5px' }}>||</span>
                <span>
                    <a style={{ fontSize: '20px', textDecoration: 'none' }} className="orange-text" target="blank"
                        href={gitrepo}>Git-Repo
                    </a>
                </span>
                <h6>  <span className="orange-text">Features: </span>{features.slice(0, 100)}...</h6>
            </div>
        </div>
    );
};

export default Project;