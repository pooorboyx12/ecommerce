import React from "react";
import "./Featured.scss";
const Featured = () => {
	return (
		<div>
			<div className="featured">
				<div className="container featured__container">
					<div className="featured__content">
						{/* <span className="brand">Thinh Tran Service</span> */}
						<h1>
							Find the perfect <i>freelance </i>service for your business
						</h1>
						<div className="search">
							<div className="search-input">
								<img
									src="./img/search.png"
									alt=""
								/>
								<input
									type="text"
									placeholder="Type your demand..."
								/>
							</div>
							<button>Search</button>
						</div>
						<div className="popular">
							<span>Popular:</span>
							<button>Web Design</button>
							<button>Education</button>
							<button>Architure</button>
							<button>Development</button>
							<button>Math</button>
						</div>
					</div>
					<div className="featured__image">
						<img
							src="./img/man.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
