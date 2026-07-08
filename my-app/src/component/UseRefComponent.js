import React, { useEffect } from 'react'
import { useRef } from 'react';

export const UseRefComponent = () => {
  const containerRef = useRef(null);


  // useEffect(() => {

  //   const handleScroll = () => {

  //     const container = containerRef.current;

  //     if (container.scrolltop + container.offsetHeight >= container.scrollHeight) {
  //       // fetch more data or perform infinite scroll logic
  //     }

  //   };

  //   const container = containerRef.current;
  //   container.addEventListener('scroll', handleScroll);

  //   return () => {
  //     container.removeEventListener('scroll', handleScroll);
  //   }
  // }, [dsf]);

  const handleClick = () => {
    console.log(containerRef.current);
    alert(`you clicked`)
    // containerRef.current = containerRef.current + 1;
  }
  // console.log(containerRef.current);

  return (
    <div style={{ height: "500px", overflowY: 'scroll' }}>

    

      <input  onChange={handleClick} />

      {/* <iframe src="https://stackoverflow.com/questions/70513786/how-to-get-lorem-ipsum-to-instantiate-on-multiple-lines-instead-of-1-in-vs-code" title="W3Schools Free Online Web Tutorials"></iframe> */}
    </div>

  )
}
