import About from "../components/About";
import Home from "../components/Home";
import Navbar from "../components/Elements/Navbar";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const MainPage = () => {
  return(
    <>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Skills />
      <Contact />
    </>
  )
}

export default MainPage;