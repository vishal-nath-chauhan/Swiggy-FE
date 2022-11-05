import React, { useCallback, useState } from "react";
import P1 from "./P1";
import P2 from "./P2";

const Parent = () => {
	const [user, setUser] = useState({age:234,name:"v"});

	const handleChange = useCallback((e) => {
        setUser({age:234,name:"v"})
	},[user])
    
	return (
		<div>
			Parent
			<P1 user={user.name} handleUser={handleChange} />
			<P2 user={user.age} handleUser={handleChange} />
		</div>
	);
};

export default Parent;
