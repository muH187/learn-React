import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className="container mx-auto my-5 rounded-xl">
        <div className="bg-violet-100">
          <h1>Your Todos</h1>
        </div>
      </div>
    </>
  )
}

export default App
