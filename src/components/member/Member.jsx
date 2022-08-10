import React from "react";

import "./member.css";

const Member = ({imgUrl, names, username})=>{
    return(
        <div className="member">
            <div className="member__img">
                <img src={imgUrl} alt="Profile photo" />
            </div>
            <div className="member__info">
                <h4>{names}</h4>
                <p>{username}</p>
            </div>
        </div>
    )
};

export default Member;