import Header from './Componentes/Landing/Header/Header';
import ScrollBar from './Componentes/UI/ScrollBar/ScrollBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ScrollBar />
    </div>
  );
}

export default App;
