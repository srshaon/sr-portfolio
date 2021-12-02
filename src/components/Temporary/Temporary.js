import React, { useState } from 'react';
import './Temporary.css';
import TypeAnimation from 'react-type-animation';
import { NavLink } from 'react-router-dom';
const Temporary = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (

        <div style={{ overflowX: 'hidden' }}>

        </div>

    );
};

export default Temporary;