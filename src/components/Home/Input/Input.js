import React from 'react';
import './Input.css';
const Input = () => {
    return (
        <div className="text-center input">
            <h2>Get your design right, right now</h2>
            <p>Be the first know our latest offers and updates!</p>
            
            <input className="tex-bar" type="text" placeholder="Enter your email" />
            <button className="start-btn">Get started</button>
        </div>


    );
};

export default Input;