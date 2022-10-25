import { flexbox } from "@mui/system";
import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import DishesItem from "./DishesItem";


const DishesContainer=()=>{
    return (
        <>
        <Box className="parent" style={{marginTop:"40px"}}>
			<Box className="parent-flex rest-flex">
				<div className="dish-flex-items1" >				
				<Typography style={{fontSize:'25px'}}>793 Restaurants</Typography>
				</div>
				
				<div className="dish-flex-items2">
				<Typography >Relevence</Typography>
				<Typography >Delivery Time</Typography>
				<Typography >Rating</Typography>
				<Typography >Cost:Low To High</Typography>
				<Typography >Cost:High To Low</Typography>
                <Typography >Filters</Typography>                
				</div>
                
			</Box>
            <Box className="parent-flex dish-container">           
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
            <DishesItem/>
            <DishesItem/>
            <DishesItem/>
            <DishesItem/>
            <DishesItem/>
            <DishesItem/>
            </Box>
            </Box>
        </>
    );
};

export default DishesContainer;
