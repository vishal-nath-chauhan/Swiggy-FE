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
    const{url}=data
    return axios.get(BASE_URL+url).then((response)=>{
        return response
    }).catch((error)=>{console.log(error)})
}



