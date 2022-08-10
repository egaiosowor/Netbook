import React, { useState } from "react";

import "./blog.css";
import { Article, TextBox} from "../../components";
import {images} from "../../constants";

const Blog = ()=>{
    const articleData= [
        {imgUrl : images.blog01, alt : "A MacBook beign operated by a lady", body : "Learn what SMEs are saying about Netbook", text : "Continue Reading"},
        {imgUrl : images.blog02, alt : "A child smilling holding an iPhone", body : "Netbook Network Added New Photo Filter", text : "Continue Reading"},
        {imgUrl : images.blog03, alt : "Navigation system consisting of pawns", body : "We Optimised Netbooks with Better Navigation", text : "Continue Reading"}
    ];

    

    return(
        <section className="blog">
            < TextBox text="Blog" title="Latest News" />

            <div className="blog__articles">
                {articleData.map((data, index) => (
                    <Article imgUrl={data.imgUrl} alt={data.alt} body={data.body} text={data.text} key={index}/>
                ))}
            </div>
        </section>
    )
};

export default Blog;