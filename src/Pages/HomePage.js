import React from 'react';
import { fontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTweeter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am <span>George Mwangi.</span>
                </h1>
                <p className="h-sub-text">
                    Loren ipsum fsfsdffwefedewfdewfewdfewfewfewdDEWFEWFEWFEWFEWFEFEWFEWFEW
                </p>
                <div className="icons">
                    <Link to="test" className="icon-holder">
                        <fontAwesomeIcon icon={faTweeter} className="icon tw" />
                    </Link>
                    <Link to="test" className="icon-holder">
                        <fontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link to="test" className="icon-holder">
                        <fontAwesomeIcon icon={faLinkedin} className="icon ln" />
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
