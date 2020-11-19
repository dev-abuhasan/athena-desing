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
        <section class="container">
            <h3 className="text-center maine-title">What we do</h3>
            <p className="text-center card-text mb-5">Our main focus is to make the User Experience very<br/>simple and easy. Simplicity is our Strength.</p>
            <div class="row row-cols-1 row-cols-md-4">
                {
                    experience.map(data =>

                        <div class="col mb-3">
                            <div class="card h-100 card1">
                                <img src={data.img} class="card-img-top" style={{width:'30%'}} alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{data.title}</h5>
                                    <p class="card-text">{data.description}</p>
                                </div>
                            </div>
                        </div>

                    )}
            </div>
        </section>
    );
};

export default Experience;