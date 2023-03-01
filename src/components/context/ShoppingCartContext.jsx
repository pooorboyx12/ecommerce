import { createContext, ReactNode, useContext, useState } from "react";

const ShoppingCartContext = createContext();

export function useShoppingCart() {
	return useContext(ShoppingCartContext);
}
export function ShoppingCartProvider({ children }) {
	const [isOpen, setIsOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);

	const cartQuantity = cartItems.reduce(
		(quantity, item) => item.quantity + quantity,
		0
	);

	const cartTotal = cartItems.reduce(
		(total, item) => item.quantity * item.price + total,
		0
	);

	const cartClear = () => setCartItems([]);

	const openCart = () => setIsOpen(true);
	const closeCart = () => setIsOpen(false);
	function getCartItems(list) {
		setCartItems(list);
	}
	function getItemQuantity(id) {
		return cartItems.find((item) => item.id === id)?.quantity || 0;
	}
	function increaseCartQuantity(product, id) {
		setCartItems((currItems) => {
			if (currItems.find((item) => item.id === id) == null) {
				return [...currItems, { id, quantity: 1, ...product }];
			} else {
				return currItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity + 1 };
					} else {
						return item;
					}
				});
			}
		});
	}
	function decreaseCartQuantity(id) {
		setCartItems((currItems) => {
			if (currItems.find((item) => item.id === id)?.quantity === 1) {
				return currItems.filter((item) => item.id !== id);
			} else {
				return currItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity - 1 };
					} else {
						return item;
					}
				});
			}
		});
	}
	function removeFromCart(id) {
		setCartItems((currItems) => {
			return currItems.filter((item) => item.id !== id);
		});
	}

	return (
		<ShoppingCartContext.Provider
			value={{
				isOpen,
				getItemQuantity,
				getCartItems,
				increaseCartQuantity,
				decreaseCartQuantity,
				removeFromCart,
				openCart,
				closeCart,
				cartItems,
				cartQuantity,
				cartClear,
				cartTotal
			}}>
			{children}
			{/* <ShoppingCart isOpen={isOpen} /> */}
		</ShoppingCartContext.Provider>
	);
}
