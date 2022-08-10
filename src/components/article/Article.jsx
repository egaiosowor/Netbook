import React from "react";

import "./article.css"
import {images} from "../../constants";

const Article = ({imgUrl, alt, body, text})=>{
    return(
        <article className="article">
            <div className="article__image">
                <img src={imgUrl} alt={alt} />
            </div>
            <div className="article__text">
                <p>{body}</p>
                <a href="">{text}
                    {/* <img src={images.chevron} alt="Chevron" /> */}
                </a>
            </div>
        </article>
    )
};

export default Article;