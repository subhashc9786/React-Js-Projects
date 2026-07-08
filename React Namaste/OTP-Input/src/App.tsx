import { useEffect, useRef, useState } from "react";

import "./App.css";

const OTP_DIGITS_COUNT = 5;

function App() {
  const [inputArr, setInputArr] = useState(
    new Array(OTP_DIGITS_COUNT).fill("")
  );

  const refArr = useRef([]);
  console.log(refArr);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleOnChange = (value: any, index) => {
    if (isNaN(value)) return;
    console.log(value);
    const newValue = value.trim();
    const newArr = [...inputArr];
    newArr[index] = newValue.slice(-1);
    setInputArr(newArr);

    newValue && refArr.current[index + 1]?.focus();
  };

  const handleOnKeyDown = (e, index) => {
    if (!e.targetvalue && e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  };
  return (
    <div className="App">
      <h1>validate OTP</h1>
      {inputArr.map((input, index) => {
        return (
          <input
            className="otp-input"
            key={index}
            ref={(input) => {
              refArr.current[index] = input;
            }}
            value={inputArr[index]}
            onChange={(e) => handleOnChange(e.target.value, index)}
            type="text"
            onKeyDown={(e) => handleOnKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
}

export default App;
