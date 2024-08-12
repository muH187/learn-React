import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])
  

  const saveToLS = (params) => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  

  const handleEdit = (e, id) => {
    let todo = todos.filter(i=>i.id === id)
    setTodo(todo[0].todo)
    let newTodos = todos.filter(item=>{
      return item.id!==id
    })
    setTodos(newTodos)
    saveToLS()
  }
  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item=>{
      return item.id!==id
    })
    setTodos(newTodos)
    saveToLS()
  }
  const handleAdd = () => {
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}])
    setTodo("")
    saveToLS()
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
   
  }
  const handleCheckBox = (e) => {
    let id = e.target.name
    let index = todos.findIndex(item=>{
      return item.id === id
    })
    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    saveToLS()
  }
  

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 p-5 rounded-xl bg-violet-100 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className='text-xl font-bold'>Add Todos</h2>
          <input onChange={handleChange} value={todo} type="text" className='w-1/2 text-lg p-3 rounded-md'/>
          <button className='bg-violet-700 hover:bg-violet-800 disabled:bg-violet-700 rounded-lg px-4 py-1 text-white mx-5 font-bold text-xl' onClick={handleAdd} disabled={todo.length<=3} >Save</button>
        </div>
        <h2 className='text-xl font-bold'>Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className='m-5 font-semibold'>No Todos to display</div> }
          {todos.map(item=> {

          
          return <div key={item.id} className="todo flex w-1/3 justify-between my-3">
            <div className='flex gap-5'>
              <input name={item.id} onChange={handleCheckBox} type="checkbox" value={item.isCompleted} id=''/>
              <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
            </div>
            <div className="buttons flex">
              <button className='bg-violet-700 hover:bg-violet-800 rounded-lg px-4 py-1 text-white mx-2 font-bold text-sm' onClick={(e)=>{handleEdit(e, item.id)}}>Edit</button>
              <button className='bg-violet-700 hover:bg-violet-800 rounded-lg px-4 py-1 text-white mx-2 font-bold text-sm' onClick={(e)=>{handleDelete(e, item.id)}}>Delete</button>
            </div>
          </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
