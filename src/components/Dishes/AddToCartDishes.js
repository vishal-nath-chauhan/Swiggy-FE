import React from "react"
import foodimage1 from "../../images/food6.jpg"
const AddToCartDishes=()=>{

    return(
        <div style={{width:"100%",
          
          padding:"0 20px"
}} >
    
        <div style={{
          display:"flex",
          flexDirection:"column",
          alignItems:"flex-start",
          justifyContent:"space-between",
          gap:"20px",
          padding:"0 55px"
                  }}>
           <div >
            
           </div>
           <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <div style={{display:"flex",flex:3,gap:"10px",flexDirection:"column"}}>
                <div className="food-icon" ></div>
                <div style={{color:"#3e4152",fontWeight:"bold"}}>Hyderabadi Chicken Dum Biryani Boneless<br/><span style={{fontSize:"14px"}}>Rs.339</span></div>
                {/*<div>Rs.339</div>*/}
        <div style={{fontSize:"12px",color:"grey"}}>Hyderabadi Chicken Biryani with boneless chicken pieces and served with Raita</div>
              </div>
              <div style={{flex:1,position:"relative"}}><img src={foodimage1} style={{width:"100%",height:"100%",objectFit:'cover'}}/><button style={{
                position:'absolute',
                top:"80%",left:'50%',
                transform:'translate(-50%,-50%)',
                backgroundColor:'white',
                border:"none",
                outline:"none",
                color:'#60b246',
                fontWeight:'bold',
                padding:"8px 20px"
                }}>ADD +</button></div>
            </div> 
           <div style={{width:"100%",height:"1px",backgroundColor:"darkgray"}}></div>
           
 
        </div>
      </div>
    )
    }
    export default AddToCartDishes;
