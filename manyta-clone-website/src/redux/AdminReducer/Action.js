import axios from "axios";
import { deletedatasuccess, updatedatasuccess,adddatasuccess,datasinglesuccess,datasuccess,failure,request,loginsuccess} from "./ActionTypes";

export const actionrequest=()=>{
    return{type:request}
}
export const actionloginsuccess=(payload)=>{
    return{type:loginsuccess,payload}
}
export const actiondatasuccess=(payload,payload1)=>{
    return{type:datasuccess,payload,payload1}
} 
export const actiondatasinglesuccess=(payload)=>{
    return{type:datasinglesuccess,payload}
} 
export const actiondeletesuccess=()=>{
    return{type:deletedatasuccess}
}
export const actionadddatasuccess=()=>{
    return{type:adddatasuccess}
}
export const actionupdatedatasuccess=()=>{
    return{type:updatedatasuccess}
}
export const actionfailure=()=>{
    return{type:failure}
}

// api calls
export const getlogin=(obj)=>(dispatch)=>{
    dispatch(actionrequest())
return axios.post(`https://reqres.in/api/login`,obj)
.then((res)=>dispatch(actionloginsuccess(res.data.token)))
.catch((er)=>dispatch(actionfailure()))
}

export const getdata=(obj)=>(dispatch)=>{
    console.log(obj)
    dispatch(actionrequest())
return axios.get(`https://manyta-clone-of-myntra.cyclic.app/products?_limit=60`,{params:obj})
.then((res)=>dispatch(actiondatasuccess(res.data,res.headers["x-total-count"])))
.catch((er)=>dispatch(actionfailure()))
}

export const getdataone=(id)=>(dispatch)=>{
    console.log(id);
    // dispatch(actionrequest())
return axios.get(`https://manyta-clone-of-myntra.cyclic.app/products/${id}`)
.then((res)=>dispatch(actiondatasinglesuccess(res.data)))
.catch((er)=>dispatch(actionfailure()))
}


export const adddata=(obj)=>(dispatch)=>{
    dispatch(actionrequest())
return axios.post(`https://manyta-clone-of-myntra.cyclic.app/products`,obj)
.then((res)=>dispatch(actionadddatasuccess()))
.catch((er)=>dispatch(actionfailure()))
}

export const deletedata=(id)=>(dispatch)=>{
    dispatch(actionrequest())
return axios.delete(`https://manyta-clone-of-myntra.cyclic.app/products/${id}`)
.then((res)=>dispatch(actiondeletesuccess()))
.catch((er)=>dispatch(actionfailure()))
}

export const updatedata=(id,obj)=>(dispatch)=>{
    console.log(id,obj);
    dispatch(actionrequest())
return axios.patch(`https://manyta-clone-of-myntra.cyclic.app/products/${id}`,obj)
.then((res)=>dispatch(actionupdatedatasuccess()))
.catch((er)=>dispatch(actionfailure()))
}









































// api calls