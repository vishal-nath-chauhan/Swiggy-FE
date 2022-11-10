import React from "react";
import foodimage1 from "../../images/food6.jpg";
const CartDishes = () => {

	return (
		<div
			style={{
				width: "100%",

				padding: "0 20px",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					justifyContent: "space-between",
					gap: "20px",
					padding: "0 55px",
				}}
			>
				<div></div>
				<div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
					<div style={{ display: "flex", flex: 3, gap: "12px", flexDirection: "column" }}>
						<div>Icon</div>
						<div style={{ color: "#3e4152", fontWeight: "bold" }}>
							Hyderabadi Chicken Dum Biryani Boneless
							<br />
							<span style={{ fontSize: "14px" }}>Rs.339</span>
						</div>
						{/*<div>Rs.339</div>*/}
						<div style={{ fontSize: "12px", color: "grey" }}>Hyderabadi Chicken Biryani with boneless chicken pieces and served with Raita</div>
					</div>
					<div style={{ flex: 1 }}>
						<img src={foodimage1} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
					</div>
				</div>
				<div style={{ width: "100%", height: "1px", backgroundColor: "darkgray" }}></div>
			</div>
		</div>
	);
};
export default CartDishes;



// user => add =>ls
//  date select =>user list =>radio => submit
//  date => -10 days =>  user list =>radio => 
// date => future => not possible


// schoollog 


