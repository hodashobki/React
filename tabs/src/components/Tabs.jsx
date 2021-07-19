import React,{useState} from 'react'
import TabsInfo from './TabsInfo'
const Tabs = () => {
    
    const [content,setContent]=useState({})
    const text = [
        {
            label: "Tab 1",
            content: "Tab 1 content shows here.",
            textColor: "blue",
        },
        {
            label: "Tab 2",
            content: "Tab 2 content shows here.",
            textColor: "red",
        },
        {
            label: "Tab 3",
            content: "Tab 3 content shows here.",
            textColor: "green",
        }
    ]
    const handleTab=(e,a)=>{
        setContent(text[a])
    }
    
    return (
        <>
        
        <div className="container">
            <div className="buttons">
                <button  onClick={(e)=>handleTab(e,0)}>Tab 1</button> 
                <button  onClick={(e)=>handleTab(e,1)}>Tab 2</button>
                <button  onClick={(e)=>handleTab(e,2)}>Tab 3</button>
            </div>
            
            <div className="content">
                <TabsInfo content={content} />
            </div>
        </div>
        </>
    )
}


export default Tabs;