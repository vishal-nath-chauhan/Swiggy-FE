import axios from "axios"
import { result } from "lodash"

const BASE_URL="https://jsonplaceholder.typicode.com/"

export const albumApiHandler=(data)=>{
    const{url}=data
    return axios.get(BASE_URL+url).then((response)=>{
        return response
    }).catch((error)=>{console.log(error)})
}

export const photoApiHandler=(data)=>{
    const{url,params}=data
    return axios.get(BASE_URL+url,{params}).then((response)=>{
        return response
    }).catch((error)=>{console.log(error)})
}

export const formApiHandler=(data,formdata)=>{
    const {url}=data
    axios.post(BASE_URL+url, formdata)
      .then(function (response) {
        console.log("form ",response)
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
}

// export const updateApiHandler=(data)=>{
//     const {url}=data
//     axios({
//       method: 'patch',
//       url: BASE_URL+url,
//       data: {
//         title:'foo'
//       }
//     }).then((response)=> {return response}).catch((error)=>console.log(error))
//   }

    //axios.patch(BASE_URL+url,{title:"changed title"}).then((response)=>{
        //console.log(response.data)
      //return response.data;
    //}).catch((error)=>{console.log(error)})


export const getPostData=(data)=>{
    const{url}=data
    return axios.get(BASE_URL+url).then((response)=>{
    return response    
}).catch((error)=>{console.log(error)})
}

