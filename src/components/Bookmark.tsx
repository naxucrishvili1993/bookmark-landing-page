import React from "react";
import Illustration from "../images/illustration-hero.svg";

const Bookmark: React.FC = () => {
	return (
		<section id="bookmark">
			<div className="bookmark-content">
				<h1 className="bookmark-content-heading">A Simple Bookmark Manager</h1>
				<p className="bookmark-content-paragraph">
					A clean and simple interface to organize your favourite websites. Open
					a new browser tab and see your sites load instantly. Try it for free.
				</p>
				<button className="bookmark-content-button">Get it on Chrome</button>
				<button className="bookmark-content-button">Get it on Firefox</button>
			</div>
			<div className="bookmark-illustration">
				<img src={Illustration} alt="Illustration Hero" />
			</div>
		</section>
	);
};

export default Bookmark;
