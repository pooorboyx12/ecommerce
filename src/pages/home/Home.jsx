import React from "react";
import Featured from "../../components/Featured/Featured";
import Features from "../../components/features/Features";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import CartList from "../../components/CartList/CartList";
const Home = () => {
	return (
		<div>
			<Featured />
			<TrustedBy />
			<Features />
			<CartList />
		</div>
	);
};

export default Home;
