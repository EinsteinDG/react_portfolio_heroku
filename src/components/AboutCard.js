import React from "react";
import Profile from "../assets/Profile.jpg"


function AboutCard() {
    return (
        <div className="about-container">
            <h5>About Me</h5>

            <img src={Profile} alt="profile-photo" className="profile float-left"></img>
            <div>

                <div className="mt-3">

                    <p>I am a Fullstack Developer student at UT Coding Bootcamp </p>
                    <p>Actually I'm about to finish this Full Stack Web Developer bootcamp and aiming to look for jobs,  either internships or junior level offers.</p>

                    <p>
                        I am interested in learning about new opportunities and can
                        be reached
                        through this portfolio, by
                        email:
                                                <a href="enty84@gmail.com"
                            target="_blank">enty84@gmail.com, </a> through<a
                                href="https://github.com/EinsteinDG/"> GitHub</a>, or through <a
                                    href="https://www.linkedin.com/in/einstein-dalmau-07004710b/">
                            LinkedIn.</a>
                        Cheers!

                                                </p>
                </div>

                <div className="card-body contactLinks">
                    <a href="https://www.linkedin.com/in/einstein-dalmau-07004710b/" className="card-link">LinkedIn</a>
                    <a href="https://github.com/EinsteinDG/" className="card-link">GitHub</a>
                </div>
            </div>
            {/* end copy paste  */}
        </div>
    );
}

export default AboutCard;
