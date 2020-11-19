import React from 'react';
import './Team.css'

const Team = () => {
    return (
        <div className="text-center team-card">
            <h3 className="Team-title">Choose Your Dedicated Team</h3>
            <div class="card-deck col-mb-3">
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title taka">$199</h2>
                        <h5 class="card-title position">For Basic</h5>
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

                <div class="card card-main">
                    <div class="card-body">
                        <h2 class="card-title taka">$399</h2>
                        <h5 class="card-title position">For Preferred</h5>
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

                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title taka">$599</h2>
                        <h5 class="card-title position">For Elite</h5>
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
    );
};

export default Team;