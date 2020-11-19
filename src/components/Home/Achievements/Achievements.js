import React, { useState } from 'react';
import './Achievements.css';
import img1 from '../../../img/happy@2x.png';
import img2 from '../../../img/marketing@2x.png';
import img3 from '../../../img/surface1@2x.png';
import img4 from '../../../img/transportation@2x.png';

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

    const [achievement, setAchievements] = useState(achievements);

    return (
        <main style={{ height: '530px', marginTop: '20px' }} className="row d-flex">
            <div className="col-md-4 offset-md-1">
                <h1 className="achievement-text">Our Achievements</h1><br />
                <p className="text-secondary">Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</p>
                <button style={{ width: '40%' }} className="btn nav-btn">Hire us</button>
            </div>
            <div className="col-md-6 offset-md-1 row d-flex">
                {
                    achievement.map(data =>


                        <div key={data.id} class="card md-4" style={{ maxWidth: '540px' }}>
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={data.img} class="card-img" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{data.points}</h5>
                                        <p class="card-text">{data.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )}

            </div>
        </main>
    );
};

export default Achievements;