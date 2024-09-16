
import React, { lazy, Suspense, useEffect, useState } from 'react';
import './App.css';
import Fetchmethod from './FetchMethod/Fetchmethod.jsx';
// import MyComponent from './MyComponent';

// import TextComponent from './TextComponent';
// import UserRef from './UserRef';
// import AnotherStateUpadate from './component/AnotherStateUpadate';
// import { HigherOrderComponent } from './component/HigherOrderComponent';
// import { UseRefComponent } from './component/UseRefComponent';
// import { NewFormComp } from './component/NewFormComp';
const HigherOrderComponent =lazy(() =>import('./component/HigherOrderComponent.js'));

function App() {
  
  // const NewFormComp = lazy(()=>import("./component/HigherOrderComponent.js"))

const [audio, setaudio] = useState();
const [writetext, setWriteText] = useState();
  // const [increase,setIncrease]= useState(0);
  
useEffect(() => {
  setTimeout(()=>{
    const textTospeak = "Hello There";

    const utterance = new SpeechSynthesisUtterance(writetext);
    setaudio(window.speechSynthesis.speak(utterance));
  },1000)
  
}, [writetext]);


//   const handleCallback = ()=>{
// console.log("div click ...");
//   }
  // var arr = [];
//   const handleDownKey=(e)=>{
// console.log(e.key)
// arr.push(e.key);

  
//   }
// const handleDecrease =()=>{
//   if(increase >=1){
//     setIncrease(increase-1);
//   } 
// }

// console.log(arr);
  return (
  <>
  {/* <div>
<textarea onChange={(e)=>setWriteText(e.target.value)}></textarea>
  </div>
 
    <div>
        <h2>Audio Player</h2>
        <audio controls>
          <source src={audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div> */}
  


   {/* Progess:<progress value="450" max = "1000"></progress> */}
  {/* <p>This is a paragraph inside a div.</p> */}
  {/* <p>Another paragraph inside the same div.</p> */}

{/* <span style={{'color':'red'}}>red</span>  */}

{/* <img  className="tooltip" loading='lazy' src="./background1.jpg"  alt="A beautiful sunset over the ocean"/> */}
    {/* <HigherOrderComponent/> */}
   {/* <TextComponent/> */}
    {/* <MyComponent/> */} 
    {/* <UserRef/> */}
    {/* <TextComponent/> */}
    {/* <div tabIndex={0} onKeyDown={handleDownKey} onClick={handleCallback} className='app-child'>hello</div> */}
      {/* <h1>increase-{increase}</h1>
      <button onClick={()=>setIncrease(increase +5)}>increase</button>
      <button onClick={handleDecrease}>Decrease</button> */}
      {/* <a href="https://example.com" >Link Text</a> */}

{/* <AnotherStateUpadate/> */}
    {/* <div className='main'>
        <h1>
          main 
        </h1>
      </div> */}
     {/* <UseRefComponent/> */}
     {/* <Suspense  fallback={<div>loading...</div>}>

     <HigherOrderComponent/>
     </Suspense> */}
     <HigherOrderComponent useranme='sonu'/>
{/* <h1>hello</h1> */}
    </>
  );
}

export default App;
