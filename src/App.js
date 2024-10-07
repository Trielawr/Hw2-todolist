// import { useState } from 'react';
import FunctionalComponent from './FunctionalComponent';
import styles from './App.module.css';
// import ButtonComponent from './ButtonComponent';
// import ClassComponent from './ClassComponent';



function App() {
  // const [changeComp, setChangeComp] = useState("false");

  // const  onChangeComponent = () => {
  //  const newchangeComp = !changeComp;
  //  setChangeComp(newchangeComp);
  // }

  return (
    <div className={ styles.App }>
      <header>
        <FunctionalComponent />
        {/* { changeComp ? <FunctionalComponent /> : <ClassComponent /> } */}
        {/* <br/>
        <ButtonComponent type={ "button" } text={ "Change  Component" } onClick={ onChangeComponent} /> */}
        </header>
    </div >
  );
}

export default App;
