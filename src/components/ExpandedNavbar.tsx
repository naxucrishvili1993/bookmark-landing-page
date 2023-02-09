import React from "react";

const ExpandedNavbar: React.FC = () => {
	return (
		<div className="navbar-list-expanded">
			<ul className="navbar-list">
				<li className="navbar-list-item">
					<a href="#features">FEATURES</a>
				</li>
				<li className="navbar-list-item">
					<a href="#downloads">PRICING</a>
				</li>
				<li className="navbar-list-item">
					<a href="#contact">CONTACT</a>
				</li>
				<li className="navbar-list-item">
					<button>LOGIN</button>
				</li>
			</ul>
		</div>
	);
};

export default ExpandedNavbar;
