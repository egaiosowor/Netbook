import React from "react";

import "./header.css";
import {Navbar} from "../../components";
import {images} from "../../constants";

const Header = ()=>{
    return(
        <header>
            < Navbar />
            <section className="hero">
                <div className="hero__text">
                    <h1>Stay connected with family and friends</h1>
                    <p>More than 2 billion people in over 20 countries use Netbook to stay in touch with friends & family.</p>
                    <div className="btn-group">
                        <a href="" className="btn">About More</a>
                        <a href="" className="btn btn-outline" >Invite Friend</a>
                    </div>
                </div>
                <div className="hero__img">
                    <img src={images.headerImg} alt="Header image" />
                </div>
            </section>
        </header>
    )
};

export default Header;