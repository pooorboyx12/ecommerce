import React from "react";
import {
	AiOutlineArrowRight,
	AiOutlineCloseCircle,
	AiOutlinePlusSquare,
	AiOutlineMinusSquare,
	AiOutlineMinus,
	AiOutlinePlus,
	AiFillDelete,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../components/context/ShoppingCartContext";
import "./Sidebar.scss";
const Sidebar = () => {
	const {
		cartQuantity,
		cartItems,
		openCart,
		cartClear,
		isOpen,
		closeCart,
		cartTotal,
		decreaseCartQuantity,
		removeFromCart,
		increaseCartQuantity,
	} = useShoppingCart();
	return (
		<div>
			<div className={isOpen ? "sidebar active" : "sidebar"}>
				<div className="sidebar__header">
					<p>Shopping cart ({cartQuantity})</p>
					<i>
						<AiOutlineArrowRight onClick={closeCart} />
					</i>
				</div>
				<div className="sidebar__cart">
					{cartItems.map((item, i) => (
						<div
							className="sidebar__item"
							key={i}>
							<Link to={`product/${item.id}`}>
								<img
									src={item.image}
									alt=""
									class
								/>
							</Link>
							<div className="sidebar__info">
								<div className="sidebar__header">
									<Link to={`product/${item.id}`}>
										<h4>{item.title}</h4>
									</Link>
									<i>
										<AiOutlineCloseCircle
											onClick={() => removeFromCart(item.id)}
										/>
									</i>
								</div>
								<div className="sidebar__bottom">
									<div className="button__group">
										<i className="minus">
											<AiOutlineMinus
												onClick={() => decreaseCartQuantity(item.id)}
											/>
										</i>
										<div className="amount">{item.quantity}</div>
										<i className="add">
											<AiOutlinePlus
												onClick={() => increaseCartQuantity(item, item.id)}
											/>
										</i>
									</div>
									<div className="sidebar__price">${item.price}</div>
									<div className="sidebar_total-price">
										${parseFloat(item.price * item.quantity).toFixed(2)}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="bottom">
					<span>Total: {parseFloat(cartTotal).toFixed(2)}</span>

					<AiFillDelete onClick={cartClear} />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
