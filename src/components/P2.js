import React from "react";

const P2 = (props) => {
	const { user, handleUser } = props;
	console.log("P2 rendered");


	return (
		<div>
			P2
			<input id='age' onChange={handleUser} value={user} placeholder="enter age" />
		</div>
	);
};

export default React.memo(P2);
