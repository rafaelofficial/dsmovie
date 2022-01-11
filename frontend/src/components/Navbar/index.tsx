import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSmovies</h1>
                    <a
                        href="https://github.com/rafaelofficial/"
                        target={"_blank"}
                        rel="noreferrer"
                    >
                        <div className="dsmovie-contact-content">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/rafaelofficial</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
