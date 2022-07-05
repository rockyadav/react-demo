import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            <header id="header">
				<div id="header-inner">	
					<div id="logo">
						<h1><Link to="/">Cool<span>Logo</span></Link></h1>
					</div>
					<div id="top-nav">
						<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="about">About</Link></li>
						<li><Link to="contact">Contact</Link></li>
						<li><Link to="faq">FAQ</Link></li>
						<li><Link to="help">Help</Link></li>
						</ul>
					</div>
					<div class="clr"></div>
				</div>
			</header>
        </>
    );
};

export default Header;