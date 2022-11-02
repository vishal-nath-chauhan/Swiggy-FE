import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import DishesItem from "./DishesItem";
import { EmptyDivs } from "./EmptyDivs";
import { useFetcher, useNavigate } from "react-router-dom";
import { getApiHandler } from "../../utils/api/api";

const DishesContainer = () => {
	const navigate = useNavigate();
	const [userData, setUserData] = useState(null);

	const [test, setTest] = useState(123);

	const increaseBy1 = () => setTest(test + 1);
	const decreaseBy1 = () => setTest(test - 1);

	useEffect(() => {
		console.log("########### TEST $$$$$$$$$$$$$$$$$$$ ", test);
	}, [test]);


	const manageApi = async () => {
		let response = await getApiHandler({ url: "posts" });
		setUserData(response);
		return response;
	};

	useEffect(() => {
		manageApi();
		return () => {
			console.log("CLOSED ");
		};
	}, []);

	const navigateToHome = () => navigate("/home");
	const logToBrowser = () => {
		console.warn("browser logging");
	};
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
						<Typography onClick={navigateToHome} style={{ fontSize: "25px" }}>
							793 Restaurants
						</Typography>
						<button onClick={increaseBy1}>increase</button>
						<button onClick={decreaseBy1}>decrease</button>
					</div>

					<div className="dish-flex-items2">
						{filters.map((filter) => (
							// <Typography onClick={logToBrowser()}>{filter}</Typography>
							<Typography onClick={logToBrowser}>{filter}</Typography> // Best way
							// <Typography onClick={()=>logToBrowser()}>{filter}</Typography> // Bad Way
						))}
					</div>
				</Box>

				{/* const onClick =(callback)=>{

logic =>

callback()

} */}           <Box className="parent-flex dish-container">
	              <DishesItem/>
				  <DishesItem/>
				  <DishesItem/>
				  <DishesItem/>
				  <DishesItem/>
				  <DishesItem/>
				  <DishesItem/>
				  <DishesItem/>
				  <DishesItem/>
				  <DishesItem/>
				  <EmptyDivs/>
				  <EmptyDivs/>
                  </Box>
                
				
				{/*userData ? (
					<Box className="parent-flex dish-container">{userData && userData.map((item) => <DishesItem item={item} />)}</Box>
				) : (
					<Box className="parent-flex dish-container">Loader</Box>
				)*/}
			</Box>
		</>
	);
};

export default DishesContainer;
