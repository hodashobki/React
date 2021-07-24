import React,{ useState } from "react";
// import './style.css';
 const UserFormm=(props)=>{
     const tasks=["Python Black belt","java Black belt","Mern Black belt"];
     const[task,setTask]=useState("");
    const [newtask,setNewtask]=useState([]);
    
    const handeldelete=(del)=>{
const filternewtask=newtask.filter((task,j)=>{
    return j!==del;
});
setNewtask(filternewtask);
    } 
    
    const handelsubmit=(e)=>{
        e.preventDefault();
        if(task.length===0){
            return;
        }
        const todoItem={
            text:task,
            complete:false,
        }
       setNewtask([...newtask,todoItem]);
        setTask("");
       
    }

    const  handelToggleComplete=(idx)=>{
        const updatedTodo=newtask.map((task,j)=>{
            if(idx===j){task.complete=!task.complete;}
        });
        setNewtask(updatedTodo);
    }
    // const handelNewtask=(task)=>{
    //     setNewtask(newtask.concat(task))
    // }

     return(
         <div>
          <form onSubmit={(e)=>{handelsubmit(e)}}>
              <input type="text" onChange={(e)=>{setTask(e.target.value)}} value={task} />
              {/* <select value={task} onChange={(e)=>setTask(e.target.value)}>
                  {tasks.map((task,i)=>
                  <option key={i} value={task}>{task}</option>
                  )}
              </select> */}
              <button>Add</button>
          </form>
         
         
             {newtask.map((task,j)=>{
                 const todoClass=[];
                 if(task.complete){
                    todoClass.push("line_through")
                }
            return(
                <div key={j}>
                    <input onChange={(e)=>{
                      handelToggleComplete(j);
                    }} checked={task.complete} type="checkbox"/>
                    <span className={todoClass}>{task.text}</span>
                    <button onClick={(e)=>{handeldelete(j)}}>Delete</button>
                </div>
            );
        })}
       
        </div>
    );
}
export default UserFormm;