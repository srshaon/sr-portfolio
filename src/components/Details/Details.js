import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css';
import { Spinner } from 'react-bootstrap';

const Details = () => {
    const { projectId } = useParams();
    const [projects, setProject] = useState([]);
    const [s, setS] = useState([]);
    let xxx = [];

    useEffect(() => {

        fetch('/Projects.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                // const a = data.find(project => (project.id == projectId))
                // // console.log(a.techologies);
                // const pqr = a.techologies.split(",")
                // // console.log(pqr);
                // for (let i = 0; i < pqr.length; i++) {
                //     console.log(pqr[i]);
                //     const v = pqr[i];
                //     console.log(v);
                //     const newV = [...s, v];
                //     console.log(newV);
                //     setS(newV);

                // }
                setProject(data)
            })
    }, []);
    // let Project = {};
    // console.log(Project);
    const Project = projects.find(project => (project.id == projectId))
    // const technologies = Project?.technologies?.split(",");
    // if (Project) {
    //     console.log(Project)
    //     console.log('not null')

    // }
    // const abc = technologies.length;
    // console.log(abc)

    console.log(s);
    if (projects.length === 0) {
        return <div className="d-flex justify-content-center">
            <Spinner animation="border" variant="danger" />
        </div>
    }
    return (
        <div className="project-details" style={{ overflow: 'hidden' }}>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div className="" style={{ alignItems: 'center' }}>
                <h5 className="text-center orange-text gray-background m-2 py-2">{Project?.name}</h5>
                <div className="project-details-div">
                    <div  >
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={Project?.img1} className="img-fluid d-block " alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={Project?.img2} className="img-fluid d-block " alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={Project?.img3} className="img-fluid d-block " alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={Project?.img4} className="img-fluid d-block " alt="..." />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h5 className="text-center orange-text gray-background py-2 m-2">Useful Links</h5>
                    <div className="text-center orange-text gray-background py-2 m-2">
                        <span>
                            <a style={{ fontSize: '20px', textDecoration: 'none', marginRight: '5px' }} className="text-white" target="blank"
                                href={Project?.livelink}>Live-Link
                            </a>
                        </span>
                        <span className="orange-text " style={{ fontSize: '20px', textDecoration: 'none', marginRight: '5px' }}>||</span>
                        <span>
                            <a style={{ fontSize: '20px', textDecoration: 'none' }} className="text-white" target="blank"
                                href={Project?.gitrepo}>Git-Repo
                            </a>
                        </span>
                    </div>

                </div>
                <div>
                    <h5 className="text-center orange-text gray-background py-2 m-2">Technologies Used</h5>
                    <div className="text-center text-white gray-background py-2 m-2">
                        {Project?.techologies} etc.
                    </div>

                </div>
                <div>
                    <h5 className="text-center orange-text gray-background py-2 m-2 ">Features</h5>
                    <div className="text-white  text-center gray-background p-2 m-2">
                        {Project?.features}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Details;