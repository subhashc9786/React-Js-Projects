import React, { useState } from 'react'

const Login = () => {
const [value,setValue]=useState({email:"",password:""})
    const handleSubmit=()=>{

    }

    const handleChange = (e) => {
        const {id , value} = e.target   
        setValue(prevState => ({
            ...prevState,
            [id] : value
        }))};
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email"></label>
            <input type="email" onChange={(e)=>handleChange(e.target.value)}/>
            <input type="password" onChange={(e)=>handleChange(e.target.value)}/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login;