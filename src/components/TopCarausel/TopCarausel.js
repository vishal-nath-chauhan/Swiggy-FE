import { flexbox } from "@mui/system";
import React from "react";
import CarauselItem from "../TopCarausel/CarauselItem"
import "./Carausel.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const TopCarausel = () => {
	return (
		
            <Carousel responsive={responsive} className="parent-flex top-carausel">			
			<CarauselItem />
			<CarauselItem />
			<CarauselItem />
			<CarauselItem />
			<CarauselItem />
			<CarauselItem /> 
			</Carousel>	 
			
		
	);
};

export default TopCarausel;
