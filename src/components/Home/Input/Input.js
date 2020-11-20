import React from 'react';
import './Input.css';
const Input = () => {
    return (
        <div className="text-center input row">
            <div className="col-md-12">
                <h2>Get your design right, right now</h2>
                <p>Be the first know our latest offers and updates!</p>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-10 col-11 p-2 mx-auto">
                <form action="" className="position-relative">
                    <input className="tex-bar" type="text" placeholder="Enter your email address" />
                    <button className="start-btn">Get started</button>
                </form>
            </div>
        </div>


    );
};

export default Input;