import { useState } from "react"

export default function Form() {
    const initialState=
    {
        name :'',
        email:"",
        password:"",
        mobile:"",
        altnum:""
    }
    const [form,setForm]=useState(initialState);
    const onNameChange=(e)=>{
        setForm({...form,name:e.target.value})
    }
    const onEmailChange =(e)=>{
        setForm({...form,email:e.target.value})
    }



    return (
        <>
        <div>
            <label>Name:</label>
            <input onChange={onNameChange} placeholder="Enter your name here.."></input>

        </div>
             <div>
            <label>email:</label>
            <input onChange={onEmailChange} placeholder="Enter your name here.."></input>

        </div>
             <div>
            <label>Name:</label>
            <input onChange={onNameChange} placeholder="Enter your name here.."></input>

        </div>
             <div>
            <label>Name:</label>
            <input onChange={onNameChange} placeholder="Enter your name here.."></input>

        </div>
             <div>
            <label>Name:</label>
            <input onChange={onNameChange} placeholder="Enter your name here.."></input>

        </div>
        </>
    )
}