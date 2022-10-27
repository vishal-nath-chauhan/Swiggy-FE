import { flexbox } from "@mui/system";
import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import DishesItem from "./DishesItem";
import { useNavigate } from "react-router-dom";

const DishesContainer = () => {
	const navigate = useNavigate();

	// const navigateToHome = () => navigate("/home");
	const logToBrowser =()=>{
		console.warn("browser logging");
	}
	const response = [1, 2, 4, 5, 6, 6, 7, 23, 6, 235, 2, 26, 26, 236, 26, 2362, 362, 36, 236, 26, 2, 6, 2];
// let emptyDivs =new Array(5)
	// logic 
	// return how many empty divs we need

	// export const customMediaQueries = {
	// 	mobile: '@media (min-width: 320px) and (max-width: 481px)',
	// 	tablet: '@media (min-width: 482px) and (max-width: 768px)',
	// 	smallLaptop: '@media (min-width: 769px) and (max-width: 1024px)',
	// 	laptop: '@media (min-width: 1025px) and (max-width: 1200px)',
	// 	largeScreen: '@media (min-width: 1200px)',
	// };

	// const findDevice =()=>{
	// 	const width = window.screen.width;
	// 	if(width<481) return 'mobile';
	// 	if(width>481 && width<768) return 'tablet';


	// }

	const filters = ["Relevence", "Delivery Time", "Rating", "Cost:Low To High", "Cost:High To Low", "Filters"];
	return (
		<>
			<Box className="parent" style={{ marginTop: "40px" }}>
				<Box className="parent-flex rest-flex">
					<div className="dish-flex-items1">
						<Typography style={{ fontSize: "25px" }}>793 Restaurants</Typography>
					</div>

					<div className="dish-flex-items2">
						{filters.map((filter) => (
							// <Typography onClick={logToBrowser()}>{filter}</Typography>
							<Typography onClick={logToBrowser}>{filter}</Typography> // Best way
							// <Typography onClick={()=>logToBrowser()}>{filter}</Typography> // Bad Way


						))}
						{emptyDivs.map(item=>
						
							)}
					</div>
					
				</Box>

{/* const onClick =(callback)=>{

logic =>

callback()

} */}

				<Box className="parent-flex dish-container">
					{response.map((item) => (
						<DishesItem data={item} />
					))}
				</Box>
			</Box>
		</>
	);
};

export default DishesContainer;
