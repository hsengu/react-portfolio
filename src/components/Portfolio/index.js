import React from "react";
import Carousel from "../Carousel"
import Projects from "../../assets/json/projects.json";

function Portfolio(props) {
    return (
        <section>
            <div className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <Carousel projects={Projects}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;