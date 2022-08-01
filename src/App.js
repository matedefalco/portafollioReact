import Header from "./Componentes/Landing/Header/Header";
import Intro from "./Componentes/Landing/Intro/Intro";
import ScrollBar from "./Componentes/UI/ScrollBar/ScrollBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollBar />
      <Intro />
    </div>
  );
}

export default App;
