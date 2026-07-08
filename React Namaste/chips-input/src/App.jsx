
import { useState } from 'react';
import './App.css'


function App() {

  const [value, setValue] = useState({ name: "", email: "", address: "" });

  const { name, email, address } = value;
  const InputBox = ({ label, id, name, value, onChange }) => {

    return (
      <div>
        {label && <label htmlFor="">{label}</label>}
        <input id={id} label={label} value={value} name={name} onChange={onChange} type="text" />
      </div>
    )
  }

  console.log(value);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setValue(prev => ({ ...prev, [name]: value }))
  }
  return (
    < div className='app'>
      <h1> Chips input</h1>

      <InputBox value={name} label="name" name="name" onChange={(e) => handleChange(e)} />
      <InputBox value={email} name="email" label="email" onChange={handleChange} />


    </div>
  )
}

export default App
