import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createContext } from 'react';
const MyContext = createContext();
// console.log('MyContext',MyContext);
const contextValue = "Hello, Call me .."
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <MyContext.Provider value={contextValue}>
    <App />
  </MyContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
