import React, { useCallback, useEffect, useRef, useState } from "react";
import P1 from "./P1";
import P2 from "./P2";

const Parent = () => {
	const [user, setUser] = useState({ age: 234, name: "v" });

	// const userData = default ;

	const handleChange = useCallback(
		(e) => {
			setUser({ age: 234, name: "v" });
		},
		[user]
	);

	const userRef = useRef(null);
	console.log({ userRef: userRef });

	// userData.current = someValue

	// lets assume api
	//  const userData =

	// useEffect(() => {
	// 	// there are some dependencies
	// 	// getUserData()
	// 	// setUSerData(userdetails)
	// 	// issues => it will call itself again and again
	// }, []);

	const updateUI = () => {
		// userRef.current.innerText = "hello";
		userRef.current.style="border:2px solid red;"
	};
	return (
		<div>
			Parent
			<P1 userRef={userRef} user={user.name} handleUser={handleChange} />
			<P2 user={user.age} handleUser={handleChange} />
			<button onClick={updateUI}>update</button>
		</div>
	);
};

export default Parent;
