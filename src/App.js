import Header from "./Componentes/Landing/Header/Header";
import Intro from "./Componentes/Landing/Intro/Intro";
import AboutMe from "./Componentes/Landing/AboutMe/AboutMe";
import Skills from "./Componentes/Landing/Skills/Skills";
import ScrollBar from "./Componentes/UI/ScrollBar/ScrollBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <AboutMe />
      <Skills />
      <ScrollBar />
    </div>
  );
}

export default App;
