import React from "react";
import HomeProfile from "../assets/HomeProfile.jpg"

function HomeCard() {
    return (


        <div className="row row-home">
            <div className="col-4">

                <div className="card card-home">
                    <div className="card-body">
                        <img src={HomeProfile} alt="home-profile-photo" className="ome-profile-photo mb-3"></img>
                        <h5 className="card-title text-center">Full Stack Web developer</h5>
                        <p className="card-text text-center">Tech lover and Enterpreneur.</p>
                        <a href="https://www.linkedin.com/in/einstein-dalmau-07004710b/" className="ml-5">LinkedIn</a>
                        <a href="https://github.com/EinsteinDG" className="ml-5">Github</a>
                    </div>
                </div>

            </div>
        </div>



    );
}

export default HomeCard;
