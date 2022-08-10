import React from "react";

import "./textBox.css";

const TextBox = ({text, title, body})=>{
    return(
        <div className="textBox">
            <span>{text}</span>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
};

export default TextBox;