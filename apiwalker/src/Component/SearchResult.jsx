import React,{useEffect, useState} from 'react'
import axios from 'axios';


const SearchResult = (props) => {

const chickif=()=>{
    if (selected=="people"){

    }}
    const chickifplanet=()=>{
     if(selected=="planets"){

    }
}

    const {selected,id}=props;
    const [item, setItem]=useState("")
    useEffect(()=>{
        console.log("************************")
        console.log(selected)
        console.log(id)
        axios.get("https://swapi.dev/api/"+selected+'/'+id)
            .then(response=>
                setItem(response.data))
    
    }, [id]); 
    return (
        <div>
          Name: {item.name}
          
            {chickif} <div>
               <p>Hair Color: {item.hair_color}</p>
               <p>Height: {item.height}</p>
               <p>Birthday year : {item.birth_year}</p>
               <p> Eye Color : {item.eye_color}</p>
           </div>
           <hr></hr> 
           {chickifplanet}
           <div>
               <p> {item.rotation_period}</p>
               <p> {item.gravity}</p>
               <p> {item.climate}</p>
               <p> {item.diameter}</p>
           </div> 
         
        
        </div>
    );
}

export default SearchResult
