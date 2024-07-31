import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState("Ali")
  const [form, setForm] = useState({email: '', phone: ''})

  const handleClick = ()=> {
    alert("Hey, I'm clicked.")
  }

  const handleMouseOver = ()=> {
    alert("I'm a mouse over.")
  }

  const handleChange = (e)=> {
    // setName(e.target.value)
    setForm({...form, [e.target.name]: e.target.value})
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click Me</button>
      </div>

      {/* <div className="red" onMouseOver={handleMouseOver}>
        Hey I'm a red div.
      </div> */}
      
      <input type="text" name='email' value={form.email} onChange={handleChange}/>
      <input type="text" name='phone' value={form.phone} onChange={handleChange}/>
      
    </>
  )
}

export default App
