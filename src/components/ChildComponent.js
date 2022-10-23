import React from "react";

const ChildComponent = (props) => {
    
	const { userName ,parent} = props;
	return <div>ChildComponent of {userName} : Parent Data :{parent} </div>;
};

export default ChildComponent;
