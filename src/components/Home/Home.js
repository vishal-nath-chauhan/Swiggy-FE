import React from "react";
import "./Home.css";
import TopCarausel from "../TopCarausel/TopCarausel";
import TopMenu from "../Menus/TopMenu";
import DishesContainer from "../Dishes/DishesContainer";
import Footer from "../Footer/Footer";


const Home = () => {
	

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
