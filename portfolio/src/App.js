import Home from "./components/Home";
import Navbar from "./components/Navbar"
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Blog />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
