

import React, { useRef } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('portfolio_gmail', 'template_ke3j7rs', form.current, 'user_xBXWtmAQ3Lvf1TIUNs6jr')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <div style={{ overflowX: 'hidden' }} className="py-5" id="contact">
            <h6 className="orange-text gray-background text-center py-2">Let's Get In Touch!</h6>
            <div className="contact">

                <div className="text-adjustment" data-aos="zoom-in-right" data-aos-duration="2000" data-aos-delay="100" style={{ color: "white" }}>
                    <h4 className="gray-background  mt-4 mx-2 px-2">Feel Free To Contact Me <i className="fas fa-handshake"></i></h4>
                    <div className="gray-background mx-2 px-2">
                        <h6><i className="fas fa-envelope-open-text"> Email:</i><strong className="orange-text"> srshaon.dev@gmail.com</strong></h6>
                    </div>
                    <div className="gray-background mx-2 px-2">
                        <h6><i className="fas fa-mobile-alt"> Mobile:</i> <strong className="orange-text"> (+880) 1951-673656 </strong></h6>
                    </div>
                    <div className="gray-background mx-2 px-2">
                        <h6><i className="fas fa-map-marked-alt"> Address:</i> <strong className="orange-text">Mirpur-1, Dhaka, Bangladesh </strong></h6>
                    </div>
                    <h4 className="gray-background mt-4 mx-2 px-2">Let's Get Connected! <i className="far fa-smile-beam"></i></h4>
                    <div>
                        <div className="gray-background mx-2 px-5">
                            <a rel="noopener noreferrer" href="https://www.facebook.com" target="_blank">
                                <i style={{ color: '#1877f2' }} className="m-1 fab fa-facebook-square fa-2x"></i></a>
                            <a rel="noopener noreferrer" href="https://www.instagram.com" target="_blank">
                                <i className="insta m-1 fab fa-instagram fa-2x"></i></a>

                            <a rel="noopener noreferrer" href="https://www.github.com/" target="_blank">
                                <i style={{ color: 'white' }} className="m-1 fab fa-github fa-2x"></i></a>

                            <a rel="noopener noreferrer" href="https://twitter.com/" target="_blank">
                                <i style={{ color: '#00acee' }} className="m-1 fab fa-twitter-square fa-2x"></i></a>

                            <a rel="noopener noreferrer" href="https://www.linkedin.com/" target="_blank">
                                <i style={{ color: '#0072b1' }} className="m-1 fab fa-linkedin fa-2x"></i></a>
                        </div>
                    </div>
                    <h4 className="gray-background mt-4 mx-2 px-2">Made With  <i className="far fa-heart"></i> By</h4>
                    <h4 className="gray-background mt-4 mx-2 px-2">Shohanur Rahman Shaon</h4>
                    <p className="gray-background mt-4 mx-2 px-2"><small>Copyright © 2021</small></p>
                </div>
                <div data-aos="zoom-in-left" data-aos-duration="2000" data-aos-delay="100" className="container">

                    <h4 className="gray-background text-center mt-4 mx-2 px-2" style={{ color: "white", marginTop: '2px' }}>Send Me A Message</h4>
                    <form className="px-2" ref={form} onSubmit={sendEmail} id="contactForm" >

                        <div className="mb-3">

                            <input style={{ borderRadius: "5px", backgroundColor: 'transparent', color: 'white', fontWeight: '800' }} className="form-control text-red" name="subject" type="text" placeholder="Subject" />

                        </div>
                        <div className="mb-3">

                            <input style={{ borderRadius: "5px", backgroundColor: 'transparent', color: 'white', fontWeight: '800' }} className="form-control" name="name" type="text" placeholder="Name" />

                        </div>


                        <div className="mb-3">

                            <input style={{ borderRadius: "5px", backgroundColor: 'transparent', color: 'white', fontWeight: '800' }} className="form-control" type="email" name="email" placeholder="Email Address" data-sb-validations="required, email" />


                        </div>


                        <div style={{ borderRadius: "10px" }} className="mb-3">

                            <textarea className="form-control" type="text" name="message" placeholder="Message" style={{ height: "10rem", backgroundColor: 'transparent', color: 'white', fontWeight: '800' }} ></textarea>

                        </div>





                        <div style={{ borderRadius: "10px" }} className="d-grid ">
                            <button className="mt-2 gray-background text-center text-white" id="submitButton" type="submit"><strong><i className="far fa-paper-plane"></i> Submit</strong></button>
                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
};

export default Contact;