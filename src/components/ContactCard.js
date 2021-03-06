import React from "react";
import ContactPNG from "../assets/contact.png"


function ContactCard(props) {
    return (

        <div className="contact-card">

            <div className="card">
                <h1 className="text-center">Contact Me</h1>
                <div className="card-content">
                    <a href="tel:+7862223456" className="ml-4 mt-4 font-weight-bold">Phone</a>

                    <a href="mailto:webmaster@enty84@gmail.com" className="ml-4 mt-4 font-weight-bold">Email</a>

                    <a href="https://www.linkedin.com/in/einstein-dalmau-07004710b/" className="ml-4 mt-4 font-weight-bold">LinkedIn</a>

                    <a href="https://github.com/EinsteinDG" className="ml-4 mt-4 font-weight-bold">GitHub</a>

                    <img src={ContactPNG} alt="profile-photo" className="profile float-left"></img>
                </div>
            </div>
        </div >


    );
}

export default ContactCard;
