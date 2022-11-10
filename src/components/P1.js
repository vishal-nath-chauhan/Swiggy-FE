import React from "react";


const P1 = (props) => {
	const { user, handleUser,userRef } = props;
	console.log("P1 rendered");

	return (
		<div ref={userRef} >
			P1
			<input id='name' onChange={handleUser} value={user} placeholder="enter name" />
		</div>
	);
};

export default React.memo(P1);
