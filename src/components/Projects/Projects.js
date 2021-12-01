import './Projects.css';

import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('./projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    // console.log(projects[1]?.img2)
    return (
        <div id="project" className="projects-container  my-5">
            <h5 style={{ textAlign: 'center' }} className="orange-text gray-background">My Recent Works:</h5>

            <div className="projects-div a">
                {
                    projects.map(project => <Project
                        key={project.id}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;