import React, { useState } from'react';
import ButtonValue from './ButtonValue';
export const Button=(props)=>{
    const {text}=props
    const tabsinfo=[{value:"Tab1 contain is showing here"},{value:"tab2 contain is showing here"},{value:"Tabe3 contain is showing here"}];
const[value,setVal]=useState({});
const handelclick1=(e)=>{
    setVal(tabsinfo[0])
}
const handelclick2=(e)=>{
    setVal(tabsinfo[1])
}
const handelclick3=(e)=>{
    setVal(tabsinfo[2])
}
    return(
        <div>
            <button onClick={handelclick1}>{props.text}1</button>
            <button onClick={handelclick2}>{props.text}2</button>
            <button onClick={handelclick3}>{props.text}3</button>
            <div className="tab">
        
             <ButtonValue value={value} />   
            </div>
            
        </div>
    );
}