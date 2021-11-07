import React from "react";
// import Carousel from "../Carousel"
import ProjectCard from "../ProjectCard";
import Projects from "../../assets/json/projects.json";

function Portfolio() {
    return (
        <section>
            <div className="container-fluid portfolio justify-content-center">
                <div className="row">
                    <div className="col-12 d-flex">
                        <div className="row justify-content-center align-items-stretch">
                            {Projects.map((project, index) => (
                                <ProjectCard key={index} name={project.name} deployed_url={project.deployed_url} repo_url={project.repo_url} image={project.image} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;