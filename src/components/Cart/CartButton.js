import classes from "./CartButton.module.css";
import { cartActions } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
	const cartItems = useSelector((state) => state.cart.cartItems);
	const dispatcher = useDispatch();

	const nCartItems = cartItems.reduce(
		(acc, currentValue) => acc + currentValue.quantity,
		0
	);

	return (
		<button
			onClick={() => dispatcher(cartActions.toggleShowCart())}
			className={classes.button}
		>
			<span>My Cart</span>
			<span className={classes.badge}>{nCartItems}</span>
		</button>
	);
};

export default CartButton;
