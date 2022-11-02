import react, { useEffect, useState } from "react"
import axios from "axios"



const TestPost=()=>{
   const [post,setPost]=useState(null)
    useEffect(
        ()=>{
           axios.get("https://jsonplaceholder.typicode.com/posts/1").
           then((response)=>{
            console.log(response.data)
            setPost(response.data)
           })
        }
        ,
    [])

      const [title,setTitle]=useState("")
      const [body,setBody]=useState("")
      let handleSubmit=(e)=>{  
       e.preventDefault()
       axios
          .post("https://jsonplaceholder.typicode.com/posts/", {
            title: title,
            body: body
          })
          .then((response) => {
            console.log(response)
            setPost(response.data);
          });   
      }
      if (!post) return "No post!"
    
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={title} onChange={e=>setTitle(e.target.value)}/>
            <input type="text" name="body" value={body} onChange={e=>setBody(e.target.value)}/>
            <input type="submit" name="submit" value="submit"/>
        </form>
        
        </>
    )
}

export default TestPost