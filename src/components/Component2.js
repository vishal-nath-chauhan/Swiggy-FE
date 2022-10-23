import ChildComponent2 from "./ChildComponent2";
import { useState } from "react";

const Component2 = () => {
	// logic
	// let name ="this is a test name"

	// setTimeout(()=>{
	//     name="this is changed name";
	//     console.log("name changed ",name);
	// },2000)

	// let name ="this is a test name"
	const [name, setName] = useState("this is a test name");

	setTimeout(() => {
		// name=;
        let updatedName = "this is changed name"
		setName(updatedName);
		console.log("name changed Done =>",updatedName);
	}, 2000);
    
	return (
		<div>
			<p>This is a Component 2 {name}</p>
			<ChildComponent2 />
		</div>
	);
};

export default Component2;
