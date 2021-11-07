import React from "react";

function ProjectCard(props) {
    const { name, deployed_url, repo_url, image, index } = props;

    return (
        <div key={index} className="card project-card" style={{ width: 18 + 'rem' }}>
            <img src={require(`../../assets/img/project-badges/${image}`).default} alt={name}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
            </div>
            <div className="card-footer d-flex bg-transparent border-success justify-content-center">
                <a href={deployed_url} className="card-link"><button className="btn btn-success"><i className="fas fa-link"/></button></a>
                <a href={repo_url} className="card-link"><button className="btn btn-danger"><i className="fab fa-github"/></button></a>
            </div>
        </div>
    );
}

export default ProjectCard;