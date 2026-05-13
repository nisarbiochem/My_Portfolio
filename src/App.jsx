import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Publications from "./components/Publications"
import Grants from "./components/Grants"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Publications />
      <Grants />
      <Skills />
      <Contact />
    </div>
  )
}

export default App