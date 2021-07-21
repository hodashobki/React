import {useState} from 'react';
 const Boxgenerator=(props)=>{
     return(
         <div style={{display:"flex"}}>
             {props.colors.map((color,i)=><div style={{backgroundColor:color,width:200,height:200,marginRight:10}}></div>)}
         </div>
     );
 }
 export default Boxgenerator;