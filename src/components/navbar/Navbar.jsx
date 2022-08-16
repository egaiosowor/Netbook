import React, {useState} from "react";

import "./navbar.css";
import {images} from "../../constants"


const Navbar = ()=>{
    const [burgerClass, setBurgerClass] = useState("hamburger");
    const [menuClass, setMenuClass] = useState("navbar__mobile-menu");
    const [toggleMenu, setToggleMenu] = useState(false);

    // toggle burger menu change
    const updateMenu = () => {
        if(!toggleMenu) {
            setBurgerClass("hamburger clicked");
            setMenuClass("navbar__mobile-menu slide-right");
            document.body.style.overflow = "hidden";
        }
        else {
            setBurgerClass("hamburger");
            setMenuClass("navbar__mobile-menu slide-left");
            document.body.style.overflow = "visible";
        }
        setToggleMenu(!toggleMenu)  
    }

    return(
        <nav className="navbar">
            <div className="navbar-left">
                <img className="navbar__logo" src={images.logo} alt="Netbook Logo" />
                <ul className="navbar__links">
                    <li><a href="">Home</a></li>
                    <li><a href="">Community</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Events</a></li>
                </ul>
            </div>
            <div className="navbar-right">
                <a href="" className="btn">Log in</a>
            </div>

            <button className={burgerClass} onClick={updateMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className={menuClass}>
                <li><a href="">Home</a></li>
                <li><a href="">Community</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Events</a></li>
                <li><a href="" className="btn">Login</a></li>
            </ul>
        </nav>
    )
};

export default Navbar;