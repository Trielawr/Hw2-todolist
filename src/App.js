import { Formik } from 'formik';
import './App.css';
//import UncontrolledForm from './UncontrilledForm/UncontrolledForm';
import ControledForm from './ControledForm/ControledForm';
// import FormikComponent from './Forms/Formik'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Homework №6</h1>
      </header>
      <main className="app-content">
        <ControledForm/>
      </main>
      <footer className="app-footer">
        <span>Some footer example</span>
      </footer>
    </div >
  );
}

export default App;
