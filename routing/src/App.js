import {Router} from '@reach/router'; 
import './App.css';
import Home from './components/Home';
import Hello from './components/Hello';
import Number from './components/Number';
import Color from './components/Color';
import Navbar from './components/Navbar';
import UsingMethod from './components/UsingMethod';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Router>
       <Home path="/home"/>
       {/* <Hello path="/:word"/> */}
       <Number path="/number/:x"/>
       <Color path="/:word/:font/:back"/>
       <UsingMethod path="/:value"/>
     </Router>
    </div>
  );
}

export default App;
