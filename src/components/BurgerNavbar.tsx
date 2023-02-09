import React, { useState } from "react";
import Burger from "../images/icon-hamburger.svg";
import BookmarkLogo from "../images/logo-bookmark-light.svg";
import FacebookIcon from "../images/icon-facebook.svg";
import TwitterIcon from "../images/icon-twitter.svg";

const BurgerNavbar: React.FC = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	const FacebookButton: Function = () => {
		return <img src={FacebookIcon} alt="Facebook Logo" />;
	};
	const TwitterButton: Function = () => {
		return <img src={TwitterIcon} alt="Twitter Logo" />;
	};

	return (
		<div className="navbar-burger">
			<div className="burger-wrapper">
				<img
					src={Burger}
					className="burger-logo"
					alt="Hamburger Logo"
					onClick={() => setMenuOpen(!menuOpen)}
				/>
			</div>
			<div
				className={
					menuOpen
						? "navbar-burger-list-wrapper active"
						: "navbar-burger-list-wrapper"
				}>
				<div className="bookmark-logo">
					<a href="#bookmark" onClick={() => setMenuOpen(!menuOpen)}>
						<img src={BookmarkLogo} alt="Bookmark Logo" />
					</a>
				</div>
				<span
					className="menu-close"
					onClick={() => setMenuOpen(!menuOpen)}></span>
				<ul className="navbar-burger-list">
					<li className="navbar-burger-list-item">
						<a href="#features" onClick={() => setMenuOpen(!menuOpen)}>
							FEATURES
						</a>
					</li>
					<li className="navbar-burger-list-item">
						<a href="#downloads" onClick={() => setMenuOpen(!menuOpen)}>
							PRICING
						</a>
					</li>
					<li className="navbar-burger-list-item">
						<a href="#contact" onClick={() => setMenuOpen(!menuOpen)}>
							CONTACT
						</a>
					</li>
					<li className="navbar-burger-list-item">
						<button>LOGIN</button>
					</li>
				</ul>
				<div className="socials">
					<FacebookButton />
					<TwitterButton />
				</div>
			</div>
		</div>
	);
};

export default BurgerNavbar;
