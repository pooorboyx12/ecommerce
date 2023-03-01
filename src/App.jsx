import "./app.scss";
import React from "react";
import {
	BrowserRouter,
	createBrowserRouter,
	Outlet,
	RouterProvider,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { ShoppingCartProvider } from "./components/context/ShoppingCartContext";
import Sidebar from "./pages/sidebar/Sidebar";
import ProductDetail from "./components/productDetail/productDetail";
import Footer from "./components/Footer/Footer";
const App = () => {
	const Layout = () => {
		return (
			<div className="app">
				<Navbar />
				<Sidebar />
				<Outlet />
				<Footer />
			</div>
		);
	};
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/product/:id",
					element: <ProductDetail />,
				},
			],
		},
	]);
	return (
		<div>
			<ShoppingCartProvider>
				<RouterProvider router={router} />
			</ShoppingCartProvider>
		</div>
	);
};

export default App;
