import { useState } from "react";
import ArrowImg from "../images/icon-arrow.svg";
import ActiveArrowImg from "../images/icon-arrow-active.svg";

const Questions = () => {
	const [showAnswer, setShowAnswer] = useState(0);

	const handleClick = (e) => {
		setShowAnswer(e.target.id);
		showAnswer === e.target.id && setShowAnswer(0);
	};

	return (
		<section id="questions">
			<div className="questions-intro">
				<h2>Frequently Asked Questions</h2>
				<p>
					Here are some of our FAQs. If you have any other questions you'd like
					answered please feel free to email us.
				</p>
			</div>
			<div className="questions-list">
				<ul>
					<li
						className={
							showAnswer === "1"
								? "questions-list-question active"
								: "questions-list-question"
						}
						id="1"
						onClick={handleClick}>
						<div id="1">
							<span className="question" id="1">
								What is Bookmark?
							</span>
							<img
								id="1"
								src={showAnswer === "1" ? ActiveArrowImg : ArrowImg}
								alt="Logo from dropdown"
							/>
						</div>
						<span className="questions-list-question-answer">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged.
						</span>
					</li>
					<li
						className={
							showAnswer === "2"
								? "questions-list-question active"
								: "questions-list-question"
						}
						id="2"
						onClick={handleClick}>
						<div id="2">
							<span className="question" id="2">
								How can I request a new browser?
							</span>
							<img
								id="2"
								src={showAnswer === "2" ? ActiveArrowImg : ArrowImg}
								alt="Logo from dropdown"
							/>
						</div>
						<span className="questions-list-question-answer">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged.
						</span>
					</li>
					<li
						className={
							showAnswer === "3"
								? "questions-list-question active"
								: "questions-list-question"
						}
						id="3"
						onClick={handleClick}>
						<div id="3">
							<span className="question" id="3">
								Is there a mobile app?
							</span>
							<img
								id="3"
								src={showAnswer === "3" ? ActiveArrowImg : ArrowImg}
								alt="Logo from dropdown"
							/>
						</div>
						<span className="questions-list-question-answer">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged.
						</span>
					</li>
					<li
						className={
							showAnswer === "4"
								? "questions-list-question active"
								: "questions-list-question"
						}
						id="4"
						onClick={handleClick}>
						<div id="4">
							<span className="question" id="4">
								What about other Chromium browsers?
							</span>
							<img
								id="4"
								src={showAnswer === "4" ? ActiveArrowImg : ArrowImg}
								alt="Logo from dropdown"
							/>
						</div>
						<span className="questions-list-question-answer">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged.
						</span>
					</li>
				</ul>
			</div>

			<button>More info</button>
		</section>
	);
};

export default Questions;
