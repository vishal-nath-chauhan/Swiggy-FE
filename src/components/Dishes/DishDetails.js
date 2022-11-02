import React from "react";
import "../Home/Home.css";
import "../Dishes/DishesContainer.css"
import "../Menus/TopMenu";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import TopMenu from "../Menus/TopMenu";
import AddToCartDishes from "./AddToCartDishes";
import foodimage from "../../images/food7.jpeg"

const DishDetails=()=>{

  return (
    <>
  <TopMenu/>
    <Box className="parent" style={{backgroundColor:"#d4d5d9"}}>
	 <Box className="parent-flex" >
       
      <div className="dish-band">
      <div className="dish-band0" ></div>
        <div className="dish-band1" >
        <span>Home / </span>
        <span>Noida / </span>
        <span>Sector-102 / </span>
        <span>SOYA CHAAP SANJAY BHAYYA KA SPECIAL</span>
        </div>
        <div className="dish-band2"></div>
     </div>
     
     </Box>

    </Box>
    <Box className="parent" style={{backgroundColor:"#282c3f"}}>
	 <Box className="parent-flex" >
        <div  className="header-flex">
         <div className="header-column1">
            <img src={foodimage} className="food-image"/>
          </div>
            <div className="header-column2" >
              <p className="header-column2-p1">Rolls & Bowls Company</p>
              <p className="header-column2-p2">Indian, North Indian</p>
              <p className="header-column2-p3">Sector- 110, Noida Expressway | Change Outlet </p>
            <div className="header-column2-content4">
                <span>
                  <p className="header-column2-content4-span-p1">* 4.5</p>
                  <p className="header-column2-content4-span-p2">20+ Rating</p>
                </span>
                <span>
                <p className="header-column2-content4-span-p1">27 mins</p>
                  <p className="header-column2-content4-span-p2">Delivery Time</p>
                </span>
                <span>
                <p className="header-column2-content4-span-p1">Rs.250</p>
                  <p className="header-column2-content4-span-p2">Cost for Two</p>
                </span>
                <div className="searchbar-container">
            <div className="searchbar-container-search" ><input type="text" placeholder="Search" style={{border:"none",outline:"none"}}/></div>
            <div className="searchbar-container-filter" ><input type="checkbox"/>Veg only</div>
            <div className="searchbar-container-favourite"><span className="icon-heartInverse">Favourite</span></div>            
          </div>
                </div>  
            </div>
          <div className="header-column3">
            <div className="header-column3-flex">
            <p className="header-column3-p">50% off up to ₹100 + Flat ₹30 cashback with Paytm | Use</p>
            <p className="header-column3-p">Flat ₹150 off on orders above ₹599 | Use code FLAT150</p>
            </div>
          </div>
          
        </div>
     </Box>
     </Box>
     <Box className="parent">
	 <Box className="parent-flex" >
    <section className="middle-section">
      <div className="middle-section-column1" >
        <div>
        <ul class="middle-section-column1-list">
          <li>Recommended</li>
          <li>Chef's Special</li>
          <li>Signature Jumbo Roles(Wraps)</li>
          <li>Starters</li>
          <li>Chinese Bowls</li>
          <li>Indian Bowls</li>
        </ul>
        </div>
      {/*<div style={{height:'auto',width:'1px',backgroundColor:"grey",marginLeft:"20px"}}></div>*/}
      </div>
      
      <div className="middle-section-column2">
      <div style={{color:"#3e4152",padding:"0 55px",fontWeight:"bold",marginRight:"400px"}}>Recommended</div>
            <div style={{color:"#3e4152",padding:"0 55px",fontSize:"14px",marginRight:"460px"}}>7 ITEMS</div>
      <AddToCartDishes/>
      <AddToCartDishes/>
      <AddToCartDishes/>
      <AddToCartDishes/>
      <AddToCartDishes/>
      </div>
      
      <div style={{flex:"1 0 25%",display:"flex",gap:"10px",flexDirection:"column"}}>

        <div>
          <h1 style={{margin:0}}>Cart</h1>
          
          <span style={{fontSize:"12px",color:"#686B78",fontWeight:"bold"}}>3 ITEMS</span>
        </div>
        <div style={{display:"flex",flexDirection:'column',height:"100px",overflowY:"scroll",gap:"5px"}}>
        <div style={{fontSize:"12px",fontWeight:"bold"}}>
          Welcome on ellglble items<br/>
          <span style={{fontSize:"10px"}}>You just saved ₹99 on these items!</span>
        </div>
        <div style={{display:"flex",width:"80%", justifyContent:'space-between'}}>
            <div  className="food-icon1"></div>
            <div style={{fontSize:'12px',width:'87.47px',textAlign:"center"}}>Hyderabadi Mutton Dum Biryani (Boneless)</div>
            
            <div>
              <div style={{width:"100%",height:"25px",border:"1px solid grey"}}>
                <span>+</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>1</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>-</span>
                </div>
            </div>
            <div>Rs.250</div>
        </div>
        <div style={{display:"flex",width:"80%",justifyContent:'space-between'}}>
        <div className="food-icon1" ></div>
            <div style={{fontSize:'12px',width:'87.47px',textAlign:"center"}}>Hyderabadi Mutton Dum Biryani (Boneless)</div>
            
            <div>
              <div style={{width:"100%",height:"25px",border:"1px solid grey"}}>
                <span>+</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>1</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>-</span>
                </div>
            </div>
            <div>Rs.250</div>
        </div>
        <div style={{display:"flex",width:"80%",justifyContent:'space-between'}}>
        <div className="food-icon1" ></div>
            <div style={{fontSize:'12px',width:'87.47px',textAlign:"center"}}>Hyderabadi Mutton Dum Biryani (Boneless)</div>
            
            <div>
              <div style={{width:"100%",height:"25px",border:"1px solid grey"}}>
                <span>+</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>1</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>-</span>
                </div>
            </div>
            <div>Rs.250</div>
        </div>
        <div style={{display:"flex",width:"80%",justifyContent:'space-between'}}>
        <div className="food-icon1" ></div>
            <div style={{fontSize:'12px',width:'87.47px',textAlign:"center"}}>Hyderabadi Mutton Dum Biryani (Boneless)</div>
            
            <div>
              <div style={{width:"100%",height:"25px",border:"1px solid grey"}}>
                <span>+</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>1</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>-</span>
                </div>
            </div>
            <div>Rs.250</div>
        </div>
        </div>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <div style={{fontWeight:"bold"}}>
          Subtotal<br/>
          <span style={{color:"darkgrey",fontSize:"12px",fontWeight:"bold"}}>Extra Charges may apply</span>
          </div>
          <div style={{paddingRight:"50px"}}>
            Rs.1257
          </div>
          </div>
        <div><button style={{backgroundColor:"#60b246",border:"none",padding:"15px 20px",outline:"none",width:"80%",color:'white',fontWeight:"bold"}}>CHECKOUT</button></div>
      </div>
     
    </section>
   </Box>
   </Box>
    </>
  )
}

export default DishDetails;
