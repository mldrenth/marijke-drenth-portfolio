import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <main className="text-gray-400 bg-sky-900 body-font">
      <NavBar/>
      <About />
      <Projects/>
      <Skills/>
      <Contact/>
      
      
    </main>
  );
}

export default App;
