import React ,{useState} from 'react';
function ToDoList(){

    const [tasks , setTasks] = useState(["Eat breakfast ", "Reading Book", "Doing Exercise"]);
    const[newTask , setNewTask] = useState(" ");

    function handleInputChange(event){
setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim()!==""){
        setTasks(t=>[...t,newTask]);
        setNewTask("");
        }
    }
    function deleteTask(index){
 const updateTasks = tasks.filter((_ ,i) => i !== index);
 setTasks(updateTasks);
    }
return(
<div div className='to-do-list'>
<h1>TO-DO-List</h1>
<div>
    <input
    type="text"
    placeholder ="enter a task..."
    value = {newTask}
  onChange={handleInputChange} />
  <button className='add-btn'
    onClick = {addTask}>
    Add
  </button>
</div>
<ol>
    {tasks.map((task , index)=>
    <li key = {index}>
        <span className='text'>{task}</span>
        <button className='delete-btn' 
            onClick = {()=>deleteTask(index)}>
            delete</button>
    </li>
    )}
</ol>
</div>


);
}
export default ToDoList;