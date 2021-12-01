import './Project.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Project = (props) => {
    console.log(props.project)
    const { id, name, img1, img2, img3, img4, techologies, livelink, gitrepo, features } = props.project;
    return (
        <div className="mb-5 mt-3 ab boxShadow">
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
                <h6> <span className="">Technologies Used: </span> {techologies} etc. </h6>
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

                <div style={{ marginTop: '10px' }}>
                    <h6>  <span className="">Features: </span>{features.slice(0, 100)} . . .

                        <Link style={{ textDecoration: "none" }} className="link" to={`details/${id}`}> <button className="details-btn"><strong>More</strong></button>
                        </Link>
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default Project;