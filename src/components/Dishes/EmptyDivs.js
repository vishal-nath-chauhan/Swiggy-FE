import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import food2 from "../../images/food3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import _ from "lodash";

const EmptyDivs = (props) => {
	const { isEmpty, item } = props;

	//const title = _.get(item, "title", "---");

  /*const dataConfig ={
    title:_.get(item, "title", "---"),
    price:_.get(item, "price", "---"),
  }*/
  

	return (
		<Card sx={{ maxWidth: 265 }} style={{ marginBottom: "15px" }}>
			<CardMedia  height="120" image={food2} alt="food2" />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
				
				</Typography>
				<Typography variant="body2" color="text.secondary">
					
				</Typography>

				<Typography variant="body2" color="text.secondary">
					
				</Typography>
			</CardContent>
		</Card>
	);
};

export {EmptyDivs};
