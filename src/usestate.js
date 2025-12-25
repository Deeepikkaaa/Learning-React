import { useState } from 'react';
export default function Counter(){
    const [count,setCount]=useState(0);
     const onIncrementClick=()=>{
        setCount(count+1)
     }
     const onDecrementClick=()=>{
        setCount(count-1)

     }
     const onReset=()=>{

        setCount(0)
     }

return(
    <>
    <h1>Count:{count}</h1>
    <button onClick={onIncrementClick}>Increase</button>
    <button onClick={onDecrementClick}>Decrease</button>
    <button onClick={onReset}>Reset</button>
    </>
);
}