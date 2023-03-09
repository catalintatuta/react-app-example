import { useState } from 'react';
import './App.css';
import ClassComponent from './ClassComponent';

function App() {
  const [num, setNum] = useState(10)

  const [list, setList] = useState([10])

  const buttonHandler = () => {
      setNum(num+1);
  }

  const buttonHandler2 = () => {
      setList([...list, num]);
  }

  return (
    <div className="App" style={{border: '10px solid red', color: 'red'}}>
      <h1>App component</h1>
      <p>Number from useState: {num}</p>
      <p>List from useState: {list}</p>
      <button onClick={buttonHandler} >Increase number</button>
      <button onClick={buttonHandler2} >Add it to the list</button>
      <ClassComponent numberProp={num} aStringProp="a string value">
        <span><em>This value is from the 'children' prop</em></span>
      </ClassComponent>
      
    </div>
  );
}

export default App;
