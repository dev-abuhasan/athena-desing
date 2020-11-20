import React from 'react';
import Logo from '../../../img/Group-86.png';
import './Navbar.css';
import navImg from '../../../img/navbar-img.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light pt-4">
            <img style={{width:'100px',zIndex:"5"}} src={Logo} alt="img"></img>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link mr-2" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-2" href="/">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-2" href="/">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-2" href="/">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-2" href="/">Our Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-2" href="/">
                            <button className="nav-btn"><img src={navImg} alt="img"/></button>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;