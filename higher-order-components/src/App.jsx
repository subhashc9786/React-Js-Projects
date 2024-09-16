import {  lazy} from 'react';
import './App.css'
const HigherOrderComponents  = lazy(()=>import('./HigherComponent.jsx').then(module => ({ default: module.HigherComponent })))

function App() {
// const value = useRef();
// console.log(value.current);
  return (
    <>
    {/* <input ref={value}   /> */}
    <p >the password should contain at least 18 characters</p>
      <h1>Welcome My app!</h1>
      <HigherOrderComponents/>
    </>
  )
}

export default App
