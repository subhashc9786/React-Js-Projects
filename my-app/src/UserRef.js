import React, { useEffect, useRef, useState } from 'react'

const UserRef = () => {
const [inputValue, setinputValue] = useState();
const previousInputValue = useRef(0);
console.log(previousInputValue);

useEffect(() => {
    previousInputValue.current = inputValue;
},[inputValue]);

  return (
    <>
        <input
            value={inputValue}
            onChange={(e)=> setinputValue(e.target.value)}
        />
        <h1>Current count:{inputValue}</h1>
        <h2>Previous count:{previousInputValue.current}</h2>
    </>

  )
}

export default UserRef