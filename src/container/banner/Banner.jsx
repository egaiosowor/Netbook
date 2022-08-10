import React from "react";

import "./banner.css";
import {TextBox} from "../../components";
import {images} from "../../constants";

const Banner = ()=>{
    return(
        <section className="banner">
            <div className="banner__header">
                < TextBox text="Get Our Mobile App" title="You Can Easily Find Our App…!" body="The Netbook mobile app is available both on the Apple app store and the Google play store" />
                <img src={images.appStore} alt="App store" />            
            </div>

            <div className="banner__img">
                <img src={images.appMockup} alt="App mockup" />
            </div>
        </section>
    )
};

export default Banner;