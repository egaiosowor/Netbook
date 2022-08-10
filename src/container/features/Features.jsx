import React from "react";

import "./features.css";
import {Feature, TextBox} from "../../components";
import {images} from "../../constants";



const Features = ()=>{
    return(
        <section className="features">
            < TextBox text="Our Community" title="Community Features" body="The Netbook community platform is built around some exciting features" />

            <div className="features__container">
                <Feature imgUrl={images.members} alt="Members" title="Members, Friends" body="Members, Friends Connection ( like followers ), Private Message" />
                <Feature imgUrl={images.groups} alt="Groups" title="Groups" body="Your users can create groups to let other users to join and talk" />
                <Feature imgUrl={images.forum} alt="Forum" title="Forum" body="Forum is ready by BBPress. Your users can make topics and talk." />
                <Feature imgUrl={images.module} alt="Custom Module" title="Custom Module" body="You can create Members, Groups Module. We already created 3 modules. It's by drag & drop live builder." />
                <Feature imgUrl={images.builder} alt="List Builder" title="List Builder" body="Members, Groups list can be modified by drag & drop live builder." />
                <Feature imgUrl={images.effects} alt="List Scroll Effects" title="List Scroll Effects" body="8 different scroll effects are ready.You can always change by your tastes."/>
            </div>
        </section>
    )
};

export default Features;