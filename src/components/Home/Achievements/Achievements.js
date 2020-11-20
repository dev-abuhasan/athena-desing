import React, { useState } from 'react';
import './Achievements.css';
import img1 from '../../../img/happy@2x.png';
import img2 from '../../../img/marketing@2x.png';
import img3 from '../../../img/surface1@2x.png';
import img4 from '../../../img/transportation@2x.png';
import { Button, Card } from 'react-bootstrap';

const achievements = [
    {
        id: '1',
        img: `${img1}`,
        points: '700',
        title: 'Happy Clients'
    },
    {
        id: '2',
        img: `${img2}`,
        points: '140',
        title: 'Projects Completed'
    },
    {
        id: '3',
        img: `${img3}`,
        points: '25',
        title: 'Crazy Minds'
    },
    {
        id: '4',
        img: `${img4}`,
        points: '75',
        title: 'Running Projects'
    },
]

const Achievements = () => {
    const [achievement,] = useState(achievements);//setAchievements

    return (
        <main style={{  }} className="row d-flex container mx-auto">
            <div className="col-lg-4 col-md-5 achievement-info">
                <h1 className="achievement-text">Our Achievements</h1><br />
                <p className="text-secondary">Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</p>

            </div>
            <div className="col-lg-8 col-md-7">
                <div className="row mx-auto">
                    <div className="col-lg-6 col-md-10 mb-4">
                        <div className="achievement-card d-flex">
                            <div className="achievement-card__img">
                                <img src={achievement[0].img} alt="" />
                            </div>
                            <div className="achievement-card__text pl-2">
                                <h5 className="text-light">700+</h5>
                                <p className="text-light">Happy Client</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10 mb-4">
                        <div className="d-flex achievement-card2">
                            <div className="achievement-card__img">
                                <img src={achievement[1].img} alt="" />
                            </div>
                            <div className="achievement-card__text2 pl-2">
                                <h5 className="">{achievement[1].points}</h5>
                                <p className="">{achievement[1].title}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10 mb-4">
                        <div className="d-flex achievement-card2">
                            <div className="achievement-card__img">
                                <img src={achievement[2].img} alt="" />
                            </div>
                            <div className="achievement-card__text2 pl-2">
                                <h5 className="">{achievement[2].points}</h5>
                                <p className="">{achievement[2].title}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10 mb-4">
                        <div className="d-flex achievement-card2 achievement-card3">
                            <div className="achievement-card__img">
                                <img src={achievement[2].img} alt="" />
                            </div>
                            <div className="achievement-card__text2 pl-2">
                                <h5 className="">{achievement[2].points}</h5>
                                <p className="">{achievement[2].title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Achievements;