import React from "react";
import "./Features.scss";
const Features = () => {
	return (
		<div>
			<div className="features">
				<div className="container features__container">
					<div className="features__content">
						<h2>
							<b className="brand">fiverr</b> business
						</h2>
						<h2>
							<b>A business solution designed for</b> teams
						</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
							obcaecati odit non perspiciatis eveniet! Harum amet in pariatur
							perspiciatis adipisci!
						</p>
						<div className="information-group">
							<div className="information">
								<img
									src="./img/check.png"
									alt=""
								/>
								<span>
									Lorem ipsum, dolor sit amet consectetur adipisicing.
								</span>
							</div>
							<div className="information">
								<img
									src="./img/check.png"
									alt=""
								/>
								<span>
									Lorem ipsum, dolor sit amet consectetur adipisicing.
								</span>
							</div>
							<div className="information">
								<img
									src="./img/check.png"
									alt=""
								/>
								<span>
									Lorem ipsum, dolor sit amet consectetur adipisicing.
								</span>
							</div>
						</div>
						<button>Click to discover more</button>
					</div>
					<div className="features__image">
						<img
							src="https://viame.ae/wp-content/uploads/2019/07/Qualities-Your-Local-Courier-Service-Must-Have-1-1024x743.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
