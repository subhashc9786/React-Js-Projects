import React, { useState } from 'react'

const Form = () => {
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');



    const handlesubmit =(e)=>{
        e.preventDefault();
        alert(firstName,lastName,email);
        console.log(firstName,lastName,email);
    }

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <label>Enter your firstName:
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </label>
                <label>Enter your Lastname:
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </label>
                <label>Enter your email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form