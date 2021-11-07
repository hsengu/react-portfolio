import React from "react";

function Card() {
    return (
        <div className="card">
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image">
                            <img src={require("../../assets/img/profile/me.jpg").default} alt="Hok's Profile Picture" />
                        </figure>
                    </div>
                </div>
                <div className="content">
                    <p>
                        &emsp;I am a Computer Science graduate from California State University East Bay and
                        entered the Information Technology field after graduating in 2017. I am a
                        self-proclaimed tech nerd, take interests in everything related to technology, and have
                        work experience ranging from building and deploying hardware, as well as aspects of
                        coding and software development. I am currently seeking new opportunities to gain more
                        experience building and deploying scalable applications utilizing cloud-based services
                        such as AWS and Azure to name a few.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;