import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Project from "./pages/Projects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Skills from "./pages/Skills";

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/blog" element={<Blog />} />


      </Routes>
    </Router>
  );
}

export default App;
