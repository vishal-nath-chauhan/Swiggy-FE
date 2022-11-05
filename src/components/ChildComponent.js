import { get } from "lodash";
import React from "react";

const isEqual = (prevProps, nextProps) => {
	// console.log({ prevProps, nextProps });
	if (prevProps.cart.total.subtotal.final === nextProps.cart.total.subtotal.final) return true;
	return false;

	// false => re-rendering
	// true => no re-rendering
};

const ChildComponent = (props) => {
	const { cart } = props;
	console.log("CHILD RE RENDERED", cart);
	const value = get(cart, "total.subtotal.final", 0);
	return <div>Cart: {value}</div>;
};

export default React.memo(ChildComponent, isEqual);
// export default ChildComponent;
