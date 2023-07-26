import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import { useSelector } from "react-redux";

const Cart = (props) => {
	const cartItems = useSelector((state) => state.cart.cartItems);
	const cartShown = useSelector((state) => state.cart.cartShown);
	return (
		<>
			{cartShown && (
				<Card className={classes.cart}>
					<h2>Your Shopping Cart</h2>
					<ul>
						{cartItems.map((item, index) => {
							if (item.quantity > 0) {
								return (
									<CartItem
										productKey={item.productKey}
										quantity={item.quantity}
										key={item.productKey + index + "cart"}
									/>
								);
							} else return null;
						})}
					</ul>
				</Card>
			)}
		</>
	);
};

export default Cart;
