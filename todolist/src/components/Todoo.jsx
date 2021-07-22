const Todoo=(props)=>{
    const todoClass=[];
    if(props.todo.complete){
      todoClass.push("line-through")

    }
    return(
        <div>
        <input type="checkbox" onChange={(e)=>{
       props.HandleTooglecomplete(e, props.i)
        }}  
        checked={props.todo.complete}></input>
<span className={todoClass}>{props.todo.text}</span>
<button onClick={(e)=>{props.handeTodoDelete(e,props.i)}} style={{marginLeft:"11px"}} >Delete</button>
    </div>
    );
}
export default Todoo;