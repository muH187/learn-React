import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleEdit = () => {

  }
  const handleDelete = () => {
    
  }
  const handleAdd = () => {
    setTodos([...todos, {todo, isCompleted: false}])
    setTodo("")
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
   
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 p-5 rounded-xl bg-violet-100 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className='text-xl font-bold'>Add Todos</h2>
          <input onChange={handleChange} value={todo} type="text" className='w-1/2 text-lg p-3 rounded-md'/>
          <button className='bg-violet-700 hover:bg-violet-800 rounded-lg px-4 py-1 text-white mx-5 font-bold text-xl' onClick={handleAdd}>Add</button>
        </div>
        <h2 className='text-xl font-bold'>Your Todos</h2>
        <div className="todos">
          {todos.map(item=> {

          
          return <div key={todo} className="todo flex w-1/3 justify-between my-3">
            <input type="checkbox" value={todo.isCompleted} name='' id=''/>
            <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
            <div className="buttons">
              <button className='bg-violet-700 hover:bg-violet-800 rounded-lg px-4 py-1 text-white mx-2 font-bold text-sm' onClick={handleEdit}>Edit</button>
              <button className='bg-violet-700 hover:bg-violet-800 rounded-lg px-4 py-1 text-white mx-2 font-bold text-sm' onClick={handleDelete}>Delete</button>
            </div>
          </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
