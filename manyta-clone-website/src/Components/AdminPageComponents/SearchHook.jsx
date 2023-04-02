import React from "react";
export const useDebounce=(func,delay)=>{
let {current:id}=React.useRef();
    
return(a)=>{
    id && clearTimeout(id)
    id=setTimeout(()=>{
        func(a)
    },delay)
}

}