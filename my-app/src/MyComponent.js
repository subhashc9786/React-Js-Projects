import React, { useState, useEffect } from 'react';

const MyComponent =() =>{
  const [data, setData] = useState(null);

  useEffect(() => {
    // This function will be executed after each render
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {setData(data);
      console.log(data)});

    // Optionally, return a cleanup function
    return () => {
        console.log('useEffect');
      // This function will be executed before the component unmounts
      // or before executing the effect the next time
      // (if any dependencies change)
    };
  }, []); // Empty dependency array means the effect runs only once after the initial render

  const handleOnclick =()=>{
    window.location.href = '';
    console.log(' handleClisk is running');
  }
  return (
    <div>
    <h1>MY COMPONENT</h1>
    <button onClick={handleOnclick}>hello</button>
      {/* Render the  fetched data */}
      <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Body</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {data&& data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.body}</td>
            <td>{item.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default MyComponent;
