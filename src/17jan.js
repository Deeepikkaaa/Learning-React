import { useState } from "react";
export default function Practice(){
    const [iniclick,setClick]=useState(0);

    function clickHandle(){
        setClick(iniclick+1);
    }
    return (
        <button onClick={clickHandle}>
            Clicked {iniclick} times
        </button>
    );
}