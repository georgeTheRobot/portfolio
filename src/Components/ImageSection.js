import React from 'react';
import about from '../img/about.png';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am <span>George Mwangi</span></h4>
                <p className="about-text">
                    Lorcdcj qdhcn sc jbj jjbjdjdkj sdcjbcbcj sdbbjbjbj bjbcjbcvbuh ebhdbjbjbjbjb
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: George Mwangi</p>
                        <p>: 24</p>
                        <p>: Kenyan</p>
                        <p>: English, Swahili</p>
                        <p>: 880, Thika</p>
                        <p>: Kenya, America, India, Egypt</p>
                    </div>
                </div>
                <button className="btn">Download CV</button>
            </div>
        </div>
    );
}

export default ImageSection;
