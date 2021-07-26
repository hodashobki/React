import React,{useEffect, useState} from 'react'
import axios from 'axios';


const SearchResult = (props) => {
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
           <p>tttt</p> 
           {item.name}
           
           {/* {selected.length > 0 && selected.map((person, index)=>{
            return (<div key={index}>{person.name}</div>)
        })} */}
        </div>
    );
}

export default SearchResult
