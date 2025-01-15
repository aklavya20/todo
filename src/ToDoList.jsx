import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState(["Eat Break Fast" , "Take a Shover" , "Walk with Dog"]);
  const [newTask, setNewTask] = useState("");

  
  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  
  function addTask() {
    if(newTask.trim() !== ""){
        setTasks(tasks => [...tasks,newTask])
        setNewTask("")
    }
    else{
        alert("Enter the Task")
    }
  }
  
  function deleteTask(item) {
    setTasks(tasks => tasks.filter(task => task !== item))
  }
  
  function moveTaskUp(index) {

    if(index > 0){
        const updatedTask = [...tasks];
        [updatedTask[index],updatedTask[index-1]] =
        [updatedTask[index-1],updatedTask[index]];
        setTasks(updatedTask)
    }
  }
  function moveTaskDown(event) {}



  return (
    <div className="to-do-list">
        <h1>To Do List</h1>
        <div>
            <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange} />
            <button className="add-button" onClick={addTask}>Add</button>
            <ol>
                {tasks.map((task,index) => 
                <li key={index}>
                 <span className="text">{task}</span>
                 <button className="delete-button" onClick={() => deleteTask(task)}>Delete</button>   
                 <button className="move-button" onClick={() => moveTaskUp(index)}><i className="fa-solid fa-arrow-up">+</i></button>   
                 <button className="move-button" onClick={() => moveTaskDown(index)}><i className="fa-solid fa-arrow-down">-</i></button>   
                </li>
                )}
            </ol>
        </div>
    </div>
  )
}
export default TodoList;