import { useState } from 'react';
import AddList from './AddList';
import './App.css';
import ButtonComponent from './ButtonComponent';
import ClassComponent from './ClassComponent';


function App() {
  const [changeComp, setChangeComp] = useState("false");

  const  onChangeComponent = () => {
   const newchangeComp = !changeComp;
   setChangeComp(newchangeComp);
  }

  return (
    <div className="App">
      <header>
        {changeComp ? <ClassComponent /> : <AddList />}
        <br/>
        <ButtonComponent type={ "button" } text={ "Change  Component" } onClick={ () => onChangeComponent() } />
        </header>
    </div >
  );
}

export default App;
