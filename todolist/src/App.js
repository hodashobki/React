import TaskForm from './components/TaskForm';
import Todo from './components/Todo';
import Todoo from './components/Todoo';
import React,{useState} from 'react';
import './App.css';

function App() {
const[newTodo,setNewTodo]=useState("");
const [todos,setTodos]=useState([]);
// submit handle
const handleNewTodoSubmit=(e)=>{
  e.preventDefault();
  if(newTodo.length===0){
    return; 
  }
//  setTodos([...todos,newTodo]);
setTodos([...todos,{text:newTodo,complete:false}])
 console.log(todos);
  setNewTodo("");

};
// Delete method
const handeTodoDelete=(e,j)=>{
const filterdtodos=todos.filter((todo,i)=>{
  return i!==j;
});
setTodos(filterdtodos);
}
// handel checkbox
const  HandleTooglecomplete=(e,j)=>{
  const updatedTodo=todos.map((todo,i)=>{
if(i===j){
  todo.complete=!todo.complete;
}
return todo;
  });
setTodos(updatedTodo);
}

  return (
    <div className="App">
     {/* <TaskForm/> */} 
     {/* <Todo /> */}
<form onSubmit={(e)=>{handleNewTodoSubmit(e)}}>
  <input type="text" onChange={(e)=>{setNewTodo(e.target.value)}}  value={newTodo}></input>
  <div> <button>Add</button></div>
</form>
<>
{
  todos.map((todo,i)=>{
    
    return (
     <Todoo  todo={todo} 
      HandleTooglecomplete={ HandleTooglecomplete}
      handeTodoDelete={handeTodoDelete}
      key={i}
      i={i}
      />
    );
  })
}
</>

    </div>
  );
}

export default App;
