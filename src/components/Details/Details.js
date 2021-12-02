import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { projectId } = useParams();
    const [projects, setProject] = useState([]);

    useEffect(() => {

        fetch('/Projects.json')
            .then(res => res.json())
            .then(data => setProject(data))
    }, []);
    const Project = projects.find(project => (project.id == projectId))
    return (
        <div style={{ overflowX: 'hidden' }}>
            <h1>{Project?.id}</h1>
        </div>
    );
};

export default Details;