import React, { useState } from 'react';
import './Temporary.css';
import TypeAnimation from 'react-type-animation';
import { NavLink } from 'react-router-dom';
const Temporary = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (

        <div style={{ color: 'white', margin: '10px', border: '5px solid green' }} className="abc">
            <div className="text-only">

                <h2 className="orange-text ">Part-Time Coder, Full-Time Learner!</h2>
                <p className="">
                    Life is all about learning and colouring. Learning through failures;
                    learning through successes! And colouring your life with all
                    those learnings. The more you learn, the more color your life
                    gets. And here I'm, trying to learn about every new thing out
                    there; trying to catch every little sunshine coming through my
                    ways; making my own rainbows. And in between them, I do a bit
                    of coding as well!! What? You don't belive that? Well try hiring
                    me then! It's really that simple. Just click the button below and
                    shoot a hi! I'll do the rest for you. cheers!!
                </p>

                <div style={{ border: '2px solid red' }} className="glow-on-hover">
                    <a style={{ color: 'white', fontSize: '20px', textDecoration: 'none' }} className="xyz" target="blank"
                        href="https://www.linkedin.com/in/shohanur-rahman-shaun-17b19a217/">Hire Me
                    </a>
                </div>

            </div>
            <div className="xyz container-fluid">
                <img className="img-fluid" src="https://i.ibb.co/QMV2jSF/new-one.jpg" alt="" />
            </div>
        </div>

    );
};

export default Temporary;