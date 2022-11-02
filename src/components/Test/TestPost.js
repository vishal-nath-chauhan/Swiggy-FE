import react, { useEffect, useState } from "react";
import axios from "axios";

const TestPost = () => {
	const [post, setPost] = useState(null);
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	const [userData, setUserData] = useState({ title: "", body: "" });
	console.log({ userData });
	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
			console.log(response.data);
			setPost(response.data);
		});
	}, []);

	// let handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	axios
	// 		.post("https://jsonplaceholder.typicode.com/posts/", {
	// 			title: title,
	// 			body: body,
	// 		})
	// 		.then((response) => {
	// 			console.log(response);
	// 			setPost(response.data);
	// 		});
	// };

	// step 1
	// const handleTitle =(e)=>{
	//   console.log({e});
	//   setTitle(e.target.value)
	// }

	// const handleBody =(e)=>{
	//   console.log({e});
	//   setBody(e.target.value)
	// }

	// step2
	// const handleChange = (e) => {
	// 	// console.log({ e });
	// 	const id = e.target.id;
	// 	const value = e.target.value;
	// 	const userId = JSON.parse(e.target.dataset.vishal);
	// 	console.log({ id, value, userId });

	// 	// dynamic way of creating dynamic keys
	// 	// const obj ={
	// 	//   // name:"vishal"
	// 	//   [variable]:"vishal"  // rohan:"vishal"
	// 	// }

	// 	// setUserData({ [id]: value }); // don't use this, as it will delete old data

	// 	// title => setUserData({[id]:value})
	// 	setUserData({ ...userData, [id]: value });
	// };

	// step3

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		let tempData = {};
		console.log({ e });
		const userId = JSON.parse(e.target.dataset.vishal);
		for (let item of formData.entries()) {
			console.log("item ", item);
			// if(item[0]==='name')
			tempData = { ...tempData, [item[0]]: item[1] };
		}
		setUserData(tempData);
	};

	// if (!post) return "No post!";

	return (
		<>
			<form data-vishal={JSON.stringify({ id: "user_34634634", name: "rohan", age: "235" })} onSubmit={handleSubmit}>
				{/* <input id="title" type="text" onChange={ (e)=> handleChange(e,'user_2423')} name="title" /> */}
				{/* //wrong way */}
				<input type="text" name="title" />
				<input type="text" name="body" />
				<input type="submit" value="submit" />
			</form>

			{/* {
        post ? ui :null
      } */}
		</>
	);
};

export default TestPost;
