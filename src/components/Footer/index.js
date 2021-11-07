import React from "react";

function Footer() {
    return (
        <footer className="page-footer mt-auto py-3 bg-light fixed-bottom">
            <div className="container text-center">
                <p>
                    <span className="text-white">&copy; Copyrighted 2021 by <strong>Hok S. Uy</strong></span>
                </p>
                <p>
                    <span className="footer-span">
                        <a href="https://github.com/hsengu">
                            <span className="icon"><i className="fab fa-github"></i></span>
                        </a>
                    </span>
                    <span className="footer-span">
                        <a href="https://linkedin.com/in/hoksuy">
                            <span className="icon"><i className="fab fa-linkedin"></i></span>
                        </a>
                    </span>
                    <span className="footer-span">
                        <a href="mailto:hok.s.uy@hsengu.com">
                            <span className="icon"><i className="fas fa-envelope"></i></span>
                        </a>
                    </span>
                </p>
            </div>
        </footer >
    );
}

export default Footer;