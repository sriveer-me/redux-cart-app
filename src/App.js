import axios from "axios";

import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { cartActions, getItemsFromServer } from "./store/cartSlice";

let initial = true;

function App() {
	const cartItems = useSelector((state) => state.cart.cartItems);
	const dispatcher = useDispatch();
	useEffect(
		function () {
			if (initial === true) {
				// //this is the first time; get data from the server
				// async function getDataFromServer() {
				// 	const { data } = await axios.get(
				// 		"https://task-app-31c3a-default-rtdb.firebaseio.com/cart.json"
				// 	);
				// 	dispatcher(cartActions.setCart(data));
				// }
				// getDataFromServer();
				console.log("gonna trigger dispatcher");
				dispatcher(getItemsFromServer);
				initial = false;
			} else {
				//post data to server since cart items have modified
				axios.put(
					"https://task-app-31c3a-default-rtdb.firebaseio.com/cart.json",
					cartItems
				);
			}
		},
		[cartItems, dispatcher]
	);

	return (
		<Layout>
			<Cart />
			<Products />
		</Layout>
	);
}

export default App;
