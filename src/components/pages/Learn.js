import React from "react";
import ResumePNG from "../../assets/resume.png"



function Learn() {
  return (
    <div className="contact-card">

      <div className="card">
        <h1 className="text-center">Resume</h1>
        <div className="card-content">
          <a href="tel:+17862223456" className="ml-4 mt-4 font-weight-bold">Phone</a>

          <a href="mailto:webmaster@enty84@gmail.com" className="ml-4 mt-4 font-weight-bold">Email</a>

          <a href="https://www.linkedin.com/in/einstein-dalmau-07004710b/" className="ml-4 mt-4 font-weight-bold">LinkedIn</a>

          <a href="https://github.com/EinsteinDG" className="ml-4 mt-4 font-weight-bold">GitHub</a>

          <img src={ResumePNG} alt="profile-photo" className="resumePNG"></img>
          <a href="https://www.linkedin.com/in/einstein-dalmau-07004710b/"><h1 className="text-center mt-2">View Here</h1></a>

        </div>
      </div>
    </div >
  );
}

export default Learn;
