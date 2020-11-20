import React from 'react';
import { Container } from 'react-bootstrap';
import headerImg from '../../../img/16 [Converted]@2x.png';
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <Container>
            <main style={{  }} className="row d-flex header-bg">
                <div className="col-md-5 pr-5">
                    <h1 className="Header-text">Florence agency</h1>
                    <p className="text-secondary">Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.</p>
                    <button style={{ width: '40%' }} className="btn nav-btn2">Hire us</button>
                </div>
                <div className="col-md-7 p-5">
                    <img src={headerImg} className="img-fluid" alt="" />
                </div>
            </main>
        </Container>
    );
};

export default HeaderMain;