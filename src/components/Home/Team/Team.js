import React from 'react';
import './Team.css'

const Team = () => {
    return (
        <div className="text-center team-card">
            <h3 className="Team-title">Choose Your Dedicated Team</h3>
            <div className="row">
                <div className="col-lg-4 col-md-6 p-3 mb-3">
                    <div className="card ">
                        <div className="card-body">
                            <h2 className="card-title taka">$199</h2>
                            <h5 className="card-title position">For Basic</h5>
                            <hr></hr>
                            <h5 className="ditails">Homepage<br />
                    No Inner Page<br />
                    Asset file<br />
                    Source file<br />
                    Free Stock Photos<br />
                    10 Days Free Support<br />
                    24/7 Support</h5>
                            <button className="btn team-btn hve-btn">Order Now</button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 p-3 mb-3">
                    <div className="card card-main">
                        <div className="card-body">
                            <h2 className="card-title taka">$399</h2>
                            <h5 className="card-title position">For Preferred</h5>
                            <hr></hr>
                            <h5 className="ditails">Homepage<br />
                    4 Inner Page<br />
                    Asset file<br />
                    Source file<br />
                    Free Stock Photos<br />
                    20 Days Free Support<br />
                    24/7 Support</h5>
                            <button className="btn team-btn">Order Now</button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 p-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title taka">$599</h2>
                            <h5 className="card-title position">For Elite</h5>
                            <hr></hr>
                            <h5 className="ditails">Homepage<br />
                    8 Inner Page<br />
                    Asset file<br />
                    Source file<br />
                    Free Stock Photos<br />
                    30 Days Free Support<br />
                    24/7 Support</h5>
                            <button className="btn team-btn hve-btn">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;