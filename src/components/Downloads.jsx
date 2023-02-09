/* eslint-disable array-callback-return */
import DownloadItems from "./DownloadItems";

const Downloads = () => {
	return (
		<section id="downloads">
			<div className="downloads-intro">
				<h2>Download the extension</h2>
				<p>
					We've got more browsers in the pipeline. Please do let us know if
					you've got a favourite you'd like us priotize.
				</p>
			</div>
			<div className="downloads-items">
				{DownloadItems.map((el, index) => {
					return (
						<div className="downloads-items-item" key={index}>
							<img className="logo" src={el.image} alt="Browser Logo" />
							<h3>{el.title}</h3>
							<p>{el.subtitle}</p>
							<img
								className="decoration"
								src={el.decoration}
								alt="Decoration"
							/>
							<button>{el.button}</button>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Downloads;
