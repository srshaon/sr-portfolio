import './Header.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';


const Header = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <div className="header">
            <nav className="navbar">
                <div className="nav-container">
                    {/* <NavLink exact to="/" className="nav-logo">
                        Codeaholic
                        <i className="fas fa-code"></i>
                    </NavLink> */}


                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavHashLink
                                as={HashLink}


                                to="/home#about"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                About
                            </NavHashLink>
                        </li>
                        <li className="nav-item">
                            <NavHashLink
                                as={HashLink}


                                to="/home#skill"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Skills
                            </NavHashLink>
                        </li>
                        <li className="nav-item">
                            <NavHashLink
                                as={HashLink}


                                to="/home#project"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Projects
                            </NavHashLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/blog"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Contact Us
                            </NavLink>
                        </li>

                    </ul>


                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;