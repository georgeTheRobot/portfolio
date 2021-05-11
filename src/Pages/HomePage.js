import React from 'react';
import { fontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaTwitter } from 'react-icons/fa';
import { FaBeer } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
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
                        <fontAwesomeIcon icon={FaTwitter} className="icon tw" />
                    </Link>
                    <Link to="test" className="icon-holder">
                        <fontAwesomeIcon icon={FaBeer} className="icon gh" />
                    </Link>
                    <Link to="test" className="icon-holder">
                        <fontAwesomeIcon icon={FaLinkedin} className="icon ln" />
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
