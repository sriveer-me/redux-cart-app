import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

import productRegistry from "../productRegistry";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const ProductItem = ({ productKey }) => {
	const title = productRegistry[productKey].title;
	const price = productRegistry[productKey].price;
	const description = productRegistry[productKey].description;

	const dispatcher = useDispatch();

	return (
		<li className={classes.item}>
			<Card>
				<header>
					<h3>{title}</h3>
					<div className={classes.price}>${price.toFixed(2)}</div>
				</header>
				<p>{description}</p>
				<div className={classes.actions}>
					<button
						onClick={() =>
							dispatcher(cartActions.addItem(productKey))
						}
					>
						Add to Cart
					</button>
				</div>
			</Card>
		</li>
	);
};

export default ProductItem;
