import { useState } from "react";
const Form=(props)=>{
    const [newColor,setNewColor]=useState("");
    const [boxes,setBoxes]=useState([]);


    const newBox=(e)=>{
        e.preventDefault();
       setBoxes([...boxes,newColor]);
    }
    return(
        <div>
        <form onSubmit={newBox}>
            <p>
                <label>
                    <input type="text" onChange={(e)=>{setNewColor(e.target.value)}}/>
                </label>
            </p>
            <button type="submit">Add Color</button>

        </form>
        <div style={{display:"flex"}}>
            {boxes.map((color,i)=>{
                return(
                    <div key={i} style={{backgroundColor:color,width:200,height:200,marginRight:10}}>

                    </div>
                );
            }
            )}
        </div>
        </div>
    );
}
export default Form;