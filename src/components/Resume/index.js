import React from "react";
import resumeFile from "../../assets/pdf/hok_uy_resume.pdf"

function Resume() {
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <p>Please visit me on <a href="https://linkedin.com/in/hoksuy/">LinkedIn</a> or download my resume below.</p>
                            <a href={resumeFile} download>Here</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;