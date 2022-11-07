import react from "react"
import { photoApiHandler } from "./testapi/api"
import {useState,useEffect} from "react"
import { useParams } from "react-router-dom"

export const Photos=(props)=>{
const {albumId}=useParams()
const [userPhotos,setUserPhotos]=useState(null)
console.log(albumId) 
let managePhotoApi=async ()=>{
  let response=await photoApiHandler({url:"photos/"})
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
    {userPhotos.filter((item)=>item.albumId==albumId).map((item)=><img src={item.thumbnailUrl}/>)}
   </div>):(<div>Loader...</div>)}
   </>
  )
}