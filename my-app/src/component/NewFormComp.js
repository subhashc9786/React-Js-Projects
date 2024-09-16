import React, { useEffect, useState } from 'react'

export const NewFormComp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        async function asyncFun() {

            fetch('db.json',{
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
              })
                .then(res => res.json())
                .then(data => {
                    setEmail(data[0].email);
            console.log(data[0].email)});

        }
        asyncFun();
    }, []);





    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('submits');
            /* updating lastName of user with id 2 */
         await   fetch('db.json', {
                method: 'POST', /* or PATCH */
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email:{email}
                })
            })
                .then(res => res.json())
                .then(data=>console.log('submit data',data));
                
        } catch (error) { 
            console.log(error);
        }

        // console.error('Failed to send email:', error);


    }

    return (
        <div>
            <form onSubmit={formSubmit}>

                <input value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
                <input value={age} onChange={(e) => setAge(e.target.value)} />
                <input value={address} onChange={(e) => setAddress(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
