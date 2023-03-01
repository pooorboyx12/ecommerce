import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "./Navbar.scss";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navbar = () => {
	const { openCart, cartQuantity } = useShoppingCart();
	return (
		<div className="navbar">
			<div className="container">
				<div className="logo">
					<Link to="/">
						<span className="text">fiverr</span>
					</Link>

					<span className="dot">.</span>
				</div>
				<div className="links">
					{/* <span>Fiverr Business</span> */}
					<div className="cart">
						<i>
							<AiOutlineShoppingCart onClick={openCart} />
						</i>
						<span className="quantity">{cartQuantity}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
