import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Porto from "./components/Porto/porto";
import Copyright from "./components/Copyright/copyright";
import Experience from "./components/Experience/experience";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Porto />
      <Experience />
      <Copyright />
    </div>
  );
}

export default App;
