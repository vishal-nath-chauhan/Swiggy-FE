import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import "./Home.css";
import TopCarausel from "../TopCarausel/TopCarausel";

const Home = () => {
	const logo = "https://logosandtypes.com/wp-content/uploads/2021/01/Swiggy.png";
	return (
		<Box className="parent">
			<Box className="parent-flex">
				<img alt="logo" className="logo" src={logo} />
				<Typography>Address</Typography>
				<Typography>Search</Typography>
				<Typography>Offer</Typography>
				<Typography>Help</Typography>
				<Typography>SignIn</Typography>
				<Typography>Cart</Typography>
			</Box>
			<TopCarausel/>
		</Box>
	);
};

export default Home;
