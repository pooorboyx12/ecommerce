import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import "./ProductDetail.scss";

const ProductDetail = () => {
	const { id } = useParams();
	const { cartItems, increaseCartQuantity } = useShoppingCart();
	const product = cartItems.find((item) => item.id === parseInt(id));
	useEffect(() => {
		console.log(product);
	}, []);
	return (
		<div>
			{product && (
				<div className="container detail-container">
					<div className="detail__image">
						<img
							src={product?.image}
							alt=""
						/>
					</div>
					<div className="detail__content">
						<h2 className="detail__title">{product?.title}</h2>
						<b>${product?.price}</b>
						<p>{product?.description}</p>
						<button onClick={() => increaseCartQuantity(product, product.id)}>
							Add to Cart
						</button>
					</div>
				</div>
			)}

			{!product && (
				<div className="loading container">
					<p>Loading....</p>
				</div>
			)}
		</div>
	);
};

export default ProductDetail;
