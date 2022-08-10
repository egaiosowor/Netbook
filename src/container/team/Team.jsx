import React from "react";

import "./team.css";
import {Member, TextBox} from "../../components";
import {images} from "../../constants";

const Team = ()=>{
    return(
        <section className="team">
            < TextBox text="Valuable Team" title="Our Active Members" body="Our team dedicated to connecting people and growing the Netbook community" />
            
            <div className="team__members">
                <Member imgUrl={images.fahim} names="Fahim Rahman" username="@fahim" />
                <Member imgUrl={images.kazi} names="Kazi Rahman" username="@kazin" />
                <Member imgUrl={images.master} names="Masterero Ali" username="@master" />
                <Member imgUrl={images.alia} names="Alia Karon" username="@alia"  />
            </div>
        </section>
    )
};

export default Team;