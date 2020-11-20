import React from 'react';
import imgLogo from '../../../img/Group-86.png';
import './Footer.css';
import facebookIcon from '../../../img/facebook-logo-in-circular-shape@2x.png';
import twitterIcon from '../../../img/twitter (4)@2x.png';
import linkedinIcon from '../../../img/linkedin (2)@2x.png';
import dribbbleIcon from '../../../img/dribbble (1)@2x.png';
import beiconIcon from '../../../img/beicon.png';

const Footer = () => {
    return (
        <footer className="row bd-highlight" id="footer">
            <div className="col-md-5">
                <div className="d-flex bd-highlight d-flex justify-content-center Milions mb-4">
                    <img alt="img" className="foterLogo" src={imgLogo}></img>
                </div>
                <div className="footer-list-icon d-flex justify-content-center">
                    <li><img src={facebookIcon} alt="img" className="icon facebook_Icon" /></li>
                    <li><img src={twitterIcon} alt="img" className="icon facebook_Icon" /></li>
                    <li><img src={linkedinIcon} alt="img" className="icon facebook_Icon" /></li>
                    <li><img src={dribbbleIcon} alt="img" className="icon facebook_Icon" /></li>
                    <li><img src={beiconIcon} alt="img" className="icon facebook_Icon" /></li>
                </div>
            </div>
            <div className="col-md-7 bd-highlight meno-link p-5">
                <div className="row text-center">
                    <div className="col-lg-3 col-md-6 mb-3">
                        <a className="" href="/">Features</a><br />
                        <a className="" href="/">Enterprise</a><br />
                        <a className="" href="/">Pricing</a><br />
                    </div>
                    <div className="col-lg-3 col-md-6 mb-3">
                        <a className="" href="/">Blog</a><br />
                        <a className="" href="/">Help Center</a><br />
                        <a className="" href="/">Contact Us</a><br />
                        <a className="" href="/">Status</a><br />
                    </div>
                    <div className="col-lg-3 col-md-6 mb-3">
                        <a className="" href="/">About Us</a><br />
                        <a className="" href="/">Terms of Service</a><br />
                        <a className="" href="/">Security</a><br />
                        <a className="" href="/">Login</a><br />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;