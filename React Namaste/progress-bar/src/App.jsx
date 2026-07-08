import { use, useEffect, useState } from 'react'
import './App.css'

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  useEffect(() => {
    setTimeout(() => setAnimatedProgress(progress), 100);
  }, []);

  return (
    <div className="outer">
      <div className="inner" style={{
        // width: `${progress}%`
        transform: `translateX(${animatedProgress - 100}%)`
        , color: animatedProgress < 1 ? "black" : "white"
      }}
        role='progressbar'
        aria-valuenow={progress}
        aria-valuemax="100"
        aria-valuemin="0">
        {progress}%
      </div>
    </div>
  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Progess Bar</h1>
      <ProgressBar progress={60} />
    </div>
  )
}

export default App
