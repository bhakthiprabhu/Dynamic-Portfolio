import { Helmet } from "react-helmet";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {

  return (
    <>
      <Helmet>
        <title>Portfolio</title>
        <meta name="description" content="John Doe - Full-stack Developer Portfolio" />
      </Helmet>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App
