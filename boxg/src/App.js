import BoxForm from './components/BoxForm';
import Boxgenerator from './components/Boxgenerator';
import './App.css';
import {useState} from 'react'

function App() {
  const [newColor,setNewColor]=useState([]);
  const onAddingColor=(color)=>{
    setNewColor([...newColor,color]);
  }
  return (
    <div className="App">
     <BoxForm handel={onAddingColor}/> 
     <Boxgenerator colors={newColor}/>
    </div>
  );
}

export default App;
