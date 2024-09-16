import { useState } from 'react'
import DatePicker from 'react-datepicker'

function ReactForm() {
  const [values, setValues] = useState({
    name:'',
    email:'',
    address:''
  })

  const [date, setDate] = useState(new Date().toLocaleDateString());
console.log(values);

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setValues({
    ...values,
    [name]: value,
  });
};

const handleSubmit =(e)=>{
e.preventDefault();
  console.log("values",values);
  console.log(date);
}


  return (
    <div className='main'>
      
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
    <input type="text"value={values.name} name="name" onChange={(e)=>handleInputChange(e)} />
      <label htmlFor="email">Email</label>
    <input type="email" value={values.email} name="email" onChange={(e)=>handleInputChange(e)} />
      <label htmlFor="address">Address</label>
    <input type="text" value={values.address}name="address" onChange={(e)=>handleInputChange(e)} />
    <label htmlFor="">Date</label>
    <DatePicker selected={date} onChange={(date) => setDate(date)} />
    <button type='submit'>submit</button>
    </form>

    </div>
  )
}

export default ReactForm;
