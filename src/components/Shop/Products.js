import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

import productRegistry from "../productRegistry";

const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{Object.keys(productRegistry).map((key, index) => (
					<ProductItem
						productKey={key}
						key={key + index + "products"}
					/>
				))}
			</ul>
		</section>
	);
};

export default Products;
