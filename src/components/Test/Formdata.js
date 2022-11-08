import react from "react"
import { useState, useEffect } from "react"
import { formApiHandler } from "./testapi/api"
import { getPostData } from "./testapi/api"
const Formdata = () => {
    const [postData, setPostData] = useState({})
    const [postsData,setPostsData]=useState({})
    const [id,setId]=useState(null)
    const handleChange = (e) => {
        console.log(postData)
        const id = e.target.id
        const value = e.target.value
        setPostData({...postData, [id]: value})
        if(id==="id"){
            setId(value)
        }
    }
    const managePostApi = async () => {
        let response = await getPostData({ url: 'posts' })
        setPostsData(response.data);
        console.log(response.data)

    }
    useEffect(() => {
        managePostApi();
    },
        [])
      


    const handleSubmit = (e) => {
        e.preventDefault()
        formApiHandler({ url: 'posts' }, postData);
        setPostsData({...postsData,[id]:postData})
        console.log(postsData)
    }


    return (
        <>
            <form name="frm" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem", alignItems: "center" }}>
                <input type="text" onChange={handleChange} id="userid" name="userId" placeholder="User ID" />
                <input type="text" onChange={handleChange} id="id" name="id" placeholder="Id" />
                <input type="text" onChange={handleChange} id="title" name="title" placeholder="title" />
                <input type="text" onChange={handleChange} id="body" name="body" placeholder="body" />
                <input type="submit" value="Submit" />
            </form>
            {/*<table>
                <tr>
                    <th>UserId</th><th>Id</th><th>Title</th><th>Body</th>
                </tr>
                {postData?postData.map((item)=>{
                  return <tr>{item.userId}<td>{item.id}</td><td>{item.title}</td><td>{item.body}</td></tr>}):
                  <div>Loader...</div>}
                </table>*/}
        </>
    )
}
export default Formdata;