
import React, { lazy, Suspense, useEffect, useState } from 'react';
import './App.css';
import Fetchmethod from './FetchMethod/Fetchmethod.jsx';
import { UseRefComponent } from './component/UseRefComponent.js';
import Todos from './component/Todos.js';
import DisplayComponent from './component/LiftingUpState/DisplayComponent.js';
import InputComponent from './component/LiftingUpState/InputComponent.js';
import ImageUpload from './component/ImageUpload.jsx';
import { UseReducer } from './component/UseReducer.jsx';
import { Sidebar } from './component/Sidebar/Sidebar.jsx';
// import MyComponent from './MyComponent';

// import TextComponent from './TextComponent';
// import UserRef from './UserRef';
// import AnotherStateUpadate from './component/AnotherStateUpadate';
// import { HigherOrderComponent } from './component/HigherOrderComponent';
// import { UseRefComponent } from './component/UseRefComponent';
// import { NewFormComp } from './component/NewFormComp';
const HigherOrderComponent = lazy(() => import('./component/HigherOrderComponent.js'));

function App() {

  // const NewFormComp = lazy(()=>import("./component/HigherOrderComponent.js"))

  const [audio, setaudio] = useState();
  const [writetext, setWriteText] = useState();
  // const [increase,setIncrease]= useState(0);

  useEffect(() => {
    setTimeout(() => {
      const textTospeak = "Hello There";

      const utterance = new SpeechSynthesisUtterance(writetext);
      setaudio(window.speechSynthesis.speak(utterance));
    }, 1000)

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
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [email, setEamil] = useState('');
  const [image, setImage] = useState(null);
  // const [image, setImage]= useState('')
  // useEffect(() => {
  //   const fetchData = async () => {


  //     const response = await fetch(`https://dummyjson.com/products`);
  //     const data = await response.json()
  //     setData(data)

  //   }
  //   fetchData()
  // }, [])

  const hanlePostIMage = async () => {

    // const res = await axios.post(`url`, { name, email, phone })
  }
  // console.log(data.products)
  // const handleChange = (e) => {
  //   console.log(e)
  //   if (e == "Increase" & value <= 9) {
  //     setValue(value + 1);
  //   } else if (value > 0) {
  //     setValue(value - 1);
  //   }
  // }
  const handleImageUpload = (e) => {
    setImage(e)
  }
  console.log(image)

  return (
    <>
      <div>
        <Sidebar />
        {/* <UseReducer /> */}
        {/* <ImageUpload /> */}
        {/* <input type='file' onChange={(e) => handleImageUpload(e.target.files[0])} /> */}
        {/* <table>
          <tr>
            <th>Title</th>
            <th>description</th>
            <th>price</th>
          </tr>{data?.products?.map((value) => {
            console.log(value);

            return (
              <tr>
                <td>{value.title}</td>
                <td>{value.description}</td>
                <td>{value.price}</td>
              </tr>
            )

          })

          }



        </table> */}

      </div>

      {/* <h1>{value}</h1>
      <button onClick={() => handleChange("Increase")}>Increase</button>
      <button onClick={() => handleChange("Decrease")}>Decrease</button> */}

      {/* <h1>App component</h1> */}
      {/* <InputComponent text={text} setText={setText} /> */}
      {/* <DisplayComponent text={text} /> */}
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
      {/* <UseRefComponent /> */}
      {/* <Todos /> */}
      {/* <Suspense  fallback={<div>loading...</div>}>

     <HigherOrderComponent/>
     </Suspense> */}
      {/* <HigherOrderComponent useranme='sonu'/> */}
      {/* <h1>hello</h1> */}
    </>
  );
}

export default App;
