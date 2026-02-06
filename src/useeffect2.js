import { useEffect, useState } from "react"

export default function Useeeff(){
    const[count,setCount]= useState(0);
const OnClickchange=()=>{
setCount(count=>count+1);
}

    useEffect(()=>{
console.log("Hello")
document.title=`You clicked ${count} times`;

    },[count]);


     return (
        <>
        <button onClick={OnClickchange}>Click Me {count}</button>
        </>
     )
}