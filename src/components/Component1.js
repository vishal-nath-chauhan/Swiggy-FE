import ChildComponent from "./ChildComponent";
import ChildComponent2 from "./ChildComponent2";

const Component1 = () => {
	// const { parent } = props;
	// logic

	const name = "sohan";
	const age = 34;

	return (
		<div>
			<p>
				This is a Component 1 :Made By {name}.Age : {age}
			</p>
			{/* <ChildComponent userName={name} parent={parent} /> */}
			{/* <ChildComponent2 /> */}
		</div>
	);
};

export default Component1;
