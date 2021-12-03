import './Project.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Project = (props) => {
    console.log(props.project)
    const { id, name, img1, img2, img3, img4, techologies, livelink, gitrepo, features } = props.project;
    return (
        <div style={{ overflowX: 'hidden' }} data-aos="zoom-in-up" data-aos-duration="2000" data-aos-delay="100" className="mb-5 mt-3 ab boxShadow">
            <div className="">
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
            <div className="mt-2 project-details">
                <h6 >Project Name: <span className="orange-text">{name}</span> </h6>
                <h6 className="orange-text" style={{ display: 'inline' }}> Technologies Used: </h6> <span>{techologies} etc. </span>
                <div>
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
                </div>

                <div className="features-div h-100" style={{ marginTop: '10px' }}>
                    <div className="xxx" style={{ height: '70px' }}>
                        <h6 className="orange-text" style={{ display: 'inline' }}>Features: </h6> <span >{features.slice(0, 100)}</span> . . .
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Link style={{ textDecoration: "none" }} className="link" to={`details/${id}`}> <button className="details-btn"><strong>Read More</strong></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;