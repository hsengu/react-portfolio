import React from "react";
import Card from '../Card';

function About() {
    return (
        <section>
            <div className="jumbotron p-5 mb-4 bg-light">
                <div className="container py-5">
                    <h1 className="display-5 fw-bold text-white">Hello World!</h1>
                    <p className="col-md fs-4 text-white">
                        My name is Hok. I am an IT Professional and Developer who's seeking new opportunities!
                    </p>
                    <Card />
                </div>
            </div>
        </section>
    );
}

export default About;

