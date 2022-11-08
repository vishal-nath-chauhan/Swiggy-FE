import react from "react"
import { photoApiHandler } from "./testapi/api"
import {useState,useEffect} from "react"
import { useParams } from "react-router-dom"

export const Photos=(props)=>{
const {albumId}=useParams()
const [userPhotos,setUserPhotos]=useState(null)
console.log(albumId) 
let managePhotoApi=async ()=>{
  let response=await photoApiHandler({url:"photos/",params:{albumId}})
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
   {userPhotos && userPhotos.length?(<div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
    {userPhotos.map((item)=><img src={item.thumbnailUrl}/>)}
   </div>):(<div>Loader...</div>)}
   </>
  )
}