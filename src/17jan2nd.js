import { useState } from "react";
//Managing form input using react usestate

function Formm(){
    const[name,setName]=useState("");
     const[age,setAge]=useState("");
     const [submitted,setSubmitted]=useState(false);

     const handleSubmit=()=>{
        setSubmitted(true);
     }
    return (
        <div>
           <label>Name</label> <input type="text" value={name} onChange={(e)=>setName(e.target.value)} 
            placeholder="Enter your name"
            />

            <label>Age</label>            <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} 
            placeholder="Enter your age"
            />

            <button onClick={handleSubmit}>Submit</button>

{submitted && <p>Form Submitted!</p>}
            
        </div>
    );
}

export default Formm;
