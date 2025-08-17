import { Helmet } from "react-helmet";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
      <Helmet>
        <title>John Doe Portfolio</title>
        <meta name="description" content="John Doe - Full-stack Developer Portfolio" />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App
