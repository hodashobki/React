import React from 'react';
import './App.css';
import NewComponent from './components/NewComponent';

function App() {
  return (
    <div className="App">
      {/* <SomeComponent someProp="test" someOtherProp={ 67 }/> */}
      < NewComponent firstName="Doe" lastName="Jane" age={45} hair="Black"/>
      < NewComponent firstName="Smith" lastName="John" age={88} hair="Brown"/>
      < NewComponent firstName="Fillmore" lastName="Millard" age={50} hair="Brown"/>
      < NewComponent firstName="Smith" lastName="Maria" age={62} hair="Brown"/>
      
      
    </div>
  );
}

export default App;
