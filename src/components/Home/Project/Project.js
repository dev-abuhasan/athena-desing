import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../../img/20 [Converted]@2x.png';
import './Project.css';

const Project = () => {
    return (
        <Container>
            <main style={{}} className="row project-container">
                <div className="col-md-6">
                    <img src={img} className="img-fluid" alt="" />
                </div>
                <div className="col-md-6 d-flex align-items-center p-5 running-project-desc">
                    <div className="">
                        <h1 className="project-text">Stay Running & Project</h1>
                        <p className="text-secondary">Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.</p>
                        <button className="btn nav-btn3">Contact us</button>
                    </div>
                </div>
            </main>
        </Container>
    );
};

export default Project;