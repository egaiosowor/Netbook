import React from "react";

import "./feature.css";

const Feature = ({imgUrl, alt, title, body})=>{
    return(
        <div className="feature">
            <div className="feature__img">
                <img src={imgUrl} alt={alt} />
            </div>
            <div className="feature__text">
                <h4>{title}</h4>
                <p>{body}</p>
            </div>
        </div>
    )
};

export default Feature;