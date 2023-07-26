import classes from "./CartItem.module.css";
import productRegistry from "../productRegistry";
import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cartSlice";

const CartItem = ({ productKey, quantity }) => {
	const title = productRegistry[productKey].title;
	const price = productRegistry[productKey].price;
	const total = quantity * price;

	const dispatcher = useDispatch();

	return (
		<li className={classes.item}>
			<header>
				<h3>{title}</h3>
				<div className={classes.price}>
					${total.toFixed(2)}{" "}
					<span className={classes.itemprice}>
						(${price.toFixed(2)}/item)
					</span>
				</div>
			</header>
			<div className={classes.details}>
				<div className={classes.quantity}>
					x <span>{quantity}</span>
				</div>
				<div className={classes.actions}>
					<button
						onClick={() =>
							dispatcher(cartActions.removeItem(productKey))
						}
					>
						-
					</button>
					<button
						onClick={() =>
							dispatcher(cartActions.addItem(productKey))
						}
					>
						+
					</button>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
