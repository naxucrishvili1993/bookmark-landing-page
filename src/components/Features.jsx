/* eslint-disable array-callback-return */
import React, { useState } from "react";
import Topics from "../components/FeatureTopics.jsx";

const Features = () => {
	// Displaying the active testimonial
	const [activeTopic, setActiveTopic] = useState("Simple Bookmarking");

	const handleClick = (e) => {
		setActiveTopic(e.target.innerText);
		setActiveButtonId(e.target.id);
	};

	// To assign appropriate styles to the active testimonial button
	const [activeButtonId, setActiveButtonId] = useState("1");

	// Buttons to control testimonials
	const SimpleBookmarking = () => (
		<button
			className={
				activeButtonId === "1"
					? "features-topics-topic active"
					: "features-topics topic"
			}
			onClick={handleClick}
			id="1">
			<span id="1" onClick={handleClick}>
				Simple Bookmarking
			</span>
		</button>
	);
	const SpeedySearching = () => (
		<button
			className={
				activeButtonId === "2"
					? "features-topics-topic active"
					: "features-topics topic"
			}
			onClick={handleClick}
			id="2">
			<span id="2" onClick={handleClick}>
				Speedy Searching
			</span>
		</button>
	);

	const EasySharing = () => (
		<button
			className={
				activeButtonId === "3"
					? "features-topics-topic active"
					: "features-topics topic"
			}
			onClick={handleClick}
			id="3">
			<span id="3" onClick={handleClick}>
				Easy Sharing
			</span>
		</button>
	);
	// ----------------------------------

	return (
		<section id="features">
			<div className="features-intro">
				<h2>Features</h2>
				<p>
					Our aim is to make it quick and easy for you to access your favourite
					websites. Your bookmarks sync between your devices so you can access
					them on the go.
				</p>
			</div>
			<div className="features-topics">
				<SimpleBookmarking />
				<SpeedySearching />
				<EasySharing />
			</div>
			<div className="feature-testimonials">
				{Topics.map((el, index) => {
					if (el.key === activeTopic)
						return (
							<div className="testimonial" key={index}>
								<div className="testimonial-illustration">
									<img src={el.illustration} alt="Testimonial Illustration" />
								</div>
								<div className="testimonial-info">
									<h2>{el.title}</h2>
									<p>{el.paragraph}</p>
								</div>
							</div>
						);
				})}
			</div>
		</section>
	);
};

export default Features;
