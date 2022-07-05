import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <footer id="footerblurb">
				<div id="footer-inner">
					<p>&copy; Copyright <Link to={"#"}>Your Site</Link> &#124; <Link to={"#"}>Terms of Use</Link> &#124; <Link to={"#"}>Privacy Policy</Link></p>
					<div class="clr"></div>
				</div>
			</footer>
        </>
    );
};

export default Footer;