import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import tmdbApi from "../../api/tmdbApi.js";
import apiConfig from "../../api/apiConfig";
import CartItem from "../cartItem/CartItem";
import "./CartList.scss";
const CartList = () => {
	// const { getCartItems, cartItems } = useShoppingCart();
	const [cartList, setCartList] = useState([]);
	useEffect(() => {
		const getProducts = async () => {
			try {
				const response = await tmdbApi.getProductsAPI();
				setCartList(response);
				console.log(response);
			} catch {
				console.log("error");
			}
		};
		getProducts();
	}, []);
	return (
		<div>
			<div className="text">
				<h4>Our fiverr</h4>
			</div>
			<div className="cart__container">
				{cartList?.slice(0, 8).map((cart, i) => (
					<CartItem
						key={i}
						cart={cart}>
						{" "}
					</CartItem>
				))}
			</div>
		</div>
	);
};

export default CartList;
