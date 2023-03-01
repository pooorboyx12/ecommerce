import React from "react";
import "./Footer.scss";
const Footer = () => {
	return (
		<div>
			<footer className="footer">
				<div className="container">
					<div className="footer__bottom">
						<div className="footer__brand">
							<h1>fiverr.</h1>
							<span>
								<b>fiverr</b> international Ltd. 2023
							</span>
						</div>
						<div className="footer__media">
							<a href="#">
								<img
									src="./img/facebook.png"
									alt=""
								/>
							</a>
							<a href="#">
								<img
									src="./img/instagram.png"
									alt=""
								/>
							</a>
							<a href="#">
								<img
									src="./img/twitter.png"
									alt=""
								/>
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
