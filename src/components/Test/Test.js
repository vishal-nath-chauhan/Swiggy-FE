import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import { albumApiHandler } from "./testapi/api";
import { Link, useNavigate } from "react-router-dom";
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
  

  const navigate = useNavigate()

  const handleRedirection =() => navigate('/test')

  // localhist:2000/test/orderId=9w3ytw3tw

    return(
        <>
        <h2>Albums</h2>
         {userData?(userData.map((item)=><div><Link to={`/photos/${item.id}`}>{item.title}</Link></div>)):(<div>Loader...</div>)}
        </>
    )
}


// 1. create component => photo 
// 2. route => /photo?photoId = 2362362
// 3. photo component => url => parameters => read => useEffect => api => photo get 
// 4 show that photo


export default Test;