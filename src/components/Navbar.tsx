import React from "react";
import Logo from "../images/logo-bookmark.svg";
import BurgerNavbar from "./BurgerNavbar";
import ExpandedNavbar from "./ExpandedNavbar";

const Navbar: React.FC = () => {
	return (
		<nav>
			<div className="navbar">
				<div className="navbar-logo">
					<a href="#bookmark">
						<img src={Logo} alt="Bookmark Logo" />
					</a>
				</div>
				<BurgerNavbar />
				<ExpandedNavbar />
			</div>
		</nav>
	);
};

export default Navbar;
