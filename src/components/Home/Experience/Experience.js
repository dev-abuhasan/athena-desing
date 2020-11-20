import React, { useState } from 'react';
import img65 from '../../../img/Group 65@2x.png';
import img66 from '../../../img/Group 66@2x.png';
import img69 from '../../../img/Group 69@2x.png';
import img72 from '../../../img/Group 72@2x.png';
import './Experience.css';

const experienceData = [
    {
        id: "1",
        img: `${img65}`,
        title: "Experience Design",
        description: "The point of using Lorem Ipsum is that it has a more-orless normal",
    },
    {
        id: "2",
        img: `${img66}`,
        title: "Interface Design",
        description: "The point of using Lorem Ipsum is that it has a more-orless normal",
    },
    {
        id: "3",
        img: `${img69}`,
        title: "Prototyping",
        description: "The point of using Lorem Ipsum is that it has a more-orless normal",
    },
    {
        id: "4",
        img: `${img72}`,
        title: "Illustration",
        description: "The point of using Lorem Ipsum is that it has a more-orless normal",
    },
]

const Experience = () => {

    const [experience, setExperience] = useState(experienceData)

    return (
        <section className="container exp-bg-img">
            <h3 className="text-center maine-title">What we do</h3>
            <p className="text-center card-text mb-5">Our main focus is to make the User Experience very<br />simple and easy. Simplicity is our Strength.</p>
            <div className="row">
                {
                    experience.map(data =>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-2" key={data.id}>
                            <div className="exp-card">
                                <img src={data.img} className="card-img-top" style={{ width: '30%' }} alt="..." />
                                <div className="exp-desc">
                                    <h5 className="">{data.title}</h5>
                                    <p className="">{data.description}</p>
                                </div>
                            </div>
                        </div>

                    )}
            </div>
        </section>
    );
};

export default Experience;