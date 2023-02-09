import BookmarkLogo from "../images/logo-bookmark-light.svg";
import Facebook from "../images/icon-facebook.svg";
import Twitter from "../images/icon-twitter.svg";

const Footer = () => {
	return (
		<footer>
			<div>
				<a href="#bookmark">
					<img src={BookmarkLogo} alt="Bookmark Logo" />
				</a>
				<ul>
					<li>
						<a href="#features">FEATURES</a>
					</li>
					<li>
						<a href="#downloads">PRICING</a>
					</li>
					<li>
						<a href="#contact">CONTACT</a>
					</li>
				</ul>
			</div>
			<div>
				<img src={Facebook} alt="Facebook Logo" />
				<img src={Twitter} alt="Twitter Logo" />
			</div>
		</footer>
	);
};

export default Footer;
