import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import { albumApiHandler } from "./testapi/api";
import { Link } from "react-router-dom";
const Test=()=>{

  const [userData,setUserData]=useState(null)
  let manageTestApi=async ()=>{
    let response=await albumApiHandler({url:'albums'})
    setUserData(response.data)
    
    return response;
  }
  useEffect(()=>{
    manageTestApi() 
  } 
  ,[])

    return(
        <>
        <h2>Albums</h2>
         {userData?(userData.map((item)=><div><Link to={item.id}>{item.title}</Link></div>)):(<div>Loader...</div>)}
        </>
    )
}

export default Test;