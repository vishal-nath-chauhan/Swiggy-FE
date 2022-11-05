import ChildComponent2 from "./ChildComponent2";
import { useEffect, useMemo, useState } from "react";
import { Input } from "@mui/material";

const Component2 = () => {
	// logic
	// let name ="this is a test name"

	// setTimeout(()=>{
	//     name="this is changed name";
	//     console.log("name changed ",name);
	// },2000)

	// let name ="this is a test name"
	const [name, setName] = useState("");
	const [age, setAge] = useState(0);
	console.log({ age });

	const calculate = () => {
		//  assumption :it will take few seconds
		console.log("calculation begins ");
		let total = 0,
			sum = 0;
		for (let item = 1; item <= 1000000; item++) {
			sum += total;
			sum = (sum * 23523) / 1.23532;
			total += sum;
		}
		total += age;
		console.log("total ", total);
		return total;
	};

	const total = useMemo(() => calculate(), [age]);

	// const total = useMemo(() => calculate(), []);
	// const total= calculate()


	// const [total, setTotal] = useState(calculate());

	// useEffect(() => {
	// 	let newTotal = calculate();
	// 	setTotal(newTotal);
	// }, [age]);



	// useEffect(()=>{
	// 	// logic
	// 	// u can't return anything
	// 	// return 1000
	// 	if(age<2323){
	// 		setName("sdgsd")
	// 	}
	// 	else{
	// 		return
	// 	}
	// },[age])

	// setTimeout(() => {
	// 	// name=;
	// 	let updatedName = "this is changed name";
	// 	setName(updatedName);
	// 	console.log("name changed Done =>", updatedName);
	// }, 2000);

	const handleChange = (e) => {
		let id = e.target.id;
		if (id === "age") {
			let number = e.target.value;
			// number = !number || isNaN(parseInt(number)) ? 0 : number;
			number = isNaN(parseInt(number)) ? 0 : parseInt(number);
			setAge(number);
		}
		if (id === "name") {
			setName(e.target.value);
		}
	};
	return (
		<div>
			<p>This is a Component 2 {name}</p>
			{/* <p>total amount {total}</p> */}
			<Input id="age" placeholder="Enter Age" value={age} onChange={handleChange} />
			<Input id="name" placeholder="Enter name" value={name} onChange={handleChange} />

			<ChildComponent2 />
		</div>
	);
};

export default Component2;
