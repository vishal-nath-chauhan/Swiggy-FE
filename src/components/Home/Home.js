import React from "react";
import "./Home.css";
import TopCarausel from "../TopCarausel/TopCarausel";
import TopMenu from "../Menus/TopMenu";
import DishesContainer from "../Dishes/DishesContainer";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";


const Home = () => {

	const state = useSelector(state =>state)
	console.log({state});


// TODO:
// 1. call apis
// 2. cleanup redux





	/*const headerConfig = [
		{
			title: "Search",
			icon: faSearch,
		},
	];*/
	return (
		<>
		   <TopMenu/>
			<TopCarausel />
			<DishesContainer />
			<Footer />
		</>
	);
};

export default Home;
