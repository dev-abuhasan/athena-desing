import React from 'react';
import img from '../../../img/20 [Converted]@2x.png';
import './Project.css';

const Project = () => {
    return (
        <main style={{ height: '530px', marginTop: '100px' }} className="row d-flex">
            <div className="col-md-5 offset-md-1">
                <img src={img} className="img-fluid" alt="" />
            </div>
            <div className="col-md-4 offset-md-1 d-flex align-items-center">
                <div className="">
                    <h1 className="project-text">Stay Running & Project</h1>
                    <p className="text-secondary">Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.</p>
                    <button style={{ width: '40%' }} className="btn nav-btn">Contact us</button>
                </div>
            </div>
        </main>
    );
};

export default Project;