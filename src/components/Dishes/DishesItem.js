import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import food2 from "../../images/food3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const DishesItem=(props)=>{
  const  {isEmpty}=props
  return (
    <Card sx={{ maxWidth: 265 }} style={{marginBottom:"15px"}}>
      <CardMedia
        component="img"
        height="120"
        image={food2}
        alt="food2"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {isEmpty ? "": "The Bowl Singh"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          North Indian Snacks
        </Typography>
       
        <Typography variant="body2" color="text.secondary"> 
          <ul
           style={{listStyle:"none",display:"flex",justifyContent:'space-between',paddingLeft:0}}
          >
            <li style={{backgroundColor:"green",color:'white',padding:"1px"}}><FontAwesomeIcon  icon={faStar} />&nbsp;4.4</li>
            <li>37 Mins</li>
            <li>Rs.299 for two</li>
          </ul>
        </Typography>
      </CardContent>
      
    </Card>
  );   
}

export default DishesItem;