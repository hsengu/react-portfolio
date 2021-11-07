import React from "react";
import ProjectCard from "../ProjectCard";

function Carousel(props) {
    const { projects } = props;

    return (
        <div id="carousel" className="carousel slide carousel-fade" data-mdb-ride="carousel">
            <div className="carousel-inner">
                <button className="carousel-control-prev" type="button" data-mdb-target="#carousel"
                    data-mdb-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-mdb-target="#carousel"
                    data-mdb-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;