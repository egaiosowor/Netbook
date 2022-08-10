import React from "react";

import "./about.css";
import {TextBox} from "../../components";
import {images} from "../../constants";

const About = ()=>{
    return(
        <section className="about">
            <div className="about__header">
                < TextBox text="What's Netbook?" title="Why Join the Netbook Community?" body="Recent surveys indicate most  small businesses recognise the need to stay connected with the consumer." />
                <ul>
                    <li>Groups</li>
                    <li>Messages</li>
                    <li>Share</li>
                </ul>
            </div>

            <div className="about__image">
                <img src={images.aboutImg} alt="About Image" />
            </div>
        </section>
    )
};

export default About;