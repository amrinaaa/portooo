import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Porto from "./components/Porto/porto";
import Footer from "./components/Footer/footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Porto />
      <Footer />
    </div>
  );
}

export default App;
