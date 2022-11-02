import react from "react"
import { photoApiHandler } from "./testapi/api"
import {useState,useEffect} from "react"

export const Photos=()=>{
  
const [userPhotos,setUserPhotos]=useState(null) 
let managePhotoApi=async ()=>{
  let response=await photoApiHandler({url:"photos"})
  setUserPhotos(response.data)
  console.log(response.data)  
 }

 useEffect(
  ()=>{
    managePhotoApi()
  }
 ,[])

  return(
    <>
   <h2>User Photos</h2>
   {userPhotos?(<div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
    {userPhotos.filter((item)=>item.albumId==1).map((item)=><img src={item.thumbnailUrl}/>)}
   </div>):(<div>Loader...</div>)}
   </>
  )
}