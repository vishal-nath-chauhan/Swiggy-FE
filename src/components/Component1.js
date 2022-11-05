import { useState } from "react";
import ChildComponent from "./ChildComponent";
import ChildComponent2 from "./ChildComponent2";

const Component1 = () => {
	// const { parent } = props;
	// logic

	// const name = "sohan";
	const age = 34;
	const [cartData, setCartData] = useState({ total: { subtotal: { final: 23423 } } });
	const [name, setName] = useState("");

	const handleName = (e) => {
		setName(e.target.value);
	};

	const handleCart = () => {
		setCartData({ total: { subtotal: { final: "vishal is here" } } });
	};

	return (
		<div>
			<p>
				This is a Component 1 :Made By {name}.Age : {age}
			</p>
			<input value={name} onChange={handleName} />
			<button onClick={handleCart}>update card</button>

			<ChildComponent cart={cartData} />

			{/* <ChildComponent2 /> */}
		</div>
	);
};

export default Component1;
