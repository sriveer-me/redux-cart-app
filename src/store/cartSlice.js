import axios from "axios";

import { createSlice } from "@reduxjs/toolkit";
import productRegistry from "../components/productRegistry";

const cartSlice = createSlice({
	name: "cartSlice",
	initialState: {
		cartShown: false,
		cartItems: Object.keys(productRegistry).map((key) => {
			return { productKey: key, quantity: 0 };
		}),
	},
	reducers: {
		addItem(state, action) {
			const productKeyToAdd = action.payload;
			const productKeyToAddIndex = state.cartItems.findIndex(
				(item) => item.productKey === productKeyToAdd
			);
			state.cartItems[productKeyToAddIndex].quantity += 1;
		},
		removeItem(state, action) {
			const productKeyToAdd = action.payload;
			const productKeyToAddIndex = state.cartItems.findIndex(
				(item) => item.productKey === productKeyToAdd
			);

			if (state.cartItems[productKeyToAddIndex].quantity !== 0) {
				state.cartItems[productKeyToAddIndex].quantity -= 1;
			}
		},
		toggleShowCart(state) {
			state.cartShown = !state.cartShown;
		},
		setCart(state, action) {
			state.cartItems = action.payload;
		},
	},
});

export function getItemsFromServer() {
	return function (dispatcher) {
		axios
			.get("https://task-app-31c3a-default-rtdb.firebaseio.com/cart.json")
			.then((res) => console.log(res.data));
		//console.log(data);
		//dispatcher(cartActions.setCart(data));
	};
}

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
