import './App.css';
import ClassComponent from './ClassComponent';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Homework №4</h1>
      </header>
      <main className="app-content">
        <ClassComponent/>
      </main>
      <footer className="app-footer">
        <span>Some footer example</span>
      </footer>
    </div >
  );
}

export default App;
