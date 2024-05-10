import React from 'react'

const TextComponent = () => {
const handleLogin = ()=>{
  console.log('login click');
}
const Button = (props)=>{
  console.log(props);
  return(
  <div className={props.className} onClick={props.onClick}>Login</div>
  )
}
    let greeting = `Hello World,     
                Greetings to all,
                Keep Learning and Practicing!`
  return (
    <div>
    <Button className="btn-class" onClick={handleLogin}/>
        {/* <h1>{greeting}</h1> */}
    </div>
  )
}

export default TextComponent