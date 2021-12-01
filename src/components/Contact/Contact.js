import './Contact.css';

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
        <div id="contact">
            <div className="contact">

                <div style={{ color: "white" }}><h1>something will be here</h1></div>
                <div class="container py-4 ">


                    <form ref={form} onSubmit={sendEmail} id="contactForm" >

                        <div class="mb-3">

                            <input style={{ borderRadius: "10px" }} class="form-control " name="subject" type="text" placeholder="Subject" />

                        </div>
                        <div class="mb-3">

                            <input style={{ borderRadius: "10px" }} class="form-control" name="name" type="text" placeholder="Name" />

                        </div>


                        <div class="mb-3">

                            <input style={{ borderRadius: "10px" }} class="form-control" type="email" name="email" placeholder="Email Address" data-sb-validations="required, email" />


                        </div>


                        <div style={{ borderRadius: "10px" }} class="mb-3">

                            <textarea class="form-control" type="text" name="message" placeholder="Message" style={{ height: "10rem" }} ></textarea>

                        </div>





                        <div style={{ borderRadius: "10px" }} class="d-grid">
                            <button class="btn btn-primary btn-lg " id="submitButton" type="submit">Submit</button>
                        </div>

                    </form>

                </div>
            </div>

        </div>
    );
};

export default Contact;