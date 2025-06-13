import './App.css'
import { Nav, Hero, About, Contact, Footer } from "./components";


function App() {

  return (
    <div className="app-background">
      <Nav />
      <Hero />
      {/* <div id="projects">
        <Projects />
      </div> */}
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App
