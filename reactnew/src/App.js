import './App.css';
import {useState} from 'react';
import Form from './components/Form';
import Nnput from './components/Nnput';
import Productivity from './components/Productivity';
import Show from './components/Show';
function App() {

  
  const [exList,setExList]=useState([]);

  const handlingInpute=(insertedata)=>{
    setExList([...exList,insertedata]);
  }
  
  return (
    <div className="App">
      <h1>Hello World</h1>
      {/* <Form/> */}
      <Nnput handlingInpute={handlingInpute}/>
      <Show exList={exList} setExList={setExList}/>
     <Productivity/> 
    </div>
  );
}

export default App;
