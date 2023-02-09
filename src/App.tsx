import React from "react";
import "./css/main.css";
import Navbar from "./components/Navbar";
import Bookmark from "./components/Bookmark";
import Features from "./components/Features";
import Downloads from "./components/Downloads";
import Questions from "./components/Questions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
	return (
		<>
			<div className="container">
				<Navbar />
				<Bookmark />
				<Features />
				<Downloads />
				<Questions />
				<Contact />
				<Footer />
			</div>
		</>
	);
};

export default App;
