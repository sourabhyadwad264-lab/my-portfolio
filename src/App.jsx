import Navbar from "./components/Navbar";
import { Suspense, lazy } from "react";
// import Hero from "./components/Hero";
//Lazy Loading
const Hero = lazy(() => import("./components/Hero"));
const Projects = lazy(() => import("./components/Projects"));
import About from "./components/About";
//import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
//Note :Both Lazy & Suspense are work as a pair in React.
//Where lazy()==> creates async loading. & while Suspense ==>It will handels the waiting state.

function App() {
  return (
    <>
      <Navbar />
       <Suspense fallback={<h2>Loading...</h2>}>
      <Hero />
      <Projects />
      </Suspense>      
          <About />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;