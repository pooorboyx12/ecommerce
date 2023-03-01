import React from "react";
import "./CartItem.scss";
import { GoDiffAdded } from "react-icons/go";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

const cartItem = ({ cart }) => {
	const { increaseCartQuantity } = useShoppingCart();
	return (
		<div>
			<div className="cartItem">
				<div className="cartItem__image">
					<img
						src={cart.image}
						alt=""
					/>
					<div className="cartItem__buttons">
						<button
							className="cartItem__add"
							onClick={() => increaseCartQuantity(cart, cart.id)}>
							<GoDiffAdded />
						</button>

						<Link to={`product/${cart.id}`}>
							<button className="cartItem__add">
								<AiFillEye />
							</button>
						</Link>
					</div>
				</div>
				<div className="cartItem__content">
					<p className="cartItem__catergory">{cart.category}</p>
					<Link to={`product/${cart.id}`}>
						<h3 className="cartItem__name">{cart.title}</h3>
					</Link>
					<p className="cartItem__price">${cart.price}</p>
				</div>
			</div>
		</div>
	);
};

export default cartItem;
