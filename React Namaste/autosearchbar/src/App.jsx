import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [inputs, setInput] = useState();
  const [results, setResults] = useState();
  const [showResults, setShowResults] = useState(false);

  const [cache, setCache] = useState({});


  const fetchData = async () => {
    if (cache[inputs]) {
      setResults(cache[inputs]);
    }
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + inputs);
    const json = await data.json();
    setResults(json?.recipes);
    setCache(prev => ({ ...prev, [inputs]: json?.recipes }))
  }
  console.log(results);

  useEffect(() => {
    fetchData()
    const timer = setTimeout(fetchData, 300);
    return () => {
      clearTimeout(timer);
    }
  }, [inputs]);

  return (
    <div className='App'>
      <h1>AutoComplate Search Bar</h1>
      <div>
        <input className='search-input' type="text" value={inputs} onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowResults(true)}
          onBlur={() => setShowResults(false)}
          id="" />
        {showResults && <div className='results-container'>
          {results?.map((r) => (
            <span className='result' key={r.id}>{r.name}</span>
          ))
          }
        </div>}
      </div>

    </div>
  )
}

export default App
