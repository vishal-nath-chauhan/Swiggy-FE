import react, { useRef } from "react"
import { useState, useEffect } from "react"
import { formApiHandler } from "./testapi/api"
import { getPostData } from "./testapi/api"
import { updateApiHandler } from "./testapi/api"
import axios from "axios"
import BasicModal from "./BasicModal"
import edit from "../../images/edit.jpg"
import del from "../../images/delete.jpg"

const Formdata = () => {
    const uref = useRef();
    const [open, setOpen] = useState(false);
    const [data, setData] = useState()
    const [updatedData, setUpdatedData] = useState()
    const [postData, setPostData] = useState({})
    const [postsData, setPostsData] = useState(null)
    const [id, setId] = useState(null)
    const handleChange1 = (e) => {
        const id = e.target.id
        let value = '';
        if (id === "id" || id === "userId") {
            value = +e.target.value
        } else {
            value = e.target.value
        }
        setUpdatedData({ ...updatedData, [id]: value })
    }
    const handleDelete=async (id)=>{
        // let localStorageData = localStorage.getItem('localPostData') || null
        // if (localStorageData) {
        //     let localsStoragePosts = JSON.parse(localStorageData)

        // }else{
            fetch('https://jsonplaceholder.typicode.com/posts/'+id, {
               method: 'DELETE',
                }).then((response)=>console.log(response));
        }          
    // }

    
    const handleUpdate = async (id) => {
        let localStorageData = localStorage.getItem('localPostData') || null
        if (localStorageData) {
            let localsStoragePosts = JSON.parse(localStorageData)
            localsStoragePosts.forEach((element, index, theArray) => {
                if (id === element.id) {
                    theArray[index] = { ...element, ...updatedData }
                }
            })
            setPostsData(localsStoragePosts);
            localStorage.setItem('localPostData', JSON.stringify(localsStoragePosts))
            setUpdatedData({})
            setOpen(false)
        } else {
            axios({
                method: 'patch',
                url: 'https://jsonplaceholder.typicode.com/posts/' + id,
                data: updatedData
            }).then((response) => {
                console.log(response.data)
                postsData.forEach((element, index, theArray) => {
                    if (element.id === id)
                        //alert("hello"+id);
                        theArray[index] = response.data
                    //console.log("element-----",element,"response.data-----",response.data)                    
                });
                console.log({ postsData })
                setPostsData(postsData);
                localStorage.setItem('localPostData', JSON.stringify(postsData))
                setUpdatedData({})
            }

            ).catch((error) => console.log(error))
        }
        setOpen(false)
    }
    const handleOpen = (id) => {
        let localStorageData = localStorage.getItem('localPostData') || null
        if (localStorageData) {
            let localsStoragePosts = JSON.parse(localStorageData)
            localsStoragePosts.forEach((item) => {
                if (id === item.id) {
                    setData(item)
                }
            })

        } else {
            axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then((response) => { setData(response.data) })

        }
        setOpen(true)
    }
    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        console.log(postData)
        const id = e.target.id
        let value = '';
        if (id === "id" || id === "userId") {
            value = +e.target.value
        } else {
            value = e.target.value
        }
        setPostData({ ...postData, [id]: value })
        if (id === "id") {
            setId(value)
        }
    }
    const managePostApi = async () => {
        let localStorageData = localStorage.getItem('localPostData') || null
        if (localStorageData) {
            let localsStoragePosts = JSON.parse(localStorageData)
            setPostsData(localsStoragePosts)
        } else {
            let response = await getPostData({ url: 'posts' })
            setPostsData(response.data);
            console.log(response.data)

        }



    }
    useEffect(() => {
        managePostApi();
    },
        [])



    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await formApiHandler({ url: 'posts' }, postData);
        console.log({ response })
        let tempPostsData = [...postsData, postData]
        localStorage.setItem('localPostData', JSON.stringify(tempPostsData))
        //let finalPostsData=JSON.parse(localStorage.getItem('localPostData'))
        setPostsData(tempPostsData)
        console.log(tempPostsData)
    }


    return (
        <>
            <form name="frm" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem", alignItems: "center" }}>
                <input type="text" onChange={handleChange} id="userId" name="userId" placeholder="User ID" />
                <input type="text" onChange={handleChange} id="id" name="id" placeholder="Id" />
                <input type="text" onChange={handleChange} id="title" name="title" placeholder="title" />
                <input type="text" onChange={handleChange} id="body" name="body" placeholder="body" />
                <input type="submit" value="Submit" />
            </form>
            <table width="70%" style={{ margin: 'auto' }}>
                <tr>
                    <th>UserId</th><th>Id</th><th>Title</th><th>Body</th><th>Action</th>
                </tr>
                {postsData ? postsData.map((item) => {
                    return <tr>{item.userId}<td>{item.id}</td><td>{item.title}</td><td>{item.body}</td>
                        <td style={{ display: 'flex' }}>
                            <img src={edit} style={{ height: '2rem', cursor: 'pointer' }} alt="edit" ref={uref} id={item.id} onClick={() => handleOpen(item.id)} />
                            <img src={del} alt="delete" onClick={() => handleDelete(item.id)} style={{ height: '2rem', cursor: 'pointer' }} /></td>

                    </tr>
                }) :
                    <div>Loader...</div>}
            </table>
            <BasicModal
                handleOpen={handleOpen}
                open={open}
                data={data}
                handleClose={handleClose}
                handleChange={handleChange1}
                handleUpdate={handleUpdate}
            />
        </>
    )
}

export default Formdata;