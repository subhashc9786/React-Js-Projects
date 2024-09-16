import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState('empty');

    const onchange = (e) => {
        setCount(e);
    }


    return (
        <div>
            <h1>Counter</h1>
            <h1>{count}</h1>
            <input type="text" onChange={(e) => onchange(e.target.value)} />
            {/* <button  onClick={handleClick}>increment</button>
    <button  onClick={handleClick1}>decement</button> */}
        </div>
    )
}

export default Counter;