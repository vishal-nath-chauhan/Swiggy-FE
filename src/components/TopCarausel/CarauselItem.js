import React from 'react'
import food1 from '../../images/food1.jpg'
import "./Carausel.css"

const CarauselItem = () => {
  return (
    <div style={{ 
      backgroundImage: `url(${food1})`,
      backgroundSize:"cover" ,
      height:"260px",
      width:"230px",
      position:"relative",
      margin:"0 2em",
      padding:"0 0.5em"
    }}>
      <span style={{position:'absolute',
      top:'80%',left:'50%',
      transform: 'translate(-50%, -50%)',
      color:'white',
      fontSize:'20px',
      fontWeight:'bold'
    }}>Grab 50% off and free delivery</span></div>
  )
}

export default CarauselItem