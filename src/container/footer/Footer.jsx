import React from "react";

import "./footer.css";

const Footer = ()=>{
    return(
        <footer className="footer">
            <div className="footer__links">
                <ul className="footer__links__list">
                    <li>
                        <h4>Home</h4>
                        </li>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Community</a>
                    </li>
                    <li>
                        <a href="">Events</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
                <ul className="footer__links__list">
                    <li>
                        <h4>Resources</h4>
                    </li>
                    <li>
                        <a href="">Blog</a>
                    </li>
                    <li>
                        <a href="">News</a>
                    </li>
                    <li>
                        <a href="">Guides</a>
                    </li>
                    <li>
                        <a href="">Help Center</a>
                    </li>
                </ul>
                <ul className="footer__links__list">
                    <li>
                        <h4>Community</h4>
                    </li>
                    <li>
                        <a href="">Newsfeed</a>
                    </li>
                    <li>
                        <a href="">Profile</a>
                    </li>
                    <li>
                        <a href="">Friends</a>
                    </li>
                    <li>
                        <a href="">Forum</a>
                    </li>
                </ul>
                <ul className="footer__links__list">
                    <li>
                        <h4>Main links</h4>
                    </li>
                    <li>
                        <a href="">Members</a>
                    </li>
                    <li>
                        <a href="">Activity</a>
                    </li>
                    <li>
                        <a href="">Groups</a>
                    </li>
                    <li>
                        <a href="">Private Group</a>
                    </li>
                </ul>
            </div>
            <div className="footer__cta">
                <h4>Subscribe To Our Newsletter</h4>
                <p>Stay up to date with our newsletters, future updates and added deliverables.</p>
                <form>
                        <input type="text" placeholder="Email Address" />
                        <button className="btn">Subscribe</button>
                </form>
            </div>
        </footer>
    )
};

export default Footer;