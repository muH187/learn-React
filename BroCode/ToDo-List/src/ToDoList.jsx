import React, {useState} from "react"

function ToDoList(){

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {

        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask])
            setNewTask("")
        }
        
    }

    function deleteTask(index) {
        const updatedTask = tasks.filter((_, i) => i !== index)
        setTasks(updatedTask)
    }

    function moveUp(index) {
        if (index > 0) {
          const updatedTasks = [...tasks];
          [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
          setTasks(updatedTasks);
        }
    }

    function moveDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div className="todo-list">
            <h1>To-Do-List</h1>
            
            <div>
                <input type="text" placeholder="Enter task..." value={newTask} onChange={handleInputChange}/>
                <button className="addBtn" onClick={addTask}>ADD Task</button>
            </div>
            
            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="moveBtn" onClick={() => moveUp(index)}>👆</button>
                        <button className="moveBtn" onClick={() => moveDown(index)}>👇</button>
                    </li>)}
            </ol>

        </div>
    )
}

export default ToDoList