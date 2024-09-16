import React, { useState } from 'react'

const WithIncrement =(Component)=>{
    const [count, setCount] = useState(0);
    
    const increment =()=>{
        setCount(count+1);
    }
    return (props) =>{
        console.log("props",props);
        return(
            <Component {...props} count={count} increment = {increment}
            />
        )
    }
}


const Button=({count,increment})=>{

return(
    <div className='container' >
        <h1>Count:{count}</h1>
        <button onClick={increment}>Increment</button>
    </div>
)
}


 const HigherOrderComponent = (props) => {

const WithIncrementButton = WithIncrement(Button);
  return (
    <div>
        <WithIncrementButton firsttName={props.useranme}/>
    </div>
  )
}

export default HigherOrderComponent;