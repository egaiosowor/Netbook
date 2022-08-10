import React from "react";

import "./achievements.css";
import {TextBox} from "../../components";
import {images} from "../../constants";

const Achievements = ()=>{
    return(
        <section className="achievements">
            <div className="achievements__header">
                < TextBox text="Our Achievements" title="Connecting You to The Digital Life." body="A large online community enabling businesses directly engage with consumers." />
                <a href="" className="btn">Get Started</a>
            </div>
            <div className="achievements-container">
                <div className="achievement-card">
                    <span className="achievement-card__rating">
                        <img src={images.star} alt="Star rating" />
                        <h4>4.8 Rating</h4>
                    </span>
                    <span className="achievement-card__members">
                        <img src={images.people} alt="people" />
                        <h4><span className="accent">+836k </span>Members</h4>
                    </span>
                    <p>More than 2 billion people over 20 countries use Netbook we to stay in touch with friends.</p>
                    <a href="">Join Our Community</a>
                </div>
                <div className="achievement-card">
                    <span className="achievement-card__rating">
                        <img src={images.trophy} alt="trophy" />
                        <h4>Awwwards</h4>
                    </span>
                    <span className="achievement-card__members">
                        <img src={images.git} alt="git logo" />
                        <h4>Best of <span className="accent">2021</span> on Github</h4>
                    </span>
                    <p>More than 2 billion people over 20 countries use Netbook we to stay in touch with friends.</p>
                    <a href="">Go To Awards</a>
                </div>
            </div>
        </section>
    )
};

export default Achievements;