import './Footer.css';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="d-flex ">

                <a className="fixed-bottom d-flex flex-row-reverse pe-2" style={{ color: "white" }} href="#"><h1 style={{ fontSize: "40px" }}><strong ><i className="far fa-arrow-alt-circle-up"></i></strong></h1></a>

            </div>
        </div>
    );
};

export default Footer;