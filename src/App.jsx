import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-[#141c29]  bg-linear-80 from [#120a24]  to-[#090317] text-white">
      <Navbar />
      <Home />
      {/* <About /> */}
       <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
