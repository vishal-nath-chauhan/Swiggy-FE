import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import "./Home.css";
import TopCarausel from "../TopCarausel/TopCarausel";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { faPercent } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DishesContainer from "../Dishes/DishesContainer";
import Footer from "../Footer/Footer";


const Home = () => {
	const logo = "https://logosandtypes.com/wp-content/uploads/2021/01/Swiggy.png";

	const headerConfig = [
		{
			title: "Search",
			icon: faSearch,
		},
	];
	return (
		<>
			<Box className="parent">
				<Box className="parent-flex">
					<div className="flex-items1">
						<img alt="logo" className="logo" src={logo} />
						<Typography>Address</Typography>
					</div>
					<div className="flex-items2"></div>
					<div className="flex-items3">
						{/* {headerConfig.map((headerItem) => (
							<Typography>
								<FontAwesomeIcon className="font-awesome" icon={headerItem.icon} />
								{headerItem.title}
							</Typography>
						))} */}
						<Typography ><FontAwesomeIcon className="font-awesome" icon={faSearch} />Search</Typography>
				<Typography ><FontAwesomeIcon className="font-awesome" icon={faPercent} />Offer</Typography>
				<Typography ><FontAwesomeIcon className="font-awesome" icon={faBullseye} />Help</Typography>
				<Typography ><FontAwesomeIcon className="font-awesome" icon={faUser} />SignIn</Typography>
				<Typography ><FontAwesomeIcon className="font-awesome" icon={faShoppingCart} />Cart</Typography>
					</div>
				</Box>
			</Box>
			<TopCarausel />
			<DishesContainer />
			<Footer />
		</>
	);
};

export default Home;
