import React from 'react';
import imgLogo from '../../../img/Group-86.png'
import './Footer.css'
const Footer = () => {
    return (
        <footer class="d-flex bd-highlight">

            <div class="col-md-5 d-flex bd-highlight d-flex justify-content-center Milions">
                <img className="foterLogo" src={imgLogo}></img>
            </div>
            <div class="col-md-7 d-flex bd-highlight d-flex align-items-center meno-link">
                <div class="col-md-3">
                    <a class="" href="/">Features</a><br />
                    <a class="" href="/">Enterprise</a><br />
                    <a class="" href="/">Pricing</a><br />
                </div>
                <div class="col-md-3">
                    <a class="" href="/">Blog</a><br />
                    <a class="" href="/">Help Center</a><br />
                    <a class="" href="/">Contact Us</a><br />
                    <a class="" href="/">Status</a><br />
                </div>
                <div class="col-md-3">
                    <a class="" href="/">About Us</a><br />
                    <a class="" href="/">Terms of Service</a><br />
                    <a class="" href="/">Security</a><br />
                    <a class="" href="/">Login</a><br />
                </div>
            </div>
        </footer>

    );
};

export default Footer;