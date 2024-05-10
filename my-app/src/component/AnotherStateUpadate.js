import React, { useState } from 'react';

// Parent component holding the state
function AnotherStateUpadate() {
  const [count, setCount] = useState(0);

  // Function to update the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <ChildComponent count={count} incrementCount={incrementCount} />
      <AnotherComponent count={count} />
    </div>
  );
}

// Child component that changes the state
function ChildComponent({ count, incrementCount }) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}

// Another component that just displays the state
function AnotherComponent({ count }) {
  return <p>Another Component Count: {count}</p>;
}

export default AnotherStateUpadate;
