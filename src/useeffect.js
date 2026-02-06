import { useEffect, useState } from "react";

export default function Useeffect(){
    const [count,setCount]=useState(0);
useEffect(()=>{
    
    console.log("Hello")
},[count]);
let onbtnClick=()=>{
  setCount(count+1);
}

    return (
        <>
        <button onClick={onbtnClick}>Click-{count}</button>

        </>
    )
}