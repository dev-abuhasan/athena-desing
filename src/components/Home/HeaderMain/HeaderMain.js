import React from 'react';
import headerImg from '../../../img/16 [Converted]@2x.png';
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <main style={{ height: '530px', marginTop:'20px' }} className="row d-flex">
            <div className="col-md-4 offset-md-1">
                <h1 className="Header-text">Florence<br />agency</h1><br/>
                <p className="text-secondary">Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.</p>
                <button style={{ width: '40%' }} className="btn nav-btn">Hire us</button>
            </div>
            <div className="col-md-5 offset-md-1">
                <img src={headerImg} className="img-fluid" alt="" />
            </div>
        </main>
    );
};

export default HeaderMain;