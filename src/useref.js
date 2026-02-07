import { useRef, useState } from "react";
export default function StopWatch(){
const [count,setCount]=useState(0);
let timeRef=useRef(null);

 const onStartClick=()=>{
   timeRef.current= setInterval(()=>{setCount(count=>count+1);},1000);
}
const onStopClick=()=>{
    clearInterval(timeRef.current);
   // timeRef.current=null;

}
const onResetClick=()=>{
    clearInterval(timeRef.current);
    setCount(0);
}
    return(<>
   Count:{count}
            <button  onClick={onStartClick}>Start</button>
        <button onClick={onStopClick}>Stop</button>
        <button onClick={onResetClick}>Reset</button>
    </>


    )
}