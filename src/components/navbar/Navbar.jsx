import React, {useState} from "react";

import "./navbar.css";
import {images} from "../../constants"

// const toggleMenu = ()=>{
//     const hamburgerBtn = document.querySelector(".hamburger");

//     if(hamburgerBtn.classList.contains("is-toggled")){
//         hamburgerBtn.classList.remove("is-toggled");
//         document.body.style.overflow = "visible";
//         document.querySelector(".nav__menu").style.opacity = "0";
//     }else{
//         hamburgerBtn.classList.add("is-toggled");
//         document.body.style.overflow = "hidden";
//         document.querySelector(".nav__menu").style.opacity = "1";
//     }
    
// };

const Menu = ()=>(
    <>
        <li><a href="#">Home</a></li>
        <li><a href="#">Community</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Events</a></li>
    </>
);

const Navbar = ()=>{
    const [toggleMenu, setToggleMenu] = useState(false);

    return(
        <nav className="nav">
            <div className="nav-left">
                <img className="nav__logo" src={images.logo} alt="Netbook Logo" />
                <ul className="nav__links">
                    < Menu />
                </ul>
            </div>
            <div className="nav-right">
                <a href="" className="btn">Log in</a>
            </div>

            {toggleMenu
            ?  (<button className="hamburger is-toggled" onClick={()=> setToggleMenu(false)}>
                    <span className="hamburger-top"></span>
                    <span className="hamburger-mid"></span>
                    <span className="hamburger-bottom"></span>
                </button>)
            :  (<button className="hamburger" onClick={()=> setToggleMenu(true)}>
                    <span className="hamburger-top"></span>
                    <span className="hamburger-mid"></span>
                    <span className="hamburger-bottom"></span>
                </button>)}
            {toggleMenu && (
            <div className="nav__menu">
                < Menu />
                <a href="" className="btn">Login</a>
            </div>
            )}
        </nav>
    )
};

export default Navbar;