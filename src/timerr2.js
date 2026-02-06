import { useEffect, useState } from "react"

export default function Timerr(){
 const [count,setCount]=useState(0);
 const[running,setRunning]=useState(false);
 useEffect(()=>{
     let interval;
 if(running){
   
    interval=setInterval(()=>{
        setCount(count=>count+1);
    },1000);
 }
 return ()=>clearInterval(interval);
 },[running])
 const startTimer=()=>{
    setRunning(true);
 };



     return (
        <>
        <div         onMouseEnter={()=> setRunning(false)}
          onMouseLeave={()=> setRunning(true)}>
        Count:{count}
        <button onClick={startTimer}>Start</button>
        
          </div>


        </>
     );
}